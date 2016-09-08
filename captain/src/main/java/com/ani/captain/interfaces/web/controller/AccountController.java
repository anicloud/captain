package com.ani.captain.interfaces.web.controller;

import com.ani.captain.domain.model.AccountApp;
import com.ani.captain.domain.model.AccountDevice;
import com.ani.captain.domain.repository.AccountAppRepository;
import com.ani.captain.domain.repository.AccountDeviceRepository;
import com.ani.captain.interfaces.web.controller.dto.account.AccountAppData;
import com.ani.captain.interfaces.web.controller.dto.account.AccountBasicInfoData;
import com.ani.captain.interfaces.web.controller.dto.account.AccountDataUtils;
import com.ani.captain.interfaces.web.controller.dto.account.AccountDeviceData;
import com.ani.captain.interfaces.web.service.AccountDetails;
import com.ani.earth.commons.dto.AccountDto;
import com.ani.earth.interfaces.AccountServiceFacade;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/23/16.
 */
@RestController
@RequestMapping("/service/account")
//@CrossOrigin(origins = "http://localhost:8080")
public class AccountController {
//    final long accountId = 764111382711898568L;
    @Resource
    AccountServiceFacade accountServiceFacade;
    @Resource
    AccountAppRepository accountAppRepository;
    @Resource
    AccountDeviceRepository accountDeviceRepository;

    @RequestMapping(value = "/info", method = RequestMethod.GET)
    public AccountBasicInfoData getAccountInfo() {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        AccountDto accountDto = accountServiceFacade.getByAccountId(accountId);
        AccountBasicInfoData infoData = new AccountBasicInfoData(
                accountDto.screenName,
                accountDto.email,
                accountDto.accountInfo.photoPath,
                accountDto.accountPhoneDto.phoneNumber);
        if (accountAppRepository.find(accountId) != null) {
            infoData.appDeveloper = true;
        }
        if (accountDeviceRepository.find(accountId) != null) {
            infoData.deviceDeveloper = true;
        }
        return infoData;
    }

    @RequestMapping(value = "/app", method = RequestMethod.GET)
    public AccountAppData getAccountApp() {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        AccountApp accountApp = accountAppRepository.find(accountId);
        return AccountDataUtils.fromAccountApp(accountApp);
    }

    @RequestMapping(value = "/app", method = RequestMethod.POST)
    public AccountAppData saveAccountApp(@RequestBody AccountAppData accountAppData) {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        AccountApp accountApp = AccountDataUtils.toAccountApp(accountId, accountAppData);
        return AccountDataUtils.fromAccountApp(accountAppRepository.save(accountApp));
    }

    @RequestMapping(value = "/app", method = RequestMethod.DELETE)
    public void deleteAccountApp() {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        accountAppRepository.delete(accountId);
    }

    @RequestMapping(value = "/device", method = RequestMethod.GET)
    public AccountDeviceData getAccountDevice() {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        AccountDevice accountDevice = accountDeviceRepository.find(accountId);
        return AccountDataUtils.fromAccountDevice(accountDevice);
    }

    @RequestMapping(value = "/device", method = RequestMethod.POST)
    public AccountDeviceData saveAccountDevice(@RequestBody AccountDeviceData accountDeviceData) {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        AccountDevice accountDevice = AccountDataUtils.toAccountDevice(accountId, accountDeviceData);
        return AccountDataUtils.fromAccountDevice(accountDeviceRepository.save(accountDevice));
    }

    @RequestMapping(value = "/device", method = RequestMethod.DELETE)
    public void deleteAccountDevice() {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        accountDeviceRepository.delete(accountId);
    }

}
