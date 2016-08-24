package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductDevice;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductDeviceRepository {
    // find
    ProductDevice find(Long accountId);

    // save
    ProductDevice save(ProductDevice accountApp);

    // delete
    void delete(Long accountId);
}
