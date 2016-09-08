package com.ani.captain.interfaces.web.service;

import com.ani.earth.commons.dto.AccountDto;
import com.ani.earth.interfaces.AccountServiceFacade;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by huangbin on 7/19/16.
 */
@Component
public class AccountDetailsService implements UserDetailsService {
    @Resource
    private AccountServiceFacade accountServiceFacade;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AccountDto accountDto = accountServiceFacade.getByEmailOrScreenName(username);
        if (accountDto == null) {
            throw new UsernameNotFoundException("username not found");
        }
        return new AccountDetails(accountDto);
    }
}
