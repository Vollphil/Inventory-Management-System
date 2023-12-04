package com.example.InventoryManagementSystemBackend.repository;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryItemRepository extends JpaRepository<InventoryItem,Long> {
    /**
     * Finds inventory items where the name contains the given string, case-insensitive.
     *
     * @param name String to match within inventory item names.
     * @return List of InventoryItem objects that match the criteria.
     */
    List<InventoryItem> findByNameContainingIgnoreCase(String name);
    /**
     * Retrieves all inventory items, sorted according to the given Sort object.
     *
     * @param sort Sorting criteria.
     * @return List of sorted InventoryItem objects.
     */
    List<InventoryItem> findAll(Sort sort);

}
