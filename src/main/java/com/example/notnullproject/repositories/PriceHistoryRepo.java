package com.example.notnullproject.repositories;

import com.example.notnullproject.models.entities.PriceHistory;
import org.springframework.data.repository.CrudRepository;

public interface PriceHistoryRepo extends CrudRepository<PriceHistory, Integer> {
}
