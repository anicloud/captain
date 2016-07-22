package com.ani.captain.interfaces.web.controller;

import com.ani.bus.device.application.service.DeviceBusService;
import com.ani.bus.device.commons.dto.device.DeviceMasterDto;
import com.ani.bus.device.commons.dto.device.DeviceSlaveDto;
import com.ani.bus.device.commons.dto.device.FunctionDto;
import com.ani.captain.interfaces.web.controller.dto.function.FunctionDataUtils;
import com.ani.captain.interfaces.web.controller.dto.function.InvocationData;
import com.ani.captain.interfaces.web.controller.dto.function.FunctionMetaData;
import com.ani.octopus.antenna.core.AntennaTemplate;
import com.ani.octopus.antenna.core.dto.stub.StubInvocationDto;
import com.ani.octopus.commons.object.dto.object.ObjectMainQueryDto;
import com.ani.octopus.commons.object.dto.object.ObjectQueryDto;
import com.ani.octopus.commons.object.dto.object.ObjectSlaveQueryDto;
import com.ani.octopus.commons.stub.dto.StubDto;
import com.ani.octopus.stub.core.domain.stub.Stub;
import com.ani.octopus.stub.core.service.AniStubMetaService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 7/7/16.
 */
@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/service/function")
public class FunctionController {
    @Resource
    private AniStubMetaService aniStubMetaService;

    @Resource
    private DeviceBusService deviceBusService;

    @Resource
    private AntennaTemplate antennaTemplate;

    @RequestMapping(value = "/getByDevice", method = RequestMethod.GET)
    public List<FunctionMetaData> getFunctionMetas(@RequestParam Long deviceId, @RequestParam Integer slaveId) {
        List<FunctionMetaData> metaDatas = null;
        if (slaveId == null || slaveId == -1) {
            DeviceMasterDto masterDto = deviceBusService.findDeviceMaster(deviceId);
            if (masterDto.functions != null) {
                metaDatas = new ArrayList<>(masterDto.functions.size());
                for (FunctionDto functionDto : masterDto.functions) {
                    metaDatas.add(doGetFunctionMeta(functionDto.groupId, functionDto.functionId));
                }
            }
        } else {
            DeviceSlaveDto slaveDto = deviceBusService.findDeviceSlave(deviceId, slaveId);

            if (slaveDto.functions != null) {
                metaDatas = new ArrayList<>(slaveDto.functions.size());
                for (FunctionDto functionDto : slaveDto.functions) {
                    metaDatas.add(doGetFunctionMeta(functionDto.groupId, functionDto.functionId));
                }
            }
        }
        return metaDatas;
    }

    @RequestMapping(value = "/getById/{groupId}/{functionId}", method = RequestMethod.GET)
    public FunctionMetaData getFunctionMeta(@PathVariable Long groupId, @PathVariable Integer functionId) {
        return doGetFunctionMeta(groupId, functionId);
    }

    @RequestMapping(value = "/invoke", method = RequestMethod.POST)
    public InvocationData invokeFunction(@RequestBody InvocationData invocationData) {
        if (invocationData == null) {
            return null;
        }
        Stub stub = aniStubMetaService.getStub(new StubDto(Long.parseLong(invocationData.function.groupId), invocationData.function.functionId));
        StubInvocationDto invocationDto = FunctionDataUtils.toStubInvocationDto(invocationData, stub);
        List<StubInvocationDto> invocationDtos = new ArrayList<>();
        invocationDtos.add(invocationDto);
        try {
            Long deviceId = Long.parseLong(invocationData.deviceId);
            ObjectQueryDto queryDto = invocationData.slaveId == -1 ? new ObjectMainQueryDto(deviceId) : new ObjectSlaveQueryDto(deviceId, invocationData.slaveId);
            invocationDtos = antennaTemplate.objectInvokeService.invokeObject(queryDto, invocationDtos);
            invocationDto = invocationDtos.get(0);
            invocationData.result = invocationDto.success;
            invocationData.outputValues = invocationDto.outputArgsValue;
        } catch (Exception e) {
            invocationData.result = false;
            invocationData.message = "function invocation failed: " + e.getMessage();
        } finally {
            return invocationData;
        }

    }

    private FunctionMetaData doGetFunctionMeta(Long groupId, Integer functionId) {
        if (groupId == null || functionId == null) {
            return null;
        }
        Stub stub = aniStubMetaService.getStub(new StubDto(groupId, functionId));
        return FunctionDataUtils.fromFunctionMetaDto(stub);
    }
}
