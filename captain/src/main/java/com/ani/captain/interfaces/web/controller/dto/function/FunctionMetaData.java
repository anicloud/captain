package com.ani.captain.interfaces.web.controller.dto.function;

import java.util.List;

/**
 * Created by huangbin on 12/14/15.
 */
public class FunctionMetaData {
    public int functionId;
    public String name;
    public FunctionGroupData group;
    public List<ArgumentMetaData> input;
    public List<ArgumentMetaData> output;
    public FunctionConnType connType;
    public FunctionAccessType accessType;

    public FunctionMetaData() {
    }

    public FunctionMetaData(int functionId, String name, FunctionGroupData group,
                            List<ArgumentMetaData> input, List<ArgumentMetaData> output,
                            FunctionConnType connType, FunctionAccessType accessType) {
        this.functionId = functionId;
        this.name = name;
        this.group = group;
        this.input = input;
        this.output = output;
        this.connType = connType;
        this.accessType = accessType;
    }
}
