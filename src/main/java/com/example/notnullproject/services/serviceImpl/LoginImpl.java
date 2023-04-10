package com.example.notnullproject.services.serviceImpl;

import com.example.notnullproject.models.entities.Session;
import com.example.notnullproject.models.entities.User;
import com.example.notnullproject.models.requestBodies.LoginReq;
import com.example.notnullproject.models.responses.LoginResponse;
import com.example.notnullproject.passwordEncoder.PasswordEncoder;
import com.example.notnullproject.repositories.SessionsRepo;
import com.example.notnullproject.repositories.UsersRepo;
import com.example.notnullproject.services.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginImpl implements LoginService {

    @Autowired
    private SessionsRepo sessionsRepo;

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public LoginResponse send(LoginReq user) {
        LoginResponse response = new LoginResponse();
        Session session = new Session();
        if(!usersRepo.existsByUsername(user.getUsername())){
            response.setStatus("user does not exist");
        }else if(!passwordEncoder.matches(
                user.getPassword(),
                usersRepo.findByUsername(
                        user.getUsername())
                        .getPassword())){
            response.setStatus("wrong password");
        } else if(!sessionsRepo.existsByUsername(user.getUsername())){
            session.setUsername(user.getUsername());
            sessionsRepo.save(session);
            User userForSave = usersRepo.findByUsername(user.getUsername());
            userForSave.setSession(session);
            usersRepo.save(userForSave);
            response.setSessionId(session.getSessionId());
            response.setStatus("done");
        } else {
            response.setSessionId(
                    sessionsRepo.findByUsername(
                            user.getUsername())
                            .getSessionId());
            response.setStatus("done");
        }
        return response;
    }
}
