package com.example.InventoryManagementSystemBackend.service;

import com.example.InventoryManagementSystemBackend.data.InventoryItem;
import com.example.InventoryManagementSystemBackend.data.InventoryStatus;
import com.example.InventoryManagementSystemBackend.repository.InventoryItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
/**
 * Service class for handling inventory operations.
 * Communicates with the InventoryItemRepository to perform CRUD operations.
 */
@Service
public class InventoryService {


    private final InventoryItemRepository inventoryItemRepository;
    /**
     * Constructor for InventoryService.
     *
     * @param inventoryItemRepository Repository for inventory item operations.
     */
    public InventoryService(InventoryItemRepository inventoryItemRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
    }
    /**
     * Retrieves all inventory items, optionally sorted.
     *
     * @param sortDirection The direction for sorting (asc or desc).
     * @return List of InventoryItem objects, sorted as per the provided direction.
     */
    public List<InventoryItem> findAll(String sortDirection) {
        Sort sort = Sort.unsorted();
        if (sortDirection != null && !sortDirection.isEmpty()) {
            sort = "desc".equalsIgnoreCase(sortDirection) ? Sort.by("name").descending() : Sort.by("name").ascending();
        }
        return inventoryItemRepository.findAll(sort);
    }

    /**
     * Finds inventory items by name, ignoring case.
     *
     * @param inventoryName The name of the inventory item to search for.
     * @return List of InventoryItem objects that match the search criteria.
     */
    public List<InventoryItem> findInventoryName(String inventoryName) {
        return inventoryItemRepository.findByNameContainingIgnoreCase(inventoryName);
    }

    /**
     * Creates a new inventory item.
     * Sets the current date as the purchase and last updated dates.
     *
     * @param newInventoryItem The new inventory item to be created.
     * @return The created InventoryItem object.
     */
    public InventoryItem createInventoryItem(InventoryItem newInventoryItem) {
        LocalDate currentDate = LocalDate.now();
        newInventoryItem.setPurchaseDate(currentDate);
        newInventoryItem.setLastUpdated(currentDate);
        return inventoryItemRepository.save(newInventoryItem);
    }
    /**
     * Updates an existing inventory item identified by its ID.
     * Throws EntityNotFoundException if the item is not found.
     *
     * @param id            The ID of the inventory item to update.
     * @param updateFields  Map of fields to be updated.
     * @return The updated InventoryItem object.
     */
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
    /**
     * Deletes an inventory item by its ID.
     *
     * @param id The ID of the inventory item to delete.
     */
    public void deleteById(Long id) {
        inventoryItemRepository.deleteById(id);
    }
}
