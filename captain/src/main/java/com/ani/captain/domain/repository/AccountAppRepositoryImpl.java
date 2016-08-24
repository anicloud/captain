package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.AccountApp;
import com.ani.captain.infrastructure.persistence.dao.AccountAppDao;
import com.ani.captain.infrastructure.persistence.dao.AccountDaoUtils;
import com.ani.captain.infrastructure.persistence.repository.AccountAppJpaRepository;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/24/16.
 */
public class AccountAppRepositoryImpl implements AccountAppRepository {
    @Resource
    AccountAppJpaRepository accountAppJpaRepository;

    @Override
    public AccountApp find(Long accountId) {
        if (accountId == null) return null;
        return AccountDaoUtils.toAccountApp(accountAppJpaRepository.findByAccountId(accountId));
    }

    @Override
    public AccountApp find(String vendor) {
        if (vendor == null) return null;
        return AccountDaoUtils.toAccountApp(accountAppJpaRepository.findByVendor(vendor));
    }

    @Override
    public AccountApp save(AccountApp account) {
        if(account == null) return null;
        AccountAppDao dao = accountAppJpaRepository.findByAccountId(account.getAccountId());
        if (dao == null) return null;
        dao.accountId = account.getAccountId();
        dao.vendor = account.getVendor();
        dao.logo = account.getLogo();
        dao.home = account.getHome();
        dao.creditCard = account.getCreditCard();
        dao.token = account.getToken();
        dao = accountAppJpaRepository.save(dao);
        return AccountDaoUtils.toAccountApp(dao);
    }

    @Override
    public void delete(Long accountId) {
        if (accountId == null) return;
        accountAppJpaRepository.deleteByAccountId(accountId);
    }

    @Override
    public void delete(AccountApp accountApp) {
        if (accountApp == null) return;
        accountAppJpaRepository.deleteByAccountId(accountApp.getAccountId());
    }
}
