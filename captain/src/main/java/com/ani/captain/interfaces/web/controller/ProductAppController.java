package com.ani.captain.interfaces.web.controller;

import com.ani.captain.interfaces.web.controller.dto.product.AppProductData;
import com.ani.captain.interfaces.web.controller.dto.product.AppProductDetailsData;
import com.ani.captain.interfaces.web.controller.dto.product.AppProductReportsData;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/23/16.
 */
@RestController
@RequestMapping("/service/product/app")
@CrossOrigin(origins = "http://localhost:8080")
public class ProductAppController {
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    List<AppProductData> getAppProducts() {
        List<AppProductData> productDatas = new ArrayList<>();
        return productDatas;
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    AppProductData saveAppProduct(@RequestBody AppProductData productData) {
        return productData;
    }

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    AppProductData deleteAppProduct(@RequestBody AppProductData productData) {
        return productData;
    }

    @RequestMapping(value = "/publish", method = RequestMethod.POST)
    AppProductData publishAppProduct(@RequestBody AppProductData productData) {
        return productData;
    }

    @RequestMapping(value = "/details/{appId}", method = RequestMethod.GET)
    AppProductDetailsData getAppProductDetails(@PathVariable Long appId) {
        return new AppProductDetailsData();
    }

    @RequestMapping(value = "/details", method = RequestMethod.POST)
    AppProductDetailsData saveAppProductDetails(@RequestBody AppProductDetailsData detailsData) {
        return new AppProductDetailsData();
    }

    @RequestMapping(value = "/reports/{appId}", method = RequestMethod.GET)
    AppProductReportsData getAppProductReports(@PathVariable Long appId) {
        return new AppProductReportsData();
    }
}
