package com.ani.captain.infrastructure.persistence.repository;

import com.ani.captain.infrastructure.persistence.dao.ProductDeviceReportDao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductDeviceReportsJpaRepository extends CrudRepository<ProductDeviceReportDao, Long> {
    @Query(value = "select d from ProductDeviceReports d where d.productId =?1 and d.time between ?2 and ?3")
    List<ProductDeviceReportDao> findBetweenTime(Long productId, Long beginTime, Long endTime);
}
