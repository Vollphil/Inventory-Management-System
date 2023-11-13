package com.example.InventoryManagementSystemBackend.repository;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryItemRepository extends JpaRepository<InventoryItem,Long> {
}
