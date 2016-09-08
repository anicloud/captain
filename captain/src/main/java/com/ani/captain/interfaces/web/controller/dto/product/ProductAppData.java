package com.ani.captain.interfaces.web.controller.dto.product;

import com.ani.captain.domain.model.ProductState;

/**
 * Created by huangbin on 8/23/16.
 */
public class ProductAppData {
    public String productId;
    public String name;
    public String description;
    public String type;
    public int version;
    public int installed;
    public int stars;
    public int totalComments;
    public String lastModTime;
    public ProductState state;
    public String logo;
    public String home;

    public ProductAppData() {
    }

    public ProductAppData(String productId, String name, String description, String type, int version, int installed, int stars, int totalComments, String lastModTime, ProductState state, String logo, String home) {
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
        this.home = home;
    }
}
