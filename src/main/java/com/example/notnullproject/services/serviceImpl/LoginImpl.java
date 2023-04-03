package com.example.notnullproject.services.serviceImpl;

import com.example.notnullproject.models.entities.Sessions;
import com.example.notnullproject.models.entities.Users;
import com.example.notnullproject.models.requestBodies.LoginReq;
import com.example.notnullproject.models.responses.LoginResponse;
import com.example.notnullproject.passwordEncoder.PasswordEncoder;
import com.example.notnullproject.repositories.SessionsRepo;
import com.example.notnullproject.repositories.UsersRepo;
import com.example.notnullproject.services.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
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
        Sessions session = new Sessions();
        if(!usersRepo.existsByUsername(user.getUsername())){
            response.setStatus("user does not exists");
        }else if(!passwordEncoder.matches(
                user.getPassword(),
                usersRepo.findByUsername(
                        user.getUsername())
                        .getPassword())){
            response.setStatus("wrong password");
        } else if(!sessionsRepo.existsByUsername(user.getUsername())){
            session.setUsername(user.getUsername());
            sessionsRepo.save(session);
            Users userForSave = usersRepo.findByUsername(user.getUsername());
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
