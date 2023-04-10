package com.example.notnullproject.chat.models.requestBodies;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MessageReq {

    private String username;
    private String message;
    private String date;
}
