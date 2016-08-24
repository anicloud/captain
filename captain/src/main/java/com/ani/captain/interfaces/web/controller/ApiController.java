package com.ani.captain.interfaces.web.controller;

import com.ani.captain.interfaces.web.controller.dto.function.FunctionGroupData;
import com.ani.captain.interfaces.web.controller.dto.function.FunctionMetaData;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/23/16.
 */

@RestController
@RequestMapping("/service/api")
@CrossOrigin(origins = "http://localhost:8080")
public class ApiController {
    @RequestMapping(value = "/groups", method = RequestMethod.GET)
    List<FunctionGroupData> getGroups() {
        return new ArrayList<>();
    }

    @RequestMapping(value = "/groups", method = RequestMethod.POST)
    FunctionGroupData saveGroup(@RequestBody FunctionGroupData groupData) {
        return groupData;
    }

    @RequestMapping(value = "/details/{fid}", method = RequestMethod.GET)
    FunctionMetaData getDetails(@PathVariable Integer fid) {
        return new FunctionMetaData();
    }

    @RequestMapping(value = "/details", method = RequestMethod.POST)
    FunctionMetaData saveDetails(@RequestBody FunctionMetaData metaData) {
        return metaData;
    }
}
