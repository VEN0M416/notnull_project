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
     *             String mail
     * @return status:
     *             user already exists,
     *             mail already exists,
     *             done
     */
    @PostMapping("/registration/createRegistrationCode")
    private RegistrationResponse createRegistrationCode(@RequestBody RegistrationReq user){
        return registrationService.createRegistrationCode(user);
    }

    /**
     * @author Vladimir Krasnov
     * @param mail:
     *            String mail
     */
    @PostMapping("/registration/sendCode")
    private void sendCode(@RequestBody RegistrationReq mail){
        registrationService.sendCode(mail.getMail());
    }

    /**
     * @author Vladimir Krasnov
     * @param user на вход:
     *             String username,
     *             String mail
     *             String password
     *             String code;
     * @return status:
     *             denied
     *             done
     */
    @PostMapping("/registration/mailConfirmation")
    private RegistrationResponse mailConfirmation(@RequestBody RegistrationReq user){
        return registrationService.mailConfirmation(user);
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
