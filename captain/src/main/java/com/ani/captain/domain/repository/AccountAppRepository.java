package com.ani.captain.domain.repository;

import com.ani.captain.domain.Utils;
import com.ani.captain.domain.model.AccountApp;
import com.ani.captain.infrastructure.persistence.repository.AccountAppJpaRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/24/16.
 */
@Repository
public class AccountAppRepository {
    @Resource
    AccountAppJpaRepository accountAppJpaRepository;

    
    public AccountApp find(long accountId) {
        return accountAppJpaRepository.findByAccountId(accountId);
    }

    
    public AccountApp find(String vendor) {
        if (vendor == null) return null;
        return accountAppJpaRepository.findByVendor(vendor);
    }

    
    public AccountApp save(AccountApp account) {
        if(account == null) return null;
        AccountApp persistedAccount = accountAppJpaRepository.findByAccountId(account.getAccountId());
        if (persistedAccount == null) { // confirm existed account
            persistedAccount = accountAppJpaRepository.findByVendor(account.getVendor());
        }
        if (persistedAccount == null) { // new account
            account.setToken(Utils.generateToken());
            return accountAppJpaRepository.save(account);
        } else {
            // do NOT modify accountId and token
            persistedAccount.setVendor(account.getVendor());
            persistedAccount.setLogo(account.getLogo());
            persistedAccount.setHome(account.getHome());
            persistedAccount.setIntro(account.getIntro());
            persistedAccount.setCreditCard(account.getCreditCard());
            return accountAppJpaRepository.save(persistedAccount);
        }
    }

    
    public void delete(long accountId) {
        AccountApp account = accountAppJpaRepository.findByAccountId(accountId);
        if (account != null) {
            accountAppJpaRepository.delete(account);
        }
    }
}
