package com.ani.captain.domain.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "ProductAppReport")
public class ProductAppReport implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long Id;

    @Column(name = "productId")
    private long productId;

    @Column(name = "time")
    private long time;

    @Column(name = "activeUsers")
    private int activeUsers;

    @Column(name = "installed")
    private int installed;

    @Column(name = "launched")
    private int launched;

    public ProductAppReport() {
    }

    public ProductAppReport(long productId, long time, int activeUsers, int installed, int launched) {
        this.productId = productId;
        this.time = time;
        this.activeUsers = activeUsers;
        this.installed = installed;
        this.launched = launched;
    }

    public int getActiveUsers() {
        return activeUsers;
    }

    public void setActiveUsers(int activeUsers) {
        this.activeUsers = activeUsers;
    }

    public int getInstalled() {
        return installed;
    }

    public void setInstalled(int installed) {
        this.installed = installed;
    }

    public int getLaunched() {
        return launched;
    }

    public void setLaunched(int launched) {
        this.launched = launched;
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
