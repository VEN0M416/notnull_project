package com.example.notnullproject.services.serviceImpl;

import com.example.notnullproject.models.entities.Users;
import com.example.notnullproject.models.requestBodies.LogoutReq;
import com.example.notnullproject.models.responses.LogoutResponse;
import com.example.notnullproject.repositories.UsersRepo;
import com.example.notnullproject.services.service.LogoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogoutImpl implements LogoutService {

    @Autowired
    private UsersRepo usersRepo;

    @Override
    public LogoutResponse quit(LogoutReq sessionId) {
        LogoutResponse response = new LogoutResponse();
        Users user = usersRepo.findBySession(sessionId.getSessionId());
        user.setSession(null);
        usersRepo.save(user);
        response.setStatus("done");
        return response;
    }
}
