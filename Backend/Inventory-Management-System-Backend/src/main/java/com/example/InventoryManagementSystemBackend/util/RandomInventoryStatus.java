package com.example.InventoryManagementSystemBackend.util;

import com.example.InventoryManagementSystemBackend.data.InventoryStatus;

import java.util.Random;
/**
 * Utility class for generating random inventory statuses.
 * Provides a method to randomly select an InventoryStatus value.
 */
public class RandomInventoryStatus {
    private static final Random random = new Random();

    /**
     * Selects a random InventoryStatus value from the available statuses.
     *
     * @return A randomly selected InventoryStatus.
     */
    public static InventoryStatus getRandomStatus(){
        InventoryStatus[] statuses = InventoryStatus.values();
        int randomIndex = random.nextInt(statuses.length);
        return statuses[randomIndex];
    }
}
