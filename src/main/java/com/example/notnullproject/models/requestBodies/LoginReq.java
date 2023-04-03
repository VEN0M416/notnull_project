package com.example.notnullproject.models.requestBodies;

import lombok.Data;

@Data
public class LoginReq {
    private String username;

    private String password;
}
