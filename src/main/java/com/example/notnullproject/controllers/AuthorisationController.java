package com.example.notnullproject.controllers;

import com.example.notnullproject.models.requestBodies.LoginReq;
import com.example.notnullproject.models.requestBodies.RegistrationReq;
import com.example.notnullproject.models.responses.LoginResponse;
import com.example.notnullproject.models.responses.RegistrationResponse;
import com.example.notnullproject.services.serviceImpl.LoginImpl;
import com.example.notnullproject.services.serviceImpl.RegistrationImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/authorisation")
public class AuthorisationController {

    @Autowired
    private RegistrationImpl registrationImpl;

    @Autowired
    private LoginImpl loginImpl;

    /**
     * @author Vladimir Krasnov
     * @param user на вход:
     *             String username,
     *             String password
     * @return status:
     *             user already exists,
     *             done
     */
    @PostMapping("/registration")
    private RegistrationResponse registration(@RequestBody RegistrationReq user){
        return registrationImpl.save(user);
    }

    @PostMapping("/login")
    private LoginResponse login(@RequestBody LoginReq user){
        return loginImpl.send(user);
    }

}
