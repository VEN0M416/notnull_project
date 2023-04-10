package com.example.notnullproject.repositories;

import com.example.notnullproject.models.entities.PastMessage;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PastMessageRepo extends CrudRepository<PastMessage, Integer> {
    List<PastMessage> findAll();
}
