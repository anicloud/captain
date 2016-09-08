package com.ani.captain.interfaces.web.controller.dto.function;

import com.ani.captain.interfaces.web.controller.dto.debug.FunctionData;
import com.ani.octopus.antenna.core.dto.stub.StubInvocationDto;
import com.ani.octopus.commons.stub.enumeration.PrivilegeType;
import com.ani.octopus.commons.stub.enumeration.StubConnType;
import com.ani.octopus.commons.stub.type.*;
import com.ani.octopus.stub.core.domain.stub.Stub;
import com.ani.octopus.stub.core.domain.stub.StubArgument;
import com.ani.octopus.stub.core.domain.stub.StubGroup;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 12/17/15.
 */
public class FunctionDataUtils {
    public static ArgumentType fromArgumentTypeDto(DataType dataType) {
        ArgumentType type = null;
        if (dataType != null) {
            if (dataType instanceof DataCollectionType) {
                DataCollectionType collectionType = (DataCollectionType) dataType;
                type = new ArgumentType(ArgumentType.Type.ARRAY, fromArgumentTypeDto(collectionType.membersDataType));
            } else {
                DataPrimitiveType primitiveType = (DataPrimitiveType) dataType;
                switch (primitiveType.type) {
                    case BOOLEAN:
                        type = new ArgumentType(ArgumentType.Type.BOOLEAN);
                        break;
                    case INTEGER:
                        type = new ArgumentType(ArgumentType.Type.INTEGER);
                        break;
                    case PERCENTAGE:
                        type = new ArgumentType(ArgumentType.Type.SHORT);
                        break;
                    case FLOAT:
                        type = new ArgumentType(ArgumentType.Type.FLOAT);
                        break;
                    case STRING:
                    default:
                        type = new ArgumentType(ArgumentType.Type.STRING);
                        break;
                }
            }
        }
        return type;
    }

    public static DataType toArgumentTypeDto(ArgumentType argumentType) {
        if (argumentType == null) {
            return null;
        }
        DataType dataType;
        if (argumentType.type == ArgumentType.Type.ARRAY) {
            dataType = new DataCollectionType(toArgumentTypeDto(argumentType.componentType), DataCollectionTypes.LIST);
        } else {
            switch (argumentType.type) {
                case BOOLEAN:
                    dataType = new DataPrimitiveType(DataPrimitiveTypes.BOOLEAN);
                    break;
                case INTEGER:
                    dataType = new DataPrimitiveType(DataPrimitiveTypes.INTEGER);
                    break;
                case SHORT:
                    dataType = new DataPrimitiveType(DataPrimitiveTypes.PERCENTAGE);
                    break;
                case FLOAT:
                    dataType = new DataPrimitiveType(DataPrimitiveTypes.FLOAT);
                    break;
                case STRING:
                default:
                    dataType = new DataPrimitiveType(DataPrimitiveTypes.STRING);
                    break;
            }
        }
        return dataType;
    }

    public static ArgumentMetaData fromArgumentDto(StubArgument ArgumentDto) {
        if (ArgumentDto == null) {
            return null;
        }
        return new ArgumentMetaData(fromArgumentTypeDto(ArgumentDto.dataType), ArgumentDto.name);
    }

    public static StubArgument toArgumentDto(ArgumentMetaData metaData) {
        if (metaData == null) {
            return null;
        }
        return new StubArgument(toArgumentTypeDto(metaData.type), metaData.name);
    }

    public static List<ArgumentMetaData> fromArgumentDtos(List<StubArgument> ArgumentDtos) {
        if (ArgumentDtos == null) {
            return null;
        }
        List<ArgumentMetaData> argumentMetaDatas = new ArrayList<>(ArgumentDtos.size());
        for (int i=0; i<ArgumentDtos.size(); i++) {
            argumentMetaDatas.add(i, fromArgumentDto(ArgumentDtos.get(i)));
        }
        return argumentMetaDatas;
    }

