package com.example.notnullproject.repositories;

import com.example.notnullproject.models.entities.Session;
import com.example.notnullproject.models.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepo extends CrudRepository<User, Integer> {
    boolean existsByUsername(String username);
    User findByUsername(String username);

    User findBySession(Session session);
}
