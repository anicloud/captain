package com.ani.captain.domain.model;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductDeviceReport {
    private Long productId;
    private Long time;
    private Integer activated;
    private Integer installed;
    private Integer connected;

    public ProductDeviceReport() {
    }

    public ProductDeviceReport(Long productId, Long time, Integer activated, Integer installed, Integer connected) {
        this.productId = productId;
        this.time = time;
        this.activated = activated;
        this.installed = installed;
        this.connected = connected;
    }

    public Integer getConnected() {
        return connected;
    }

    public void setConnected(Integer connected) {
        this.connected = connected;
    }

    public Integer getInstalled() {
        return installed;
    }

    public void setInstalled(Integer installed) {
        this.installed = installed;
    }

    public Integer getActivated() {
        return activated;
    }

    public void setActivated(Integer activated) {
        this.activated = activated;
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
