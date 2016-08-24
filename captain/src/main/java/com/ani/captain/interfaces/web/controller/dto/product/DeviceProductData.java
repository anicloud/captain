package com.ani.captain.interfaces.web.controller.dto.product;

import com.ani.captain.domain.model.ProductState;

/**
 * Created by huangbin on 8/23/16.
 */
public class DeviceProductData {
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
}
