package com.ani.captain.interfaces.web.controller.dto.product;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/23/16.
 */
public class ProductAppReportsData {
    public String productId;
    public String period;
    public List<Integer> activeUsers;
    public List<Integer> installed;
    public List<Integer> launched;

    public ProductAppReportsData() {
        this.activeUsers = new ArrayList<>();
        this.installed = new ArrayList<>();
        this.launched = new ArrayList<>();
    }

    public ProductAppReportsData(String productId, String period, List<Integer> activeUsers, List<Integer> installed, List<Integer> launched) {
        this.productId = productId;
        this.period = period;
        this.activeUsers = activeUsers;
        this.installed = installed;
        this.launched = launched;
    }
}
