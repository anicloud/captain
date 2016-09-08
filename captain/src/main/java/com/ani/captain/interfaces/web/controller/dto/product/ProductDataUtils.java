package com.ani.captain.interfaces.web.controller.dto.product;

import com.ani.captain.domain.model.ProductApp;
import com.ani.captain.domain.model.ProductAppReport;
import com.ani.captain.domain.model.ProductDevice;
import com.ani.captain.domain.model.ProductDeviceReport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/25/16.
 */
public class ProductDataUtils {
    public static ProductAppData fromProductApp(ProductApp product) {
        if (product == null) return null;
        return new ProductAppData(
                String.valueOf(product.getProductId()),
                product.getName(),
                product.getDescription(),
                product.getType(),
                product.getVersion(),
                product.getInstalled(),
                product.getStars(),
                product.getTotalComments(),
                String.valueOf(product.getLastModTime()),
                product.getState(),
                product.getLogo(),
                product.getHome());
    }


    public static ProductApp toProductApp(long accountId, ProductAppData productData) {
        if (productData == null) return null;
        return new ProductApp(
                accountId,
                productData.productId == null ? -1 : Long.parseLong(productData.productId),
                productData.name,
                productData.description,
                productData.type,
                productData.version,
                productData.installed,
                productData.stars,
                productData.totalComments,
                productData.lastModTime == null ? -1 : Long.parseLong(productData.lastModTime),
                productData.state,
                productData.logo,
                productData.home,
                null);
    }

    public static List<ProductAppData> fromProductApps(List<ProductApp> products) {
        if (products == null) return null;
        List<ProductAppData> productDatas = new ArrayList<>();
        for (ProductApp product : products) {
            productDatas.add(fromProductApp(product));
        }
        return productDatas;
    }

    public static List<ProductApp> toProductApps(long accountId, List<ProductAppData> productDatas) {
        if (productDatas == null) return null;
        List<ProductApp> products = new ArrayList<>();
        for (ProductAppData productData : productDatas) {
            products.add(toProductApp(accountId, productData));
        }
        return products;
    }

    public static ProductDeviceData fromProductDevice(ProductDevice product) {
        if (product == null) return null;
        return new ProductDeviceData(
                String.valueOf(product.getProductId()),
                product.getName(),
                product.getDescription(),
                product.getType(),
                product.getVersion(),
                product.getInstalled(),
                product.getStars(),
                product.getTotalComments(),
                String.valueOf(product.getLastModTime()),
                product.getState(),
                product.getLogo(),
                product.getHome());
    }

    public static ProductDevice toProductDevice(long accountId, ProductDeviceData productData) {
        if (productData == null) return null;
        return new ProductDevice(
                accountId,
                productData.productId == null ? -1 : Long.parseLong(productData.productId),
                productData.name,
                productData.description,
                productData.type,
                productData.version,
                productData.installed,
                productData.stars,
                productData.totalComments,
                productData.lastModTime == null ? -1 : Long.parseLong(productData.lastModTime),
                productData.state,
                productData.logo,
                productData.home,
                null);
    }

    public static List<ProductDeviceData> fromProductDevices(List<ProductDevice> products) {
        if (products == null) return null;
        List<ProductDeviceData> productDatas = new ArrayList<>();
        for (ProductDevice product : products) {
            productDatas.add(fromProductDevice(product));
        }
        return productDatas;
    }

    public static List<ProductDevice> toProductDevices(long accountId, List<ProductDeviceData> productDatas) {
        if (productDatas == null) return null;
        List<ProductDevice> products = new ArrayList<>();
        for (ProductDeviceData productData : productDatas) {
            products.add(toProductDevice(accountId, productData));
        }
        return products;
    }

    public static ProductAppReportsData fromProductAppReports(long productId, String period, List<ProductAppReport> productReports) {
        if (productReports == null) return null;
        ProductAppReportsData reportsData = new ProductAppReportsData();
        reportsData.productId = String.valueOf(productId);
        reportsData.period = period;
        for (ProductAppReport productReport : productReports) {
            reportsData.activeUsers.add(productReport.getActiveUsers());
            reportsData.installed.add(productReport.getInstalled());
            reportsData.launched.add(productReport.getLaunched());
        }
        return reportsData;
    }

    public static ProductDeviceReportsData fromProductDeviceReports(long productId, String period, List<ProductDeviceReport> productReports) {
        if (productReports == null) return null;
        ProductDeviceReportsData reportsData = new ProductDeviceReportsData();
        reportsData.productId = String.valueOf(productId);
        reportsData.period = period;
        for (ProductDeviceReport productReport : productReports) {
            reportsData.activated.add(productReport.getActivated());
            reportsData.installed.add(productReport.getInstalled());
            reportsData.connected.add(productReport.getConnected());
        }
        return reportsData;
    }


}
