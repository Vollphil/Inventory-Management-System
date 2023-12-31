package com.example.InventoryManagementSystemBackend;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import com.example.InventoryManagementSystemBackend.data.InventoryStatus;
import com.example.InventoryManagementSystemBackend.repository.InventoryItemRepository;
import com.example.InventoryManagementSystemBackend.util.ItemCategoryMappings;
import com.example.InventoryManagementSystemBackend.util.ItemSupplierList;
import com.example.InventoryManagementSystemBackend.util.RandomDateGenerator;
import com.example.InventoryManagementSystemBackend.util.RandomInventoryStatus;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
/**
 * DataLoader component to pre-load the database with random inventory data.
 * Implements CommandLineRunner to run immediately after the application starts.
 */
@Component
public class DataLoader implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);


    private InventoryItemRepository inventoryItemRepository;

    /**
     * Constructor for DataLoader.
     *
     * @param inventoryItemRepository The repository for inventory item operations.
     */
    public DataLoader(InventoryItemRepository inventoryItemRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
    }

    /**
     * Overrides the run method to execute data loading on application start.
     *
     * @param args The command line arguments.
     * @throws Exception In case of errors during data loading.
     */
    @Override
    public void run(String... args) throws Exception {
        loadRandomData();

    }
    /**
     * Loads random data into the inventory.
     * Generates random inventory items and saves them to the repository.
     */
    private void loadRandomData(){
        Random random = new Random();
        List<String> itemNames = new ArrayList<>(ItemCategoryMappings.getAllItemNames());
        List<String> suppliers = new ArrayList<>(ItemSupplierList.getAllSuppliers());
        LocalDate startDate = LocalDate.of(2018, 1, 1);
        LocalDate endDate = LocalDate.now();
        for (int i = 0; i < 29 && !itemNames.isEmpty(); i++) {
            // Generate random item details
            int randomIndex = random.nextInt(itemNames.size());
            String randomItemName = itemNames.get(randomIndex);
            itemNames.remove(randomIndex);
            String category = ItemCategoryMappings.getCategoryForItem(randomItemName);
            int quantity = random.nextInt(1,100);
            double price = random.nextDouble() * (1999.99 - 5.99) + 5.99;
            BigDecimal formattedPrice = BigDecimal.valueOf(price).setScale(2, RoundingMode.HALF_UP);
            String supplier = suppliers.get(random.nextInt(suppliers.size()));
            LocalDate purchaseDate = RandomDateGenerator.generateRandomDate(startDate, endDate);
            LocalDate lastUpdated = RandomDateGenerator.generateRandomDate(purchaseDate, endDate);
            InventoryStatus status = RandomInventoryStatus.getRandomStatus();
            InventoryItem item = new InventoryItem();
            item.setName(randomItemName);
            item.setCategory(category);
            item.setQuantity(quantity);
            item.setPrice(formattedPrice.doubleValue());
            item.setSupplier(supplier);
            item.setPurchaseDate(purchaseDate);
            item.setLastUpdated(lastUpdated);
            item.setStatus(status);
            inventoryItemRepository.save(item);


        }
        logger.info("Random data loading completed");
    }
}
