package com.ani.captain.interfaces.web.controller.dto.debug;

/**
 * Created by huangbin on 12/18/15.
 */
public class FunctionData {
    public int functionId;
    public String groupId;

    public FunctionData() {
    }

    public FunctionData(int functionId, String groupId) {
        this.functionId = functionId;
        this.groupId = groupId;
    }
}
