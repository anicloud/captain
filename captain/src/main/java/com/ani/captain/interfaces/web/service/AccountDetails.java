package com.ani.captain.interfaces.web.service;

import com.ani.earth.commons.dto.AccountDto;
import com.ani.earth.commons.dto.AccountGroupDto;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by huangbin on 7/19/16.
 */
public class AccountDetails implements UserDetails {
    public AccountDto accountDto;
    public Set<GrantedAuthority> authoritySet;

    public AccountDetails(AccountDto accountDto) {
        this.accountDto = accountDto;
        if (accountDto != null && accountDto.groupSet != null) {
            this.authoritySet = new HashSet<>();
            for (AccountGroupDto groupDto : accountDto.groupSet) {
                GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(groupDto.groupName);
                authoritySet.add(grantedAuthority);
            }
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authoritySet;
    }

    @Override
    public String getPassword() {
        return this.accountDto.password;
    }

    @Override
    public String getUsername() {
        return this.accountDto.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.accountDto.accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.accountDto.accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.accountDto.credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.accountDto.enabled;
    }
}
