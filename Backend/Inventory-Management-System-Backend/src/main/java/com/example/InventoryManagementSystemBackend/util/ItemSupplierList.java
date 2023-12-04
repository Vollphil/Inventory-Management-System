package com.example.InventoryManagementSystemBackend.util;

import java.util.ArrayList;
import java.util.List;

/**
 * Utility class providing a list of suppliers.
 * This class contains a static list of supplier names used throughout the inventory system.
 */

public class ItemSupplierList {
    // Static list containing predefined supplier names.
    private static final ArrayList<String> listOfSuppliers = new ArrayList<>(List.of(
            "Global Supply Co.",
            "BrightHouse Goods",
            "Oakwood Enterprises",
            "Rapid Supply Network",
            "GreenLeaf Distributors",
            "Universal Suppliers",
            "Pioneer Trading Co.",
            "SparkClean Products",
            "IronClad Industrial",
            "Edge Distributors"
            // Add more suppliers here if needed
    ));
    /**
     * Returns the list of all supplier names.
     * This method can be used to retrieve supplier names for selection or validation purposes.
     *
     * @return A List of supplier names.
     */
    public static List<String> getAllSuppliers(){
        return listOfSuppliers;
    }
}
