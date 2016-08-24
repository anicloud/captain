package com.ani.captain.infrastructure.persistence.dao;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "ProductDeviceReport")
public class ProductDeviceReportDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long Id;

    @Column(name = "productId")
    public Long productId;

    @Column(name = "time")
    public Long time;

    @Column(name = "activeUsers")
    public Integer activated;

    @Column(name = "installed")
    public Integer installed;

    @Column(name = "launched")
    public Integer connected;

    public ProductDeviceReportDao() {
    }

    public ProductDeviceReportDao(Long productId, Long time, Integer activated, Integer installed, Integer connected) {
        this.productId = productId;
        this.time = time;
        this.activated = activated;
        this.installed = installed;
        this.connected = connected;
    }
}
