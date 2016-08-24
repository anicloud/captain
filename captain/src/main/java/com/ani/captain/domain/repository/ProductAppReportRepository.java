package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductAppReport;

import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductAppReportRepository {
    List<ProductAppReport> findBetweenTime(Long productId, Long beginTime, Long endTime);
}
