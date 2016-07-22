package com.ani.captain.interfaces.web.controller.dto.function;

/**
 * Created by huangbin on 7/7/16.
 */
public class ArgumentData {
    public ArgumentType argumentType;
    public Object instance;

    public ArgumentData() {
        argumentType = null;
        instance = null;
    }

    public ArgumentData(ArgumentType argumentType, Object instance) {
        this.argumentType = argumentType;
        this.instance = instance;
    }

    public Object get() {
        return instance;
    }

}
