package com.ani.captain.interfaces.web.controller;

import com.ani.captain.interfaces.web.controller.dto.product.DeviceProductData;
import com.ani.captain.interfaces.web.controller.dto.product.DeviceProductDetailsData;
import com.ani.captain.interfaces.web.controller.dto.product.DeviceProductReportsData;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/23/16.
 */
@RestController
@RequestMapping("/service/product/device")
@CrossOrigin(origins = "http://localhost:8080")
public class ProductDeviceController {
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    List<DeviceProductData> getDeviceProducts() {
        List<DeviceProductData> productDatas = new ArrayList<>();
        return productDatas;
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    DeviceProductData saveDeviceProduct(@RequestBody DeviceProductData productData) {
        return productData;
    }

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    DeviceProductData deleteDeviceProduct(@RequestBody DeviceProductData productData) {
        return productData;
    }

    @RequestMapping(value = "/publish", method = RequestMethod.POST)
    DeviceProductData publishDeviceProduct(@RequestBody DeviceProductData productData) {
        return productData;
    }

    @RequestMapping(value = "/details/{masterId}/{slaveId}", method = RequestMethod.GET)
    DeviceProductDetailsData getDeviceProductDetails(@PathVariable Long masterId, @PathVariable Integer slaveId) {
        return new DeviceProductDetailsData();
    }

    @RequestMapping(value = "/details", method = RequestMethod.POST)
    DeviceProductDetailsData saveDeviceProductDetails(@RequestBody DeviceProductDetailsData detailsData) {
        return new DeviceProductDetailsData();
    }

    @RequestMapping(value = "/reports/{masterId}/{slaveId}", method = RequestMethod.GET)
    DeviceProductReportsData getDeviceProductReports(@PathVariable Long masterId, @PathVariable Integer slaveId) {
        return new DeviceProductReportsData();
    }
}
