package com.ani.captain.interfaces.web.controller.dto.debug;

import java.util.List;

/**
 * Created by huangbin on 12/11/15.
 */
public class DeviceMasterData {
    public String physicalId;
    public String physicalAddress;
    public String name;
    public String description;

    public List<FunctionData> functions;

    public String avatarUrl;

    public List<String> tags;

    public DeviceState state;
    public String deviceId;
    public List<DeviceSlaveData> slaves;

    public String owner;
    public List<String> accountGroups;

    public List<PermissionData> permissions;

    public DeviceMasterData(String physicalId, String physicalAddress, String name, String description, List<FunctionData> functions, String avatarUrl, List<String> tags, DeviceState state, String deviceId, List<DeviceSlaveData> slaves, String owner, List<String> accountGroups) {
        this.physicalId = physicalId;
        this.physicalAddress = physicalAddress;
        this.name = name;
        this.description = description;
        this.functions = functions;
        this.avatarUrl = avatarUrl;
        this.tags = tags;
        this.state = state;
        this.deviceId = deviceId;
        this.slaves = slaves;
        this.owner = owner;
        this.accountGroups = accountGroups;
    }
}
