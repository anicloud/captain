package com.ani.captain.interfaces.web.controller.dto.account;

/**
 * Created by huangbin on 8/23/16.
 */
public class AccountBasicInfoData {
    public String name;
    public String email;
    public String avatarUrl;
    public String phoneNumber;
    public Boolean appDeveloper;
    public Boolean deviceDeveloper;

    public AccountBasicInfoData() {
        appDeveloper = false;
        deviceDeveloper = false;
    }

    public AccountBasicInfoData(String name, String email, String avatarUrl, String phoneNumber) {
        this.name = name;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.phoneNumber = phoneNumber;
        appDeveloper = false;
        deviceDeveloper = false;
    }
}
