        package com.example.InventoryManagementSystemBackend.util;

        import java.time.LocalDate;
        import java.time.Period;
        import java.util.Random;
        /**
         * Utility class for generating random dates.
         * Provides a method to generate a random LocalDate within a specified range.
         */
        public class RandomDateGenerator {

            /**
             * Generates a random LocalDate within the range from 'start' to 'end'.
             *
             * @param start The start date of the range.
             * @param end   The end date of the range.
             * @return A randomly selected LocalDate within the specified range.
             */
            public static LocalDate generateRandomDate(LocalDate start, LocalDate end) {
                Random random = new Random();
                int days = Period.between(start, end).getDays();
                return start.plusDays(random.nextInt(days + 1));
            }
        }
