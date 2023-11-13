package com.example.InventoryManagementSystemBackend.util;

import com.example.InventoryManagementSystemBackend.data.InventoryStatus;

import java.util.Random;

public class RandomInventoryStatus {
    private static final Random random = new Random();
    public static InventoryStatus getRandomStatus(){
        InventoryStatus[] statuses = InventoryStatus.values();
        int randomIndex = random.nextInt(statuses.length);
        return statuses[randomIndex];
    }
}
