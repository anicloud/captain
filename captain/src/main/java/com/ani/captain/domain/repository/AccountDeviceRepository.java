package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.AccountDevice;

/**
 * Created by huangbin on 8/24/16.
 */
public interface AccountDeviceRepository {
    // find
    AccountDevice find(Long accountId);
    AccountDevice find(String vendor);

    // save
    AccountDevice save(AccountDevice accountDevice);

    // delete
    void delete(Long accountId);
    void delete(AccountDevice accountDevice);
}
