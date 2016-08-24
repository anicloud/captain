package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.infrastructure.persistence.dao.ProductAppDao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductAppJpaRepository extends PagingAndSortingRepository<ProductAppDao, Long> {
    @Query(value = "select d from ProductApp d where d.productId = ?1")
    ProductAppDao findByProductId(Long productId);

    @Query(value = "delete from ProductApp d where d.productId = ?1")
    void deleteByProductId(Long productId);

}
