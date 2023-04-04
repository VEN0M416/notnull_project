package com.example.notnullproject.services.service;

import com.example.notnullproject.models.requestBodies.LogoutReq;
import com.example.notnullproject.models.responses.LogoutResponse;

public interface LogoutService {
    LogoutResponse quit(LogoutReq sessionId);
}
