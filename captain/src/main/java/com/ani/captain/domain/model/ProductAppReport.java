package com.ani.captain.domain.model;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductAppReport {
    private Long productId;
    private Long time;
    private Integer activeUsers;
    private Integer installed;
    private Integer launched;

    public ProductAppReport() {
    }

    public ProductAppReport(Long productId, Long time, Integer activeUsers, Integer installed, Integer launched) {
        this.productId = productId;
        this.time = time;
        this.activeUsers = activeUsers;
        this.installed = installed;
        this.launched = launched;
    }

    public Integer getActiveUsers() {
        return activeUsers;
    }

    public void setActiveUsers(Integer activeUsers) {
        this.activeUsers = activeUsers;
    }

    public Integer getInstalled() {
        return installed;
    }

    public void setInstalled(Integer installed) {
        this.installed = installed;
    }

    public Integer getLaunched() {
        return launched;
    }

    public void setLaunched(Integer launched) {
        this.launched = launched;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }
}
