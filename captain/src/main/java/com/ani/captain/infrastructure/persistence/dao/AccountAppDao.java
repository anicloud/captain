package com.ani.captain.infrastructure.persistence.dao;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by huangbin on 8/24/16.
 */
@Entity
@Table(name = "AccountApp")
public class AccountAppDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long id;

    @Column(name= "accountId", nullable = false, unique = true)
    public Long accountId;

    @Column(name = "vendor", nullable = false, unique = true)
    public String vendor;

    @Column(name = "logo")
    public String logo;

    @Column(name = "home")
    public String home;

    @Column(name = "creditCard")
    public String creditCard;

    @Column(name = "token", nullable = false)
    public Byte[] token;

    public AccountAppDao() {
    }

    public AccountAppDao(Long accountId, String vendor, String logo, String home, String creditCard, Byte[] token) {
        this.accountId = accountId;
        this.vendor = vendor;
        this.logo = logo;
        this.home = home;
        this.creditCard = creditCard;
        this.token = token;
    }
}
