package com.ani.captain.domain.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "ProductDevice")
public class ProductDevice implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "accountId", nullable = false)
    private long accountId;

    @Column(name = "productId", nullable = false, unique = true)
    private long productId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private String type;

    @Column(name = "version", nullable = false)
    private int version;

    @Column(name = "installed")
    private int installed;

    @Column(name = "stars")
    private int stars;

    @Column(name = "totalComments")
    private int totalComments;

    @Column(name = "lastModTime")
    private long lastModTime;

    @Column(name = "state", nullable = false)
    private ProductState state;

    @Column(name = "logo")
    private String logo;

    @Column(name = "home")
    private String home;

    @Column(name = "token")
    private byte[] token;

    public ProductDevice() {
    }

    public ProductDevice(long accountId, long productId, String name, String description, String type, int version, int installed, int stars, int totalComments, long lastModTime, ProductState state, String logo, String home, byte[] token) {
        this.accountId = accountId;
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
        this.token = token;
    }

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
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

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public int getInstalled() {
        return installed;
    }

    public void setInstalled(int installed) {
        this.installed = installed;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public int getTotalComments() {
        return totalComments;
    }

    public void setTotalComments(int totalComments) {
        this.totalComments = totalComments;
    }

    public long getLastModTime() {
        return lastModTime;
    }

    public void setLastModTime(long lastModTime) {
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

    public byte[] getToken() {
        return token;
    }

    public void setToken(byte[] token) {
        this.token = token;
    }

    public String getHome() {
        return home;
    }

    public void setHome(String home) {
        this.home = home;
    }
}
