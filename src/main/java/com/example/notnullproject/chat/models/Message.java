package com.example.notnullproject.chat.models;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Message {

    private String username;
    private String message;
    private String date;
}
