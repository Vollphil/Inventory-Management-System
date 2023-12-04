package com.example.InventoryManagementSystemBackend.controller;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import com.example.InventoryManagementSystemBackend.service.InventoryService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
/**
 * REST Controller for managing inventory.
 * Provides endpoints for CRUD operations on inventory items.
 */
@RestController
@RequestMapping("inventory")
public class InventoryEndpoint {
    private final InventoryService inventoryService;

    /**
     * Constructor for InventoryEndpoint.
     * @param inventoryService Service layer dependency for inventory operations.
     */
    public InventoryEndpoint(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }
    /**
     * Get a list of all inventory items.
     * Optionally sorted based on the provided sort parameter.
     *
     * @param sort Optional sorting parameter.
     * @return List of InventoryItem objects.
     */
    @GetMapping
    List<InventoryItem> findAll(@RequestParam(required = false) String sort) {
        return inventoryService.findAll(sort);
    }
    /**
     * Find inventory items by name.
     *
     * @param name Name of the inventory item to find.
     * @return List of matching InventoryItem objects.
     */

    @GetMapping("/searchName")
    List<InventoryItem> findInventoryName(@RequestParam String name) {
        return inventoryService.findInventoryName(name);
    }
    /**
     * Create a new inventory item.
     *
     * @param newInventoryItem InventoryItem object to be created.
     * @return The created InventoryItem object.
     */
    @PostMapping("/createItem")
    InventoryItem save(@RequestBody InventoryItem newInventoryItem) {
        return inventoryService.createInventoryItem(newInventoryItem);
    }
    /**
     * Update an existing inventory item.
     *
     * @param id ID of the inventory item to update.
     * @param updateFields Map containing fields to update in the inventory item.
     * @return The updated InventoryItem object.
     */
    @PatchMapping("/updateItem/{id}")
    InventoryItem updateItem(@PathVariable Long id, @RequestBody Map<String, Object> updateFields) {
        return inventoryService.updateInventoryItem(id, updateFields);
    }
    /**
     * Delete an inventory item by its ID.
     *
     * @param id ID of the inventory item to delete.
     */
    @DeleteMapping("/deleteItem/{id}")
    void deleteItemById(@PathVariable Long id) {
        inventoryService.deleteById(id);
    }
}
