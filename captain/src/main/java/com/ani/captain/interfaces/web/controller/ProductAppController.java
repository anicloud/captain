package com.ani.captain.interfaces.web.controller;

import com.ani.captain.domain.model.ProductApp;
import com.ani.captain.domain.model.ProductAppReport;
import com.ani.captain.domain.model.ProductState;
import com.ani.captain.domain.repository.ProductAppReportRepository;
import com.ani.captain.domain.repository.ProductAppRepository;
import com.ani.captain.interfaces.web.controller.dto.product.ProductAppData;
import com.ani.captain.interfaces.web.controller.dto.product.ProductAppReportsData;
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
public class ProductAppController {
//    final long accountId = 764111382711898568L;
    @Resource
    ProductAppRepository productAppRepository;
    @Resource
    ProductAppReportRepository productAppReportRepository;

    @RequestMapping(value = "/app/list", method = RequestMethod.GET)
    List<ProductAppData> getProducts() {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        List<ProductApp> products = productAppRepository.findByAccountId(accountId);
        return ProductDataUtils.fromProductApps(products);
    }

    @RequestMapping(value = "/app", method = RequestMethod.POST)
    ProductAppData saveProduct(@RequestBody ProductAppData productData) {
        AccountDetails accountDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long accountId = accountDetails.accountDto.accountId;
        ProductApp product = ProductDataUtils.toProductApp(accountId, productData);
//        insertReports();
        return ProductDataUtils.fromProductApp(productAppRepository.save(product));
    }

    @RequestMapping(value = "/app", method = RequestMethod.DELETE)
    void deleteProduct(@RequestBody String productId) {
        productAppRepository.delete(Long.parseLong(productId));
    }

    @RequestMapping(value = "/app/publish", method = RequestMethod.POST)
    ProductAppData publishProduct(@RequestBody String productId) {
        ProductApp product = productAppRepository.find(Long.parseLong(productId));
        if (product != null) {
            product.setState(ProductState.PUBLISHED);
        }
        return ProductDataUtils.fromProductApp(productAppRepository.save(product));
    }

    @RequestMapping(value = "/app/reports/{productId}", method = RequestMethod.GET)
    ProductAppReportsData getProductReports(@PathVariable long productId, @RequestParam String period) {
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
        List<ProductAppReport> reports = productAppReportRepository.findBetweenTime(productId, beginTime, endTime);
        return ProductDataUtils.fromProductAppReports(productId, period, reports);
    }

    private void insertReports() {
        Random random = new Random(System.currentTimeMillis());
        long[] times = {1472140810100L, 1472227210000L, 1472313610000L, 1472400010000L, 1472486410000L, 1472572810000L, 1472659210000L};
        for (long time : times) {
            ProductAppReport report = new ProductAppReport(
                    764111382711898568L,
                    time,
                    random.nextInt(6000),
                    random.nextInt(6000),
                    random.nextInt(6000));
            productAppReportRepository.save(report);
        }
    }
}
