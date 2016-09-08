package com.ani.captain.interfaces.web.controller.dto.account;

import com.ani.captain.domain.model.AccountApp;
import com.ani.captain.domain.model.AccountDevice;

/**
 * Created by huangbin on 8/25/16.
 */
public class AccountDataUtils {
    public static AccountAppData fromAccountApp(AccountApp accountApp) {
        if (accountApp == null) return null;
        return new AccountAppData(
                accountApp.getVendor(),
                accountApp.getIntro(),
                accountApp.getLogo(),
                accountApp.getHome(),
                accountApp.getCreditCard());
    }

    public static AccountApp toAccountApp(long accountId, AccountAppData accountAppData) {
        if (accountAppData == null) return null;
        return new AccountApp(
                accountId,
                accountAppData.vendor,
                accountAppData.intro,
                accountAppData.logo,
                accountAppData.home,
                accountAppData.creditCard,
                null
        );
    }
    public static AccountDeviceData fromAccountDevice(AccountDevice accountDevice) {
        if (accountDevice == null) return null;
        return new AccountDeviceData(
                accountDevice.getVendor(),
                accountDevice.getIntro(),
                accountDevice.getLogo(),
                accountDevice.getHome(),
                accountDevice.getCreditCard());
    }

    public static AccountDevice toAccountDevice(long accountId, AccountDeviceData accountDeviceData) {
        if (accountDeviceData == null) return null;
        return new AccountDevice(
                accountId,
                accountDeviceData.vendor,
                accountDeviceData.intro,
                accountDeviceData.logo,
                accountDeviceData.home,
                accountDeviceData.creditCard,
                null
        );
    }
}
