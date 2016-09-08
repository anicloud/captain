package com.ani.captain.domain.repository;

import com.ani.captain.domain.Utils;
import com.ani.captain.domain.model.ProductApp;
import com.ani.captain.domain.model.ProductState;
import com.ani.captain.infrastructure.persistence.repository.ProductAppJpaRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
@Repository
public class ProductAppRepository {
    @Resource
    ProductAppJpaRepository productAppJpaRepository;
    
    
    public ProductApp find(long productId) {
        return productAppJpaRepository.findByProductId(productId);
    }

    
    public List<ProductApp> findByAccountId(long accountId) {
        return productAppJpaRepository.findByAccountId(accountId);
    }

    
    public ProductApp save(ProductApp product) {
       if(product == null) return null;
        ProductApp persistedProduct = productAppJpaRepository.findByProductId(product.getProductId());
        if (persistedProduct == null) { // confirm existed product
            persistedProduct = productAppJpaRepository.findByProductName(product.getName());
        }
        if (persistedProduct == null) { // new product
            product.setProductId(Utils.generateId());
            product.setToken(Utils.generateToken());
            product.setVersion(1);
            product.setState(ProductState.DRAFT);
            product.setLastModTime(System.currentTimeMillis());
            return productAppJpaRepository.save(product);
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
            return productAppJpaRepository.save(persistedProduct);
        }
    }

    
    public void delete(long productId) {
        ProductApp product = productAppJpaRepository.findByProductId(productId);
        if (product != null) {
            productAppJpaRepository.delete(product);
        }
    }

    
    public void deleteByAccountId(long accountId) {
        List<ProductApp> products = productAppJpaRepository.findByAccountId(accountId);
        if (products != null) {
            for (ProductApp product : products) {
                if (product != null) {
                    productAppJpaRepository.delete(product);
                }
            }
        }
    }
}
