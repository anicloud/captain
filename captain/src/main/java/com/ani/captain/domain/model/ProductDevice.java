package com.ani.captain.domain.model;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductDevice {
    private Long productId;
    private String name;
    private String description;
    private String type;
    private Integer version;
    private Long installed;
    private Integer stars;
    private Integer totalComments;
    private Long lastModTime;
    private ProductState state;
    private String logo;
    private Byte[] token;

    public ProductDevice() {
    }

    public ProductDevice(Long productId, String name, String description, String type, Integer version, Long installed, Integer stars, Integer totalComments, Long lastModTime, ProductState state, String logo, Byte[] token) {
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
        this.token = token;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Long getInstalled() {
        return installed;
    }

    public void setInstalled(Long installed) {
        this.installed = installed;
    }

    public Integer getStars() {
        return stars;
    }

    public void setStars(Integer stars) {
        this.stars = stars;
    }

    public Integer getTotalComments() {
        return totalComments;
    }

    public void setTotalComments(Integer totalComments) {
        this.totalComments = totalComments;
    }

    public Long getLastModTime() {
        return lastModTime;
    }

    public void setLastModTime(Long lastModTime) {
        this.lastModTime = lastModTime;
    }

    public ProductState getState() {
        return state;
    }

    public void setState(ProductState state) {
        this.state = state;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public Byte[] getToken() {
        return token;
    }

    public void setToken(Byte[] token) {
        this.token = token;
    }
}
