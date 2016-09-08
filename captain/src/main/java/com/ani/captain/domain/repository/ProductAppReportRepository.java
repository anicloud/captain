package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductAppReport;
import com.ani.captain.infrastructure.persistence.repository.ProductAppReportsJpaRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
@Repository
public class ProductAppReportRepository {
    @Resource
    ProductAppReportsJpaRepository productAppReportsJpaRepository;

    public List<ProductAppReport> findBetweenTime(long productId, long beginTime, long endTime) {
        return productAppReportsJpaRepository.findBetweenTime(productId, beginTime, endTime);
    }

    public ProductAppReport save(ProductAppReport report) {
        return productAppReportsJpaRepository.save(report);
    }
}
