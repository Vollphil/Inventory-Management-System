package com.example.InventoryManagementSystemBackend.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class InventoryItem {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String category;
    private int quantity;
    private double price;
    private String description;
    private String supplier;
    private LocalDate purchaseDate;
    @LastModifiedDate
    private LocalDate lastUpdated;
    private InventoryStatus status;
}
