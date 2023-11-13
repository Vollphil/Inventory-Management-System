package com.example.InventoryManagementSystemBackend.controller;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import com.example.InventoryManagementSystemBackend.service.InventoryService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("inventory")
public class InventoryEndpoint {
    private final InventoryService inventoryService;

    public InventoryEndpoint(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

@GetMapping
    List<InventoryItem> findAll(){
return inventoryService.findAll();
}
}
