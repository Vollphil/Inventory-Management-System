package com.example.InventoryManagementSystemBackend.util;

import java.util.Map;
import java.util.Set;
/**
 * Utility class to map item names to their respective categories.
 * Provides static methods to retrieve item categories and item names.
 */
public class ItemCategoryMappings {

    // Static map defining the mappings between item names and their categories.
    private static final Map<String, String> itemNameToCategory = Map.ofEntries(
            // Entries mapping item names to categories
            Map.entry("Laptop", "Electronics"),
            Map.entry("Desk", "Furniture"),
            Map.entry("Printer", "Electronics"),
            Map.entry("Office Chair", "Furniture"),
            Map.entry("Smartphone", "Electronics"),
            Map.entry("Bookshelf", "Furniture"),
            Map.entry("Monitor", "Electronics"),
            Map.entry("Coffee Table", "Furniture"),
            Map.entry("Headphones", "Electronics"),
            Map.entry("Sofa", "Furniture"),
            Map.entry("Keyboard", "Electronics"),
            Map.entry("Dining Table", "Furniture"),
            Map.entry("Mouse", "Electronics"),
            Map.entry("Wardrobe", "Furniture"),
            Map.entry("Router", "Electronics"),
            Map.entry("Armchair", "Furniture"),
            Map.entry("Tablet", "Electronics"),
            Map.entry("Bed", "Furniture"),
            Map.entry("Camera", "Electronics"),
            Map.entry("Side Table", "Furniture"),
            Map.entry("Ballpoint Pens", "Office Supplies"),
            Map.entry("Notebooks", "Stationery"),
            Map.entry("Safety Glasses", "Safety Equipment"),
            Map.entry("First Aid Kit", "Medical Supplies"),
            Map.entry("Work Gloves", "Safety Equipment"),
            Map.entry("Stapler", "Office Supplies"),
            Map.entry("Cleaning Spray", "Cleaning Supplies"),
            Map.entry("Industrial Fan", "Electrical Appliances"),
            Map.entry("Tape Measure", "Tools"),
            Map.entry("Hand Sanitizer", "Hygiene Products")
    );
    public static String getCategoryForItem(String itemName) {
        return itemNameToCategory.get(itemName);
    }
    /**
     * Retrieves a set of all item names.
     * Useful for enumeration or validation purposes.
     *
     * @return Set of all item names in the map.
     */
    public static Set<String> getAllItemNames() {
        return itemNameToCategory.keySet();
    }

}
