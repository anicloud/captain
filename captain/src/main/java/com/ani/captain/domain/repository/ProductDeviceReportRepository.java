package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductDeviceReport;

import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductDeviceReportRepository {
    List<ProductDeviceReport> findBetweenTime(Long productId, Long beginTime, Long endTime);
}
