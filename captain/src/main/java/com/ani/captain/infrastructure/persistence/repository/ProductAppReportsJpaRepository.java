package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.domain.model.ProductAppReport;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductAppReportsJpaRepository extends CrudRepository<ProductAppReport, Long> {
    @Query(value = "select p from ProductAppReport p where p.productId =?1 and (p.time between ?2 and ?3)")
    List<ProductAppReport> findBetweenTime(long productId, long beginTime, long endTime);
}
