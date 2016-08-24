package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.infrastructure.persistence.dao.AccountDeviceDao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by huangbin on 8/24/16.
 */
public interface AccountDeviceJpaRepository extends CrudRepository<AccountDeviceDao, Long> {
    @Query(value = "select d from AccountDevice d where d.accountId = ?1")
    AccountDeviceDao findByAccountId(Long accountId);

    @Query(value = "select d from AccountDevice d where d.vendor = ?1")
    AccountDeviceDao findByVendor(String vendor);

    @Query(value = "delete from AccountDevice d where d.accountId = ?1")
    void deleteByAccountId(Long accountId);
    
    @Query(value = "delete from AccountDevice d where d.vendor = ?1")
    void deleteByAccountId(String vendor);
}
