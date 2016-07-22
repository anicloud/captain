package com.ani.captain.interfaces.web.controller.dto.function;

import com.ani.captain.interfaces.web.controller.dto.device.FunctionData;

import java.util.List;

/**
 * Created by huangbin on 7/7/16.
 */
public class InvocationData {
    public String deviceId;
    public Integer slaveId;
    public FunctionData function;
    public List inputValues;
    public List outputValues;
    public Boolean result;
    public String message;

    public InvocationData() {
    }

//    public InvocationData(String deviceId, Integer slaveId, FunctionData function, List inputValues, List outputValues, Boolean result, String message) {
//        this.deviceId = deviceId;
//        this.slaveId = slaveId;
//        this.function = function;
//        this.inputValues = inputValues;
//        this.outputValues = outputValues;
//        this.result = result;
//        this.message = message;
//    }
//
//    public InvocationData(Boolean result, String message) {
//        this.result = result;
//        this.message = message;
//    }
}
