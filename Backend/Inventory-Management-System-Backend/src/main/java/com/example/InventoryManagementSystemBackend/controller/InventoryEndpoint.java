package com.example.InventoryManagementSystemBackend.controller;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import com.example.InventoryManagementSystemBackend.service.InventoryService;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("inventory")
public class InventoryEndpoint {
    private final InventoryService inventoryService;

    public InventoryEndpoint(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping
    List<InventoryItem> findAll() {
        return inventoryService.findAll();
    }

    @GetMapping("/searchName")
    List<InventoryItem> findInventoryName(@RequestParam String name) {
        return inventoryService.findInventoryName(name);
    }

    @PostMapping("/createItem")
    InventoryItem save(@RequestBody InventoryItem newInventoryItem) {
        return inventoryService.createInventoryItem(newInventoryItem);
    }

    @PatchMapping("/updateItem/{id}")
    InventoryItem updateItem(@PathVariable Long id, @RequestBody Map<String, Object> updateFields) {
        return inventoryService.updateInventoryItem(id, updateFields);
    }

    @DeleteMapping("/deleteItem/{id}")
    void deleteItemById(@PathVariable Long id) {
        inventoryService.deleteById(id);
    }
}