    public static List<StubArgument> toArgumentDtos(List<ArgumentMetaData> metaDatas) {
        if (metaDatas == null) {
            return null;
        }
        List<StubArgument> argumentDtos = new ArrayList<>(metaDatas.size());
        for (int i=0; i<metaDatas.size(); i++) {
            argumentDtos.add(i, toArgumentDto(metaDatas.get(i)));
        }
        return argumentDtos;
    }

    public static FunctionConnType fromFunctionConnTypeDto(StubConnType connTypeDto) {
        FunctionConnType connType = FunctionConnType.SYNC;
        if (connTypeDto == StubConnType.ASYNC) {
            connType = FunctionConnType.ASYNC;
        }
        return connType;
    }

    public static StubConnType toFunctionConnTypeDto(FunctionConnType connType) {
        StubConnType connTypeDto = StubConnType.SYNC;
        if (connType == FunctionConnType.ASYNC) {
            connTypeDto = StubConnType.ASYNC;
        }
        return connTypeDto;
    }

    public static FunctionAccessType fromFunctionAccessTypeDto(PrivilegeType typeDto) {
        FunctionAccessType type = FunctionAccessType.READABLE;
        if (typeDto == PrivilegeType.WRITE) {
            type = FunctionAccessType.WRITABLE;
        } else if (typeDto == PrivilegeType.EXECUTE) {
            type = FunctionAccessType.EXECUTABLE;
        }
        return type;
    }

    public static PrivilegeType toFunctionAccessTypeDto(FunctionAccessType accessType) {
        PrivilegeType typeDto = PrivilegeType.READ;
        if (accessType == FunctionAccessType.WRITABLE) {
            typeDto = PrivilegeType.WRITE;
        } else if (accessType == FunctionAccessType.EXECUTABLE) {
            typeDto = PrivilegeType.EXECUTE;
        }
        return typeDto;
    }

    public static FunctionGroupData fromFunctionGroupDto(StubGroup groupDto) {
        if (groupDto == null) {
            return null;
        }
        return new FunctionGroupData(String.valueOf(groupDto.groupId), groupDto.name);
    }

    public static StubGroup toFunctionGroupDto(FunctionGroupData groupData) {
        if (groupData == null) {
            return null;
        }
        return new StubGroup(Long.parseLong(groupData.groupId), groupData.name);
    }

    public static FunctionMetaData fromFunctionMetaDto(Stub metaDto) {
        if (metaDto == null) {
            return null;
        }
        FunctionMetaData functionMetaData = new FunctionMetaData(metaDto.stubId, metaDto.name,
                fromFunctionGroupDto(metaDto.group),
                fromArgumentDtos(metaDto.inputArguments),
                fromArgumentDtos(metaDto.outputArguments),
                fromFunctionConnTypeDto(metaDto.connType),
                fromFunctionAccessTypeDto(metaDto.privilegeType));

        return functionMetaData;
    }


    public static Stub toFunctionMetaDto(FunctionMetaData metaData) {
        if (metaData == null) {
            return null;
        }
        return new Stub(
                metaData.functionId,
                metaData.name,
                toFunctionGroupDto(metaData.group),
                toArgumentDtos(metaData.input),
                toArgumentDtos(metaData.output),
                toFunctionConnTypeDto(metaData.connType),
                toFunctionAccessTypeDto(metaData.accessType)
                );
    }

    public static InvocationData fromStubInvocationDto(long deviceId, int slaveId, StubInvocationDto invocationDto) {
        if (invocationDto == null) {
            return null;
        }
        InvocationData data = new InvocationData();
        data.deviceId = String.valueOf(deviceId);
        data.slaveId = slaveId;
        data.function = new FunctionData(invocationDto.stub.stubId, invocationDto.stub.group.toString());
        data.inputValues = invocationDto.inputArgsValue;
        data.outputValues = invocationDto.outputArgsValue;
        data.result = invocationDto.success;
        return data;
    }

    public static StubInvocationDto toStubInvocationDto(InvocationData invocation, Stub stub) {
        if (invocation == null || stub == null) {
            return null;
        }
        return new StubInvocationDto(stub, invocation.result, invocation.inputValues, invocation.outputValues);
    }
}
