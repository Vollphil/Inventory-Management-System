package com.example.InventoryManagementSystemBackend.util;

import java.util.ArrayList;
import java.util.List;

public class ItemSupplierList {
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
    ));
    public static List<String> getAllSuppliers(){
        return listOfSuppliers;
    }
}
