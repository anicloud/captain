package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.domain.model.ProductDevice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductDeviceJpaRepository extends PagingAndSortingRepository<ProductDevice, Long> {
    @Query(value = "select p from ProductDevice p where p.accountId = ?1")
    List<ProductDevice> findByAccountId(long accountId);

    @Query(value = "select p from ProductDevice p where p.productId = ?1")
    ProductDevice findByProductId(long productId);

    @Query(value = "select p from ProductDevice p where p.name = ?1")
    ProductDevice findByProductName(String name);
}
