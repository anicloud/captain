package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductAppReport;
import com.ani.captain.infrastructure.persistence.dao.ProductDaoUtils;
import com.ani.captain.infrastructure.persistence.repository.ProductAppReportsJpaRepository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductAppReportRepositoryImpl implements ProductAppReportRepository {
    @Resource
    ProductAppReportsJpaRepository productAppReportsJpaRepository;

    @Override
    public List<ProductAppReport> findBetweenTime(Long productId, Long beginTime, Long endTime) {
        if (beginTime == null || endTime == null) return null;
        return ProductDaoUtils.toProductAppReports(productAppReportsJpaRepository.findBetweenTime(productId, beginTime, endTime));
    }
}
