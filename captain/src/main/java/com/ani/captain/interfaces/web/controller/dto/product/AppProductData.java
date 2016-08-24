package com.ani.captain.interfaces.web.controller.dto.product;

import com.ani.captain.domain.model.ProductState;

/**
 * Created by huangbin on 8/23/16.
 */
public class AppProductData {
    public String productId;
    public String name;
    public String description;
    public String type;
    public Integer version;
    public Long installed;
    public Integer stars;
    public Integer totalComments;
    public Long lastModTime;
    public ProductState state;
    public String logo;

    public AppProductData(String productId, String name, String description, String type, Integer version, Long installed, Integer stars, Integer totalComments, Long lastModTime, ProductState state, String logo) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.type = type;
        this.version = version;
        this.installed = installed;
        this.stars = stars;
        this.totalComments = totalComments;
        this.lastModTime = lastModTime;
        this.state = state;
        this.logo = logo;
    }
}
