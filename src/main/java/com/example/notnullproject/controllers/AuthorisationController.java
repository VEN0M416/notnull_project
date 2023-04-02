package com.example.notnullproject.controllers;

import com.example.notnullproject.models.requestBodies.RegistrationReq;
import com.example.notnullproject.models.responses.RegistrationResponse;
import com.example.notnullproject.services.serviceImpl.RegistrationImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authorisation")
public class AuthorisationController {

    @Autowired
    private RegistrationImpl registrationImpl;

    @PostMapping("/registration")
    private RegistrationResponse registration(@RequestBody RegistrationReq user){
        return registrationImpl.save(user);
    }
}
