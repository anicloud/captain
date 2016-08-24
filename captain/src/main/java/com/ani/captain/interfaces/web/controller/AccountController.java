package com.ani.captain.interfaces.web.controller;

import com.ani.captain.interfaces.web.controller.dto.account.AccountAppData;
import com.ani.captain.interfaces.web.controller.dto.account.AccountBasicInfoData;
import com.ani.captain.interfaces.web.controller.dto.account.AccountDeviceData;
import com.ani.octopus.account.interfaces.AccountServiceFacade;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/23/16.
 */
@RestController
@RequestMapping("/service/account")
@CrossOrigin(origins = "http://localhost:8080")
public class AccountController {
    final Long accountId = 764111382711898568L;

    @Resource
    AccountServiceFacade accountServiceFacade;

    @RequestMapping(value = "/info", method = RequestMethod.GET)
    public AccountBasicInfoData getAccountInfo() {
        return new AccountBasicInfoData();
    }

    @RequestMapping(value = "/app", method = RequestMethod.GET)
    public AccountAppData getAccountApp() {
        return new AccountAppData();
    }

    @RequestMapping(value = "/app", method = RequestMethod.POST)
    public AccountAppData saveAccountApp(@RequestBody AccountAppData accountApp) {
        return new AccountAppData();
    }

    @RequestMapping(value = "/app", method = RequestMethod.DELETE)
    public AccountAppData deleteAccountApp(@RequestBody AccountAppData accountApp) {
        return new AccountAppData();
    }

    @RequestMapping(value = "/device", method = RequestMethod.GET)
    public AccountDeviceData getAccountDevice() {
        return new AccountDeviceData();
    }

    @RequestMapping(value = "/device", method = RequestMethod.POST)
    public AccountDeviceData saveAccountDevice(@RequestBody AccountDeviceData accountDevice) {
        return new AccountDeviceData();
    }

    @RequestMapping(value = "/device", method = RequestMethod.DELETE)
    public AccountDeviceData deleteAccountDevice(@RequestBody AccountDeviceData accountDevice) {
        return new AccountDeviceData();
    }
}
