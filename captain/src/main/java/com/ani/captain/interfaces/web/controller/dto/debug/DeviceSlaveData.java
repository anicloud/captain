package com.ani.captain.interfaces.web.controller.dto.debug;

import java.util.List;

/**
 * Created by huangbin on 12/18/15.
 */
public class DeviceSlaveData  {
    public String physicalId;
    public String physicalAddress;
    public String name;
    public String description;

    public List<FunctionData> functions;

    public String avatarUrl;

    public List<String> tags;

    public DeviceState state;

    public int deviceId;
    public String masterId;

    public DeviceSlaveData(String physicalId, String physicalAddress, String name, String description, List<FunctionData> functions, String avatarUrl, List<String> tags, DeviceState state, int deviceId, String masterId) {
        this.physicalId = physicalId;
        this.physicalAddress = physicalAddress;
        this.name = name;
        this.description = description;
        this.functions = functions;
        this.avatarUrl = avatarUrl;
        this.tags = tags;
        this.state = state;
        this.deviceId = deviceId;
        this.masterId = masterId;
    }
}
