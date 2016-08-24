package com.ani.captain.domain.repository;

import com.ani.captain.domain.model.ProductApp;
import com.ani.captain.infrastructure.persistence.dao.ProductAppDao;
import com.ani.captain.infrastructure.persistence.dao.ProductDaoUtils;
import com.ani.captain.infrastructure.persistence.repository.ProductAppJpaRepository;

import javax.annotation.Resource;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductAppRepositoryImpl implements ProductAppRepository {
    @Resource
    ProductAppJpaRepository productAppJpaRepository;

    @Override
    public ProductApp find(Long productId) {
        if (productId == null) return null;
        return ProductDaoUtils.toProductApp(productAppJpaRepository.findByProductId(productId));
    }

    @Override
    public ProductApp save(ProductApp product) {
        if (product == null || product.getDescription() == null) return null;
        ProductAppDao dao = productAppJpaRepository.findByProductId(product.getProductId());
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
        dao = productAppJpaRepository.save(dao);
        return ProductDaoUtils.toProductApp(dao);
    }

    @Override
    public void delete(Long productId) {
        if (productId == null) return;
        productAppJpaRepository.deleteByProductId(productId);
    }
}
