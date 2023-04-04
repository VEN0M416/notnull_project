package com.example.notnullproject.repositories;

import com.example.notnullproject.models.entities.Sessions;
import org.springframework.data.repository.CrudRepository;

public interface SessionsRepo extends CrudRepository<Sessions, Integer> {

    boolean existsByUsername(String username);

    Sessions findByUsername(String username);

    Sessions findBySessionId(String sessionId);
}
