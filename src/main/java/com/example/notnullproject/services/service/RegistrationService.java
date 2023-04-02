package com.example.notnullproject.services.service;

import com.example.notnullproject.models.requestBodies.RegistrationReq;
import com.example.notnullproject.models.responses.RegistrationResponse;

public interface RegistrationService {
    RegistrationResponse save(RegistrationReq user);
}
