package com.ani.captain.domain.model;

/**
 * Created by huangbin on 8/24/16.
 */
public class AccountDevice {
    private Long accountId;
    private String vendor;
    private String logo;
    private String home;
    private String creditCard;
    private Byte[] token;

    public AccountDevice() {
    }

    public AccountDevice(Long accountId, String vendor, String logo, String home, String creditCard, Byte[] token) {
        this.accountId = accountId;
        this.vendor = vendor;
        this.logo = logo;
        this.home = home;
        this.creditCard = creditCard;
        this.token = token;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
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

    public Byte[] getToken() {
        return token;
    }

    public void setToken(Byte[] token) {
        this.token = token;
    }
}
