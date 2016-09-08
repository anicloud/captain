package com.ani.captain.domain.repository;

import com.ani.captain.domain.Utils;
import com.ani.captain.domain.model.ProductDevice;
import com.ani.captain.domain.model.ProductState;
import com.ani.captain.infrastructure.persistence.repository.ProductDeviceJpaRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
@Repository
public class ProductDeviceRepository {
    @Resource
    ProductDeviceJpaRepository productDeviceJpaRepository;


    public ProductDevice find(long productId) {
        return productDeviceJpaRepository.findByProductId(productId);
    }


    public List<ProductDevice> findByAccountId(long accountId) {
        return productDeviceJpaRepository.findByAccountId(accountId);
    }


    public ProductDevice save(ProductDevice product) {
        if(product == null) return null;
        ProductDevice persistedProduct = productDeviceJpaRepository.findByProductId(product.getProductId());
        if (persistedProduct == null) { // confirm existed product
            persistedProduct = productDeviceJpaRepository.findByProductName(product.getName());
        }
        if (persistedProduct == null) { // new product
            product.setProductId(Utils.generateId());
            product.setToken(Utils.generateToken());
            product.setVersion(1);
            product.setState(ProductState.DRAFT);
            product.setLastModTime(System.currentTimeMillis());
            return productDeviceJpaRepository.save(product);
        } else {
            // do NOT modify productId and token
            persistedProduct.setName(product.getName());
            persistedProduct.setDescription(product.getDescription());
            persistedProduct.setType(product.getType());
            persistedProduct.setVersion(product.getVersion());
            persistedProduct.setInstalled(product.getInstalled());
            persistedProduct.setStars(product.getStars());
            persistedProduct.setTotalComments(product.getTotalComments());
            persistedProduct.setLastModTime(System.currentTimeMillis());
            persistedProduct.setState(product.getState());
            persistedProduct.setLogo(product.getLogo());
            persistedProduct.setHome(product.getHome());
            return productDeviceJpaRepository.save(persistedProduct);
        }
    }


    public void delete(long productId) {
        ProductDevice product = productDeviceJpaRepository.findByProductId(productId);
        if (product != null) {
            productDeviceJpaRepository.delete(product);
        }
    }


    public void deleteByAccountId(long accountId) {
        List<ProductDevice> products = productDeviceJpaRepository.findByAccountId(accountId);
        if (products != null) {
            for (ProductDevice product : products) {
                if (product != null) {
                    productDeviceJpaRepository.delete(product);
                }
            }
        }
    }
}
