    package com.example.InventoryManagementSystemBackend.service;

    import com.example.InventoryManagementSystemBackend.data.InventoryItem;
    import com.example.InventoryManagementSystemBackend.repository.InventoryItemRepository;
    import org.springframework.stereotype.Service;

    import java.util.List;

    @Service
    public class InventoryService {
    private final InventoryItemRepository inventoryItemRepository;

        public InventoryService(InventoryItemRepository inventoryItemRepository) {
            this.inventoryItemRepository = inventoryItemRepository;
        }
    public List<InventoryItem> findAll(){
    return inventoryItemRepository.findAll();
    }

    public List<InventoryItem> findInventoryName(String inventoryName){
            return inventoryItemRepository.findByNameContainingIgnoreCase(inventoryName);
    }
    public InventoryItem createInventoryItem(InventoryItem newInventoryItem){
            return  inventoryItemRepository.save(newInventoryItem);
    }
    }
