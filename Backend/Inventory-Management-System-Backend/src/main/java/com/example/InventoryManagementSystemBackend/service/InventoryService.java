package com.example.InventoryManagementSystemBackend.service;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import com.example.InventoryManagementSystemBackend.data.InventoryStatus;
import com.example.InventoryManagementSystemBackend.repository.InventoryItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class InventoryService {
    private final InventoryItemRepository inventoryItemRepository;

    public InventoryService(InventoryItemRepository inventoryItemRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
    }

    public List<InventoryItem> findAll() {
        return inventoryItemRepository.findAll();
    }

    public List<InventoryItem> findInventoryName(String inventoryName) {
        return inventoryItemRepository.findByNameContainingIgnoreCase(inventoryName);
    }

    public InventoryItem createInventoryItem(InventoryItem newInventoryItem) {
        LocalDate currentDate = LocalDate.now();
        newInventoryItem.setPurchaseDate(currentDate);
        newInventoryItem.setLastUpdated(currentDate);
        return inventoryItemRepository.save(newInventoryItem);
    }

    public InventoryItem updateInventoryItem(long id, Map<String, Object> updateFields) {
        LocalDate currentDate = LocalDate.now();
        Optional<InventoryItem> optionalUpdatedInventoryItem = inventoryItemRepository.findById(id);
        if (!optionalUpdatedInventoryItem.isPresent()) {

            throw new EntityNotFoundException("Inventory item not found for id: " + id);
        }
        InventoryItem item = optionalUpdatedInventoryItem.get();
        updateFields.forEach((key, value) -> {
            switch (key) {
                case "name":
                    item.setName((String) value);
                    break;
                case "category":
                    item.setCategory((String) value);
                    break;
                case "quantity":
                    item.setQuantity((Integer) value);
                    break;
                case "price":
                    item.setPrice((Double) value);
                    break;
                case "supplier":
                    item.setSupplier((String) value);
                    break;
                case "status":
                    item.setStatus(InventoryStatus.valueOf((String) value));

            }
        });
        item.setLastUpdated(currentDate);
        return inventoryItemRepository.save(item);
    }
}
