package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.AccountDevice;
import com.ani.captain.infrastructure.persistence.dao.AccountDeviceDao;
import com.ani.captain.infrastructure.persistence.dao.AccountDaoUtils;
import com.ani.captain.infrastructure.persistence.repository.AccountDeviceJpaRepository;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/24/16.
 */
public class AccountDeviceRepositoryImpl implements AccountDeviceRepository {
    @Resource
    AccountDeviceJpaRepository accountDeviceJpaRepository;

    @Override
    public AccountDevice find(Long accountId) {
        if (accountId == null) return null;
        return AccountDaoUtils.toAccountDevice(accountDeviceJpaRepository.findByAccountId(accountId));
    }

    @Override
    public AccountDevice find(String vendor) {
        if (vendor == null) return null;
        return AccountDaoUtils.toAccountDevice(accountDeviceJpaRepository.findByVendor(vendor));
    }

    @Override
    public AccountDevice save(AccountDevice account) {
        if(account == null) return null;
        AccountDeviceDao dao = accountDeviceJpaRepository.findByAccountId(account.getAccountId());
        if (dao == null) return null;
        dao.accountId = account.getAccountId();
        dao.vendor = account.getVendor();
        dao.logo = account.getLogo();
        dao.home = account.getHome();
        dao.creditCard = account.getCreditCard();
        dao.token = account.getToken();
        dao = accountDeviceJpaRepository.save(dao);
        return AccountDaoUtils.toAccountDevice(dao);
    }

    @Override
    public void delete(Long accountId) {
        if (accountId == null) return;
        accountDeviceJpaRepository.deleteByAccountId(accountId);
    }

    @Override
    public void delete(AccountDevice account) {
        if (account == null) return;
        accountDeviceJpaRepository.deleteByAccountId(account.getAccountId());
    }
}
