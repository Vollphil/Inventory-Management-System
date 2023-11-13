package com.example.InventoryManagementSystemBackend;

import com.example.InventoryManagementSystemBackend.util.ItemCategoryMappings;
import com.example.InventoryManagementSystemBackend.util.ItemSupplierList;
import com.example.InventoryManagementSystemBackend.util.RandomDateGenerator;
import org.springframework.boot.CommandLineRunner;

import java.time.LocalDate;
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
        List<String> suppliers = new ArrayList<>(ItemSupplierList.getAllSuppliers());
        LocalDate startDate = LocalDate.of(2018, 1, 1);
        LocalDate endDate = LocalDate.now();
        for (int i = 0; i < 29; i++) {
            String randomItemName = itemNames.get(random.nextInt(itemNames.size()));
            String category = ItemCategoryMappings.getCategoryForItem(randomItemName);
            int quantity = random.nextInt(1,100);
            double price = random.nextDouble() * (1999.99 - 5.99) + 5.99;
            String supplier = suppliers.get(random.nextInt(suppliers.size()));
            LocalDate purchaseDate = RandomDateGenerator.generateRandomDate(startDate, endDate);
            LocalDate lastUpdated = RandomDateGenerator.generateRandomDate(purchaseDate, endDate);


        }
    }
}
