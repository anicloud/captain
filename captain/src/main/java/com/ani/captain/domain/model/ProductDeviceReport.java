package com.ani.captain.domain.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "ProductDeviceReport")
public class ProductDeviceReport implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long Id;

    @Column(name = "productId")
    private long productId;

    @Column(name = "time")
    private long time;

    @Column(name = "activeUsers")
    private int activated;

    @Column(name = "installed")
    private int installed;

    @Column(name = "launched")
    private int connected;
    
    public ProductDeviceReport() {
    }

    public ProductDeviceReport(long productId, long time, int activated, int installed, int connected) {
        this.productId = productId;
        this.time = time;
        this.activated = activated;
        this.installed = installed;
        this.connected = connected;
    }

    public int getConnected() {
        return connected;
    }

    public void setConnected(int connected) {
        this.connected = connected;
    }

    public int getInstalled() {
        return installed;
    }

    public void setInstalled(int installed) {
        this.installed = installed;
    }

    public int getActivated() {
        return activated;
    }

    public void setActivated(int activated) {
        this.activated = activated;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }
}
