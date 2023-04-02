package com.example.notnullproject.models.requestBodies;

import lombok.Data;

@Data
public class RegistrationReq {
    private String username;

    private String password;
}
