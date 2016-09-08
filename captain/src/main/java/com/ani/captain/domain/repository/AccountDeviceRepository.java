package com.ani.captain.domain.repository;

import com.ani.captain.domain.Utils;
import com.ani.captain.domain.model.AccountDevice;
import com.ani.captain.infrastructure.persistence.repository.AccountDeviceJpaRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/24/16.
 */
@Repository
public class AccountDeviceRepository {
    @Resource
    AccountDeviceJpaRepository accountDeviceJpaRepository;


    public AccountDevice find(long accountId) {
        return accountDeviceJpaRepository.findByAccountId(accountId);
    }


    public AccountDevice find(String vendor) {
        if (vendor == null) return null;
        return accountDeviceJpaRepository.findByVendor(vendor);
    }


    public AccountDevice save(AccountDevice account) {
        if(account == null) return null;
        AccountDevice persistedAccount = accountDeviceJpaRepository.findByAccountId(account.getAccountId());
        if (persistedAccount == null) { // confirm existed account
            persistedAccount = accountDeviceJpaRepository.findByVendor(account.getVendor());
        }
        if (persistedAccount == null) { // new account
            account.setToken(Utils.generateToken());
            return accountDeviceJpaRepository.save(account);
        } else {
            // do NOT modify accountId and token 
            persistedAccount.setVendor(account.getVendor());
            persistedAccount.setLogo(account.getLogo());
            persistedAccount.setHome(account.getHome());
            persistedAccount.setIntro(account.getIntro());
            persistedAccount.setCreditCard(account.getCreditCard());
            return accountDeviceJpaRepository.save(persistedAccount);
        }
    }


    public void delete(long accountId) {
        AccountDevice account = accountDeviceJpaRepository.findByAccountId(accountId);
        if (account != null) {
            accountDeviceJpaRepository.delete(account);
        }
    }
}
