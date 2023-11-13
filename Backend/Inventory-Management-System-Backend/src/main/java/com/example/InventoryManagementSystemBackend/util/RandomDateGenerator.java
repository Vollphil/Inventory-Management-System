package com.example.InventoryManagementSystemBackend.util;

import java.time.LocalDate;
import java.time.Period;
import java.util.Random;

public class RandomDateGenerator {

    public static LocalDate generateRandomDate(LocalDate start, LocalDate end) {
        Random random = new Random();
        int days = Period.between(start, end).getDays();
        return start.plusDays(random.nextInt(days + 1));
    }
}
