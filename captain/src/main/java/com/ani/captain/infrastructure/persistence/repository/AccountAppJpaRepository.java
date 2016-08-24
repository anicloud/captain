package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.infrastructure.persistence.dao.AccountAppDao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by huangbin on 8/24/16.
 */
public interface AccountAppJpaRepository extends CrudRepository<AccountAppDao, Long> {
    @Query(value = "select d from AccountApp d where d.accountId = ?1")
    AccountAppDao findByAccountId(Long accountId);

    @Query(value = "select d from AccountApp d where d.vendor = ?1")
    AccountAppDao findByVendor(String vendor);

    @Query(value = "delete from AccountApp d where d.accountId = ?1")
    void deleteByAccountId(Long accountId);

    @Query(value = "delete from AccountApp d where d.vendor = ?1")
    void deleteByAccountId(String vendor);

}
