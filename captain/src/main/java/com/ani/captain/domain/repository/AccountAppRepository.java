package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.AccountApp;

/**
 * Created by huangbin on 8/24/16.
 */
public interface AccountAppRepository {
    // find
    AccountApp find(Long accountId);
    AccountApp find(String vendor);

    // save
    AccountApp save(AccountApp accountApp);

    // delete
    void delete(Long accountId);
    void delete(AccountApp accountApp);
}
