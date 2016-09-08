package com.ani.captain.interfaces.web.controller;

import com.ani.captain.interfaces.web.controller.dto.function.FunctionGroupData;
import com.ani.captain.interfaces.web.controller.dto.function.FunctionMetaData;
import com.ani.octopus.stub.core.service.AniStubMetaService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/23/16.
 */

@RestController
@RequestMapping("/service/api")
//@CrossOrigin(origins = "http://localhost:8080")
public class ApiController {
    final long accountId = 764111382711898568L;

    @Resource
    AniStubMetaService aniStubMetaService;

    @RequestMapping(value = "/group/list", method = RequestMethod.GET)
    List<FunctionGroupData> getGroups() {
        return new ArrayList<>();
    }

    @RequestMapping(value = "/group", method = RequestMethod.POST)
    FunctionGroupData saveGroup(@RequestBody FunctionGroupData groupData) {
        return groupData;
    }

    @RequestMapping(value = "/function/{fid}", method = RequestMethod.GET)
    FunctionMetaData getDetails(@PathVariable int fid) {
        return new FunctionMetaData();
    }

    @RequestMapping(value = "/function", method = RequestMethod.POST)
    FunctionMetaData saveDetails(@RequestBody FunctionMetaData metaData) {
        return metaData;
    }
}
