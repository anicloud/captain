package com.ani.captain.domain.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "AccountDevice")
public class AccountDevice implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name= "accountId", nullable = false, unique = true)
    private long accountId;

    @Column(name = "vendor", nullable = false, unique = true)
    private String vendor;

    @Column(name = "intro")
    private String intro;

    @Column(name = "logo")
    private String logo;

    @Column(name = "home")
    private String home;

    @Column(name = "creditCard")
    private String creditCard;

    @Column(name = "token")
    private byte[] token;

    public AccountDevice() {
    }

    public AccountDevice(long accountId, String vendor, String intro, String logo, String home, String creditCard, byte[] token) {
        this.accountId = accountId;
        this.vendor = vendor;
        this.intro = intro;
        this.logo = logo;
        this.home = home;
        this.creditCard = creditCard;
        this.token = token;
    }

    public AccountDevice(String vendor, String intro, String logo, String home, String creditCard, byte[] token) {
        this.vendor = vendor;
        this.intro = intro;
        this.logo = logo;
        this.home = home;
        this.creditCard = creditCard;
        this.token = token;
    }

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getHome() {
        return home;
    }

    public void setHome(String home) {
        this.home = home;
    }

    public String getCreditCard() {
        return creditCard;
    }

    public void setCreditCard(String creditCard) {
        this.creditCard = creditCard;
    }

    public byte[] getToken() {
        return token;
    }

    public void setToken(byte[] token) {
        this.token = token;
    }
}