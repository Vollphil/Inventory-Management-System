package com.example.InventoryManagementSystemBackend.util;

import java.util.Map;
import java.util.Set;

public class ItemCategoryMappings {

    private static final Map<String, String> itemNameToCategory = Map.ofEntries(
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
    public static Set<String> getAllItemNames() {
        return itemNameToCategory.keySet();
    }

}
