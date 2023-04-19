package com.example.notnullproject.repositories;

import com.example.notnullproject.models.entities.Stock;
import org.springframework.data.repository.CrudRepository;

public interface StockRepo extends CrudRepository<Stock, Integer> {
    Stock findByName(String name);
    boolean existsByName(String name);
}
