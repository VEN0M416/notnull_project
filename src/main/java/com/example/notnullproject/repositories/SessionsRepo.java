package com.example.notnullproject.repositories;

import com.example.notnullproject.models.entities.Session;
import org.springframework.data.repository.CrudRepository;

public interface SessionsRepo extends CrudRepository<Session, Integer> {

    boolean existsByUsername(String username);

    Session findByUsername(String username);

    Session findBySessionId(String sessionId);
}
