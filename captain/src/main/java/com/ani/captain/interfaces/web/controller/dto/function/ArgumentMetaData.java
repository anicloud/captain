package com.ani.captain.interfaces.web.controller.dto.function;

/**
 * Created by huangbin on 12/14/15.
 */
public class ArgumentMetaData {
    public ArgumentType type;
    public String name;

    public ArgumentMetaData() {
    }

    public ArgumentMetaData(ArgumentType type, String name) {
        this.type = type;
        this.name = name;
    }
}
