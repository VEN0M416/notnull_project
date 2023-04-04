package com.example.notnullproject.repositories;

import com.example.notnullproject.models.entities.Sessions;
import com.example.notnullproject.models.entities.Users;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepo extends CrudRepository<Users, Integer> {
    boolean existsByUsername(String username);
    Users findByUsername(String username);

    Users findBySession(Sessions session);
}
