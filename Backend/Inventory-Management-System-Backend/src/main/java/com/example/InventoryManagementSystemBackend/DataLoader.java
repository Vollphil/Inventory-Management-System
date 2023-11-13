package com.example.InventoryManagementSystemBackend;

import com.example.InventoryManagementSystemBackend.util.ItemCategoryMappings;
import org.springframework.boot.CommandLineRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DataLoader implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {

    }
    private void loadRandomData(){
        Random random = new Random();
        List<String> itemNames = new ArrayList<>(ItemCategoryMappings.getAllItemNames());

        for (int i = 0; i < 29; i++) {
            String randomItemName = itemNames.get(random.nextInt(itemNames.size()));
            String category = ItemCategoryMappings.getCategoryForItem(randomItemName);
            int quantity = random.nextInt(1,100);
            double price = random.nextDouble(5.99,1999.99);

        }
    }
}
