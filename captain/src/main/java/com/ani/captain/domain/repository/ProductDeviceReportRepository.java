package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductDeviceReport;
import com.ani.captain.infrastructure.persistence.repository.ProductDeviceReportsJpaRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
@Repository
public class ProductDeviceReportRepository {
    @Resource
    ProductDeviceReportsJpaRepository productDeviceReportsJpaRepository;

    public List<ProductDeviceReport> findBetweenTime(long productId, long beginTime, long endTime) {
        return productDeviceReportsJpaRepository.findBetweenTime(productId, beginTime, endTime);
    }

    public ProductDeviceReport save(ProductDeviceReport report) {
        return productDeviceReportsJpaRepository.save(report);
    }
}
