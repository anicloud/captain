package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.domain.model.AccountApp;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by huangbin on 8/24/16.
 */
public interface AccountAppJpaRepository extends CrudRepository<AccountApp, Long> {
    @Query(value = "select a from AccountApp a where a.accountId = ?1")
    AccountApp findByAccountId(long accountId);

    @Query(value = "select a from AccountApp a where a.vendor = ?1")
    AccountApp findByVendor(String vendor);

}
