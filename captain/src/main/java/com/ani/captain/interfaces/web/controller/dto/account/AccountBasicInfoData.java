package com.ani.captain.interfaces.web.controller.dto.account;

/**
 * Created by huangbin on 8/23/16.
 */
public class AccountBasicInfoData {
    public String accountId;
    public String name;
    public String email;
    public String avatarUrl;
    public String phoneNumber;

    public AccountBasicInfoData(String accountId, String name, String email, String avatarUrl, String phoneNumber) {
        this.accountId = accountId;
        this.name = name;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.phoneNumber = phoneNumber;
    }
}
