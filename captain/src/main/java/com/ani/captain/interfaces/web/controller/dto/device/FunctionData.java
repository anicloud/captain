package com.ani.captain.interfaces.web.controller.dto.device;

/**
 * Created by huangbin on 12/18/15.
 */
public class FunctionData {
    public Integer functionId;
    public String groupId;

    public FunctionData() {
    }

    public FunctionData(Integer functionId, String groupId) {
        this.functionId = functionId;
        this.groupId = groupId;
    }
}
