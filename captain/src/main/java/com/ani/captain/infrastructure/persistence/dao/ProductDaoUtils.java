package com.ani.captain.infrastructure.persistence.dao;

import com.ani.captain.domain.model.ProductApp;
import com.ani.captain.domain.model.ProductAppReport;
import com.ani.captain.domain.model.ProductDevice;
import com.ani.captain.domain.model.ProductDeviceReport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by huangbin on 8/24/16.
 */
public class ProductDaoUtils {
    static public ProductAppDao fromProductApp(ProductApp product) {
        if (product == null) return null;
        return new ProductAppDao(
                product.getProductId(),
                product.getName(),
                product.getDescription(),
                product.getType(),
                product.getVersion(),
                product.getInstalled(),
                product.getStars(),
                product.getTotalComments(),
                product.getLastModTime(),
                product.getState(),
                product.getLogo(),
                product.getToken());
    }


    static public ProductApp toProductApp(ProductAppDao productDao) {
        if (productDao == null) return null;
        return new ProductApp(
                productDao.productId,
                productDao.name,
                productDao.description,
                productDao.type,
                productDao.version,
                productDao.installed,
                productDao.stars,
                productDao.totalComments,
                productDao.lastModTime,
                productDao.state,
                productDao.logo,
                productDao.token);
    }

    static public List<ProductAppDao> fromProductApps(List<ProductApp> products) {
        if (products == null) return null;
        List<ProductAppDao> productDaos = new ArrayList<>();
        for (ProductApp product : products) {
            productDaos.add(fromProductApp(product));
        }
        return productDaos;
    }

    static public List<ProductApp> toProductApps(List<ProductAppDao> productDaos) {
        if (productDaos == null) return null;
        List<ProductApp> products = new ArrayList<>();
        for (ProductAppDao productDao : productDaos) {
            products.add(toProductApp(productDao));
        }
        return products;
    }

    static public ProductDeviceDao fromProductDevice(ProductDevice product) {
        if (product == null) return null;
        return new ProductDeviceDao(
                product.getProductId(),
                product.getName(),
                product.getDescription(),
                product.getType(),
                product.getVersion(),
                product.getInstalled(),
                product.getStars(),
                product.getTotalComments(),
                product.getLastModTime(),
                product.getState(),
                product.getLogo(),
                product.getToken());
    }

    static public ProductDevice toProductDevice(ProductDeviceDao productDao) {
        if (productDao == null) return null;
        return new ProductDevice(
                productDao.productId,
                productDao.name,
                productDao.description,
                productDao.type,
                productDao.version,
                productDao.installed,
                productDao.stars,
                productDao.totalComments,
                productDao.lastModTime,
                productDao.state,
                productDao.logo,
                productDao.token);
    }

    static public List<ProductDeviceDao> fromProductDevices(List<ProductDevice> products) {
        if (products == null) return null;
        List<ProductDeviceDao> productDaos = new ArrayList<>();
        for (ProductDevice product : products) {
            productDaos.add(fromProductDevice(product));
        }
        return productDaos;
    }

    static public List<ProductDevice> toProductDevices(List<ProductDeviceDao> productDaos) {
        if (productDaos == null) return null;
        List<ProductDevice> products = new ArrayList<>();
        for (ProductDeviceDao productDao : productDaos) {
            products.add(toProductDevice(productDao));
        }
        return products;
    }

    static public ProductAppReportDao fromProductAppReports(ProductAppReport productReport) {
        if (productReport == null) return null;
        return new ProductAppReportDao(
                productReport.getProductId(),
                productReport.getTime(),
                productReport.getActiveUsers(),
                productReport.getInstalled(),
                productReport.getLaunched()
        );
    }

    static public ProductAppReport toProductAppReports(ProductAppReportDao productReportsDao) {
        if (productReportsDao == null) return null;
        return new ProductAppReport(
                productReportsDao.productId,
                productReportsDao.time,
                productReportsDao.activeUsers,
                productReportsDao.installed,
                productReportsDao.launched
        );
    }

    static public List<ProductAppReportDao> fromProductAppReports(List<ProductAppReport> productReports) {
        if (productReports == null) return null;
        List<ProductAppReportDao> productReportsDaos = new ArrayList<>();
        for (ProductAppReport productReport : productReports) {
            productReportsDaos.add(fromProductAppReports(productReport));
        }
        return productReportsDaos;
    }

    static public List<ProductAppReport> toProductAppReports(List<ProductAppReportDao> productReportsDaos) {
        if (productReportsDaos == null) return null;
        List<ProductAppReport> productReports = new ArrayList<>();
        for (ProductAppReportDao productReportDao : productReportsDaos) {
            productReports.add(toProductAppReports(productReportDao));
        }
        return productReports;
    }

    static public ProductDeviceReportDao fromProductDeviceReports(ProductDeviceReport productReport) {
        if (productReport == null) return null;
        return new ProductDeviceReportDao(
                productReport.getProductId(),
                productReport.getTime(),
                productReport.getActivated(),
                productReport.getInstalled(),
                productReport.getConnected()
        );
    }

    static public ProductDeviceReport toProductDeviceReports(ProductDeviceReportDao productReportsDao) {
        if (productReportsDao == null) return null;
        return new ProductDeviceReport(
                productReportsDao.productId,
                productReportsDao.time,
                productReportsDao.activated,
                productReportsDao.installed,
                productReportsDao.connected
        );
    }

    static public List<ProductDeviceReportDao> fromProductDeviceReports(List<ProductDeviceReport> productReports) {
        if (productReports == null) return null;
        List<ProductDeviceReportDao> productReportsDaos = new ArrayList<>();
        for (ProductDeviceReport productReport : productReports) {
            productReportsDaos.add(fromProductDeviceReports(productReport));
        }
        return productReportsDaos;
    }

    static public List<ProductDeviceReport> toProductDeviceReports(List<ProductDeviceReportDao> productReportsDaos) {
        if (productReportsDaos == null) return null;
        List<ProductDeviceReport> productReports = new ArrayList<>();
        for (ProductDeviceReportDao productReportDao : productReportsDaos) {
            productReports.add(toProductDeviceReports(productReportDao));
        }
        return productReports;
    }
}
