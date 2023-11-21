package com.example.InventoryManagementSystemBackend.repository;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryItemRepository extends JpaRepository<InventoryItem,Long> {
    List<InventoryItem> findByNameContainingIgnoreCase(String name);

    List<InventoryItem> findAll(Sort sort);

}
