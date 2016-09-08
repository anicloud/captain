package com.ani.captain.domain;

import java.util.Random;
import java.util.UUID;

/**
 * Created by huangbin on 8/31/16.
 */
public class Utils {
    private static Random random = new Random(System.currentTimeMillis());
    public static long generateId() {
        UUID uuid = UUID.randomUUID();
        return Math.abs(uuid.getMostSignificantBits());
    }

    public static byte[] generateToken() {
        UUID uuid = UUID.randomUUID();
        long most = uuid.getMostSignificantBits();
        long least = uuid.getLeastSignificantBits();
        return new byte[]{
                (byte) (most >>> 56),
                (byte) (most >>> 48),
                (byte) (most >>> 40),
                (byte) (most >>> 32),
                (byte) (most >>> 24),
                (byte) (most >>> 16),
                (byte) (most >>> 8),
                (byte) most,
                (byte) (least >>> 56),
                (byte) (least >>> 48),
                (byte) (least >>> 40),
                (byte) (least >>> 32),
                (byte) (least >>> 24),
                (byte) (least >>> 16),
                (byte) (least >>> 8),
                (byte) least
        };
    }

}
