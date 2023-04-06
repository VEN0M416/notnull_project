package com.example.notnullproject.controllers;

import com.example.notnullproject.models.requestBodies.LoginReq;
import com.example.notnullproject.models.requestBodies.LogoutReq;
import com.example.notnullproject.models.requestBodies.RegistrationReq;
import com.example.notnullproject.models.responses.LoginResponse;
import com.example.notnullproject.models.responses.LogoutResponse;
import com.example.notnullproject.models.responses.RegistrationResponse;
import com.example.notnullproject.services.service.LoginService;
import com.example.notnullproject.services.service.LogoutService;
import com.example.notnullproject.services.service.RegistrationService;
import com.example.notnullproject.services.serviceImpl.LoginImpl;
import com.example.notnullproject.services.serviceImpl.RegistrationImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/authorisation")
public class AuthorisationController {

    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private LoginService loginService;

    @Autowired
    private LogoutService logoutService;

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
        return registrationService.save(user);
    }

    /**
     * @author Vladimir Krasnov
     * @param user на вход:
     *             String username,
     *             String password
     * @return status:
     *              user does not exist
     *              wrong password
     *              done
     *         sessionId:
     *              String {sessionId}
     */
    @PostMapping("/login")
    private LoginResponse login(@RequestBody LoginReq user){
        return loginService.send(user);
    }

    /**
     * @author Vladimir Krasnov
     * @param sessionId на вход:
     *                  String sessionId
     * @return status:
     *                  done
     */
    @PostMapping("/logout")
    private LogoutResponse logout(@RequestBody LogoutReq sessionId){
        return logoutService.quit(sessionId);
    }

}
