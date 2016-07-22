package com.ani.captain.interfaces.web.controller;

import com.ani.bus.device.application.service.DeviceBusService;
import com.ani.bus.device.commons.dto.device.DeviceMasterDto;
import com.ani.captain.interfaces.web.controller.dto.device.DeviceDataUtils;
import com.ani.captain.interfaces.web.controller.dto.device.DeviceMasterData;
import com.ani.captain.interfaces.web.controller.dto.device.DeviceState;
import com.ani.captain.interfaces.web.service.AccountDetails;
import com.ani.octopus.account.interfaces.AccountServiceFacade;
import com.ani.octopus.antenna.core.AntennaTemplate;
import com.ani.octopus.commons.accout.dto.AccountGroupDto;
import com.ani.octopus.commons.object.dto.object.ObjectMainInfoDto;
import com.ani.octopus.commons.object.dto.object.ObjectMainQueryDto;
import com.ani.octopus.commons.object.enumeration.AniObjectState;
import com.ani.octopus.commons.object.enumeration.AniObjectType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by huangbin on 7/7/16.
 */
@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/service/device")
public class DeviceController {
    @Resource
    AccountServiceFacade accountServiceFacade;

    @Resource
    private DeviceBusService deviceBusService;

    @Resource
    private AntennaTemplate antennaTemplate;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<DeviceMasterData> getDevices() {
//        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        Long accountId = accountDetails.accountDto.accountId;
        Long accountId = 764111382711898568L;
        List<ObjectMainInfoDto> objectDtos = new ArrayList<>();
        try {
            // get owned devices
            List<ObjectMainInfoDto> objectDtosOwned = antennaTemplate.objectInfoService.getObjectMainByAccountAndType(accountId, AniObjectType.DEVICE_OBJ, true, true);
            if (objectDtosOwned != null) {
                objectDtos.addAll(objectDtosOwned);
            }
            // get shared devices
            Set<AccountGroupDto> groupDtos = accountServiceFacade.getAccountInGroups(accountId);
            if (groupDtos != null && groupDtos.size() > 0) {
                List<Long> groupIds = new ArrayList<>();
                for (AccountGroupDto groupDto : groupDtos) {
                    groupIds.add(groupDto.groupId);
                }
                List<ObjectMainInfoDto> objectDtosShared = antennaTemplate.objectInfoService.getObjectMainByGrantedGroups(groupIds, AniObjectType.DEVICE_OBJ, true, true);
                if (objectDtosShared != null) {
                    objectDtos.addAll(objectDtosShared);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        List<DeviceMasterData> deviceMasterDatas = new ArrayList<>();
        Map<Long, ObjectMainInfoDto> mainInfoDtoMap = new HashMap<>();
        for (ObjectMainInfoDto objectDto : objectDtos) {
            if (mainInfoDtoMap.containsKey(objectDto.objectId)) continue;
            mainInfoDtoMap.put(objectDto.objectId, objectDto);
            // object state
            DeviceState state = DeviceState.INACTIVE;
            for (AniObjectState objectState : objectDto.hostsState.values()) {
                if (objectState == AniObjectState.ACTIVE) {
                    state = DeviceState.ACTIVE;
                } else if (objectState == AniObjectState.REMOVED) {
                    state = DeviceState.REMOVED;
                    break;
                }
            }
            DeviceMasterDto deviceMasterDto = deviceBusService.findDeviceMaster(objectDto.objectId);
            if (deviceMasterDto != null) {
                DeviceMasterData deviceMasterData = DeviceDataUtils.fromDeviceMasterDto(deviceMasterDto, state);
                if (deviceMasterData != null) {
                    deviceMasterData.permissions = DeviceDataUtils.fromPrivilegeDtos(objectDto.privileges);
                    deviceMasterDatas.add(deviceMasterData);
                }
            }
        }
        return deviceMasterDatas;
    }

    @RequestMapping(value = "/{deviceId}", method = RequestMethod.GET)
    public DeviceMasterData getDeviceById(@PathVariable Long deviceId) {
        DeviceMasterDto deviceMasterDto = deviceBusService.findDeviceMaster(deviceId);
        if (deviceMasterDto == null) {
            return null;
        }
        ObjectMainInfoDto objectDto;
        try {
            objectDto = antennaTemplate.objectInfoService.getObjectMain(new ObjectMainQueryDto(deviceId), true);
        } catch (Exception e) {
            objectDto = null;
        }
        if (objectDto == null) {
            return null;
        }
        // object state
        DeviceState state = DeviceState.INACTIVE;
        for (AniObjectState objectState : objectDto.hostsState.values()) {
            if (objectState == AniObjectState.ACTIVE) {
                state = DeviceState.ACTIVE;
            } else if (objectState == AniObjectState.REMOVED) {
                state = DeviceState.REMOVED;
                break;
            }
        }

        DeviceMasterData deviceMasterData = DeviceDataUtils.fromDeviceMasterDto(deviceMasterDto, state);
        if (deviceMasterData != null) {
            deviceMasterData.permissions = DeviceDataUtils.fromPrivilegeDtos(objectDto.privileges);
        }
        return deviceMasterData;
    }

}
