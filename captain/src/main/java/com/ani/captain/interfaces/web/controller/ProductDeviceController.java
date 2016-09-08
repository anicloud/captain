package com.ani.captain.interfaces.web.controller;

import com.ani.captain.domain.model.ProductDevice;
import com.ani.captain.domain.model.ProductDeviceReport;
import com.ani.captain.domain.model.ProductState;
import com.ani.captain.domain.repository.ProductDeviceReportRepository;
import com.ani.captain.domain.repository.ProductDeviceRepository;
import com.ani.captain.interfaces.web.controller.dto.product.ProductDeviceData;
import com.ani.captain.interfaces.web.controller.dto.product.ProductDeviceReportsData;
import com.ani.captain.interfaces.web.controller.dto.product.ProductDataUtils;
import com.ani.captain.interfaces.web.service.AccountDetails;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

/**
 * Created by huangbin on 8/23/16.
 */
@RestController
@RequestMapping("/service/product")
//@CrossOrigin(origins = "http://localhost:8080")
public class ProductDeviceController {
//    final long accountId = 764111382711898568L;
    @Resource
    ProductDeviceRepository productDeviceRepository;
    @Resource
    ProductDeviceReportRepository productDeviceReportRepository;

    @RequestMapping(value = "/device/list", method = RequestMethod.GET)
    List<ProductDeviceData> getProducts() {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        List<ProductDevice> products = productDeviceRepository.findByAccountId(accountId);
        return ProductDataUtils.fromProductDevices(products);
    }

    @RequestMapping(value = "/device", method = RequestMethod.POST)
    ProductDeviceData saveProduct(@RequestBody ProductDeviceData productData) {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        ProductDevice product = ProductDataUtils.toProductDevice(accountId, productData);
//        insertReports();
        return ProductDataUtils.fromProductDevice(productDeviceRepository.save(product));
    }

    @RequestMapping(value = "/device", method = RequestMethod.DELETE)
    void deleteProduct(@RequestBody String productId) {
        productDeviceRepository.delete(Long.parseLong(productId));
    }

    @RequestMapping(value = "/device/publish", method = RequestMethod.POST)
    ProductDeviceData publishProduct(@RequestBody String productId) {
        ProductDevice product = productDeviceRepository.find(Long.parseLong(productId));
        if (product != null) {
            product.setState(ProductState.PUBLISHED);
        }
        return ProductDataUtils.fromProductDevice(productDeviceRepository.save(product));
    }

    @RequestMapping(value = "/device/reports/{productId}", method = RequestMethod.GET)
    ProductDeviceReportsData getProductReports(@PathVariable long productId, @RequestParam String period) {
        long endTime = System.currentTimeMillis();
        long beginTime = endTime;
        Calendar calendar = Calendar.getInstance();
        if (StringUtils.equals(period, "month")) { // month
            calendar.set(Calendar.DAY_OF_MONTH, 1);
        } else if (StringUtils.equals(period, "week")) { // week
            calendar.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
        }
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        beginTime = calendar.getTimeInMillis();
        List<ProductDeviceReport> reports = productDeviceReportRepository.findBetweenTime(productId, beginTime, endTime);
        return ProductDataUtils.fromProductDeviceReports(productId, period, reports);
    }

    private void insertReports() {
        Random random = new Random(System.currentTimeMillis());
        long[] times = {1472140810100L, 1472227210000L, 1472313610000L, 1472400010000L, 1472486410000L, 1472572810000L, 1472659210000L};
        for (long time : times) {
            ProductDeviceReport report = new ProductDeviceReport(
                    5723103614236406427L,
                    time,
                    random.nextInt(6000),
                    random.nextInt(6000),
                    random.nextInt(6000));
            productDeviceReportRepository.save(report);
        }
    }
}
