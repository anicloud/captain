package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductDeviceReport;
import com.ani.captain.infrastructure.persistence.dao.ProductDaoUtils;
import com.ani.captain.infrastructure.persistence.repository.ProductDeviceReportsJpaRepository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductDeviceReportRepositoryImpl implements ProductDeviceReportRepository {
    @Resource
    ProductDeviceReportsJpaRepository productDeviceReportsJpaRepository;

    @Override
    public List<ProductDeviceReport> findBetweenTime(Long productId, Long beginTime, Long endTime) {
        if (beginTime == null || endTime == null) return null;
        return ProductDaoUtils.toProductDeviceReports(productDeviceReportsJpaRepository.findBetweenTime(productId, beginTime, endTime));
    }
}
