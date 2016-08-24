package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductDevice;
import com.ani.captain.infrastructure.persistence.dao.ProductDeviceDao;
import com.ani.captain.infrastructure.persistence.dao.ProductDaoUtils;
import com.ani.captain.infrastructure.persistence.repository.ProductDeviceJpaRepository;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductDeviceRepositoryImpl implements ProductDeviceRepository {
    @Resource
    ProductDeviceJpaRepository productDeviceJpaRepository;

    @Override
    public ProductDevice find(Long productId) {
        if (productId == null) return null;
        return ProductDaoUtils.toProductDevice(productDeviceJpaRepository.findByProductId(productId));
    }

    @Override
    public ProductDevice save(ProductDevice product) {
        if (product == null || product.getDescription() == null) return null;
        ProductDeviceDao dao = productDeviceJpaRepository.findByProductId(product.getProductId());
        if (dao == null) return null;
        dao.productId = product.getProductId();
        dao.name = product.getName();
        dao.description = product.getDescription();
        dao.type = product.getType();
        dao.version = product.getVersion();
        dao.installed = product.getInstalled();
        dao.stars = product.getStars();
        dao.totalComments = product.getTotalComments();
        dao.lastModTime = product.getLastModTime();
        dao.state = product.getState();
        dao.logo = product.getLogo();
        dao.token = product.getToken();
        dao = productDeviceJpaRepository.save(dao);
        return ProductDaoUtils.toProductDevice(dao);
    }

    @Override
    public void delete(Long productId) {
        if (productId == null) return;
        productDeviceJpaRepository.deleteByProductId(productId);
    }
}
