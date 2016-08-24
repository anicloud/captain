package com.ani.captain.infrastructure.persistence.dao;

import com.ani.captain.domain.model.AccountApp;
import com.ani.captain.domain.model.AccountDevice;

/**
 * Created by huangbin on 8/24/16.
 */
public class AccountDaoUtils {
    public static AccountAppDao fromAccountApp(AccountApp accountApp) {
        if (accountApp == null) return null;
        return new AccountAppDao(
                accountApp.getAccountId(),
                accountApp.getVendor(),
                accountApp.getLogo(),
                accountApp.getHome(),
                accountApp.getCreditCard(),
                accountApp.getToken());
    }

    public static AccountApp toAccountApp(AccountAppDao accountAppDao) {
        if (accountAppDao == null) return null;
        return new AccountApp(
                accountAppDao.accountId,
                accountAppDao.vendor,
                accountAppDao.logo,
                accountAppDao.home,
                accountAppDao.creditCard,
                accountAppDao.token);
    }

    public static AccountDeviceDao fromAccountDevice(AccountDevice accountDevice) {
        if (accountDevice == null) return null;
        return new AccountDeviceDao(
                accountDevice.getAccountId(),
                accountDevice.getVendor(),
                accountDevice.getLogo(),
                accountDevice.getHome(),
                accountDevice.getCreditCard(),
                accountDevice.getToken());
    }

    public static AccountDevice toAccountDevice(AccountDeviceDao accountDeviceDao) {
        if (accountDeviceDao == null) return null;
        return new AccountDevice(
                accountDeviceDao.accountId,
                accountDeviceDao.vendor,
                accountDeviceDao.logo,
                accountDeviceDao.home,
                accountDeviceDao.creditCard,
                accountDeviceDao.token);
    }

}
