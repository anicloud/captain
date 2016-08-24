package com.ani.captain.infrastructure.persistence.dao;

import com.ani.captain.domain.model.ProductState;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "ProductApp")
public class ProductAppDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long id;

    @Column(name = "productId", nullable = false, unique = true)
    public Long productId;

    @Column(name = "name", nullable = false)
    public String name;

    @Column(name = "description")
    public String description;

    @Column(name = "type")
    public String type;

    @Column(name = "version", nullable = false)
    public Integer version;

    @Column(name = "installed", nullable = false)
    public Long installed;

    @Column(name = "stars")
    public Integer stars;

    @Column(name = "totalComments")
    public Integer totalComments;

    @Column(name = "lastModTime")
    public Long lastModTime;

    @Column(name = "state", nullable = false)
    public ProductState state;

    @Column(name = "logo")
    public String logo;

    @Column(name = "token", nullable = false)
    public Byte[] token;

    public ProductAppDao() {
    }

    public ProductAppDao(Long productId, String name, String description, String type, Integer version, Long installed, Integer stars, Integer totalComments, Long lastModTime, ProductState state, String logo, Byte[] token) {
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
}
