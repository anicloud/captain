package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.domain.model.AccountDevice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by huangbin on 8/24/16.
 */
public interface AccountDeviceJpaRepository extends CrudRepository<AccountDevice, Long> {
    @Query(value = "select a from AccountDevice a where a.accountId = ?1")
    AccountDevice findByAccountId(long accountId);

    @Query(value = "select a from AccountDevice a where a.vendor = ?1")
    AccountDevice findByVendor(String vendor);
}
