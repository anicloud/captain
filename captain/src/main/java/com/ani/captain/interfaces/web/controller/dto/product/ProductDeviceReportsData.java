package com.ani.captain.interfaces.web.controller.dto.product;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/23/16.
 */
public class ProductDeviceReportsData {
    public String productId;
    public String period;
    public List<Integer> activated;
    public List<Integer> installed;
    public List<Integer> connected;

    public ProductDeviceReportsData() {
        this.activated = new ArrayList<>();
        this.installed = new ArrayList<>();
        this.connected = new ArrayList<>();
    }

    public ProductDeviceReportsData(String productId, String period, List<Integer> activated, List<Integer> installed, List<Integer> connected) {
        this.productId = productId;
        this.period = period;
        this.activated = activated;
        this.installed = installed;
        this.connected = connected;
    }
}
