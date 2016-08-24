package com.ani.captain.infrastructure.persistence.dao;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "ProductAppReport")
public class ProductAppReportDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long Id;

    @Column(name = "productId")
    public Long productId;

    @Column(name = "time")
    public Long time;

    @Column(name = "activeUsers")
    public Integer activeUsers;

    @Column(name = "installed")
    public Integer installed;

    @Column(name = "launched")
    public Integer launched;

    public ProductAppReportDao() {
    }

    public ProductAppReportDao(Long productId, Long time, Integer activeUsers, Integer installed, Integer launched) {
        this.productId = productId;
        this.time = time;
        this.activeUsers = activeUsers;
        this.installed = installed;
        this.launched = launched;
    }
}
