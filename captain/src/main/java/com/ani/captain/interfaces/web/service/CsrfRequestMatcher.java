package com.ani.captain.interfaces.web.service;

import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.regex.Pattern;

/**
 * Created by huangbin on 7/19/16.
 */
public class CsrfRequestMatcher implements RequestMatcher {
    private Pattern allowedMethods = Pattern.compile("^(GET|HEAD|TRACE|OPTIONS)$");
    private List<String> excludedUrls;

    @Override
    public boolean matches(HttpServletRequest request) {
        if (this.excludedUrls != null && this.excludedUrls.size() > 0) {
            String servletPath = request.getServletPath();
            for (String url : this.excludedUrls) {
                if (servletPath.contains(url)) {
                    return false;
                }
            }
        }
        return !allowedMethods.matcher(request.getMethod()).matches();
    }

    public List<String> getExcludedUrls() {
        return excludedUrls;
    }

    public void setExcludedUrls(List<String> excludedUrls) {
        this.excludedUrls = excludedUrls;
    }
}
