package com.example.notnullproject.controllers;

import com.example.notnullproject.models.requestBodies.RegistrationReq;
import com.example.notnullproject.models.responses.RegistrationResponse;
import com.example.notnullproject.services.serviceImpl.RegistrationImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
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
