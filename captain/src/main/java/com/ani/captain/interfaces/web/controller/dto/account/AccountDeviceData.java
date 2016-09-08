package com.ani.captain.interfaces.web.controller.dto.account;

/**
 * Created by huangbin on 8/23/16.
 */
public class AccountDeviceData {
    public String vendor;
    public String intro;
    public String logo;
    public String home;
    public String creditCard;

    public AccountDeviceData() {
    }

    public AccountDeviceData(String vendor, String intro, String logo, String home, String creditCard) {
        this.vendor = vendor;
        this.intro = intro;
        this.logo = logo;
        this.home = home;
        this.creditCard = creditCard;
    }
}
