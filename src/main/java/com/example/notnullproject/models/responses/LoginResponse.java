package com.example.notnullproject.models.responses;

import lombok.Data;

@Data
public class LoginResponse {
    private String status;

    private String sessionId;
}
