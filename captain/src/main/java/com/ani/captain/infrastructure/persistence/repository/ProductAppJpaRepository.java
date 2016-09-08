package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.domain.model.ProductApp;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductAppJpaRepository extends PagingAndSortingRepository<ProductApp, Long> {
    @Query(value = "select p from ProductApp p where p.accountId = ?1")
    List<ProductApp> findByAccountId(long accountId);

    @Query(value = "select p from ProductApp p where p.productId = ?1")
    ProductApp findByProductId(long productId);

    @Query(value = "select p from ProductApp p where p.name = ?1")
    ProductApp findByProductName(String name);
}
