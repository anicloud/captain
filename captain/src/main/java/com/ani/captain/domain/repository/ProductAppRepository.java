package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductApp;

/**
 * Created by huangbin on 8/24/16.
 */
public interface ProductAppRepository {
    // find
    ProductApp find(Long productId);
    
    // save
    ProductApp save(ProductApp product);
    
    // delete
    void delete(Long productId);
}
