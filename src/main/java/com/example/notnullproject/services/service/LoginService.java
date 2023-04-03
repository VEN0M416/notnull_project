package com.example.notnullproject.services.service;

import com.example.notnullproject.models.requestBodies.LoginReq;
import com.example.notnullproject.models.responses.LoginResponse;

public interface LoginService {
    LoginResponse send(LoginReq user);
}
