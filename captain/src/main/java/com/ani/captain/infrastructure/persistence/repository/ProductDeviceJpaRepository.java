package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.infrastructure.persistence.dao.ProductDeviceDao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductDeviceJpaRepository extends PagingAndSortingRepository<ProductDeviceDao, Long> {
    @Query(value = "select d from ProductDevice d where d.productId = ?1")
    ProductDeviceDao findByProductId(Long productId);
    
    @Query(value = "delete from ProductDevice d where d.productId = ?1")
    void deleteByProductId(Long productId);
}
