package com.example.notnullproject.services.serviceImpl;

import com.example.notnullproject.models.entities.Users;
import com.example.notnullproject.models.requestBodies.RegistrationReq;
import com.example.notnullproject.models.responses.RegistrationResponse;
import com.example.notnullproject.passwordEncoder.PasswordEncoder;
import com.example.notnullproject.repositories.UsersRepo;
import com.example.notnullproject.services.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegistrationImpl implements RegistrationService{

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public RegistrationResponse save(RegistrationReq user) {
        RegistrationResponse response = new RegistrationResponse();
        if(usersRepo.existsByUsername(user.getUsername())){
            response.setStatus("user already exists");
        }else{
            Users globalUser = new Users(user.getUsername(), passwordEncoder.encode(user.getPassword()));
            usersRepo.save(globalUser);
            response.setStatus("done");
        }
        return response;
    }
}
