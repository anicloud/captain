package com.ani.captain.interfaces.web.controller.dto.debug;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by huangbin on 3/22/16.
 */
public class PermissionData {
    public String groupId;
    public Set<PermissionType> types;

    public PermissionData(String groupId, Set<PermissionType> types) {
        this.groupId = groupId;
        this.types = types;
    }

    public PermissionData() {
        types = new HashSet<>();
    }
}
