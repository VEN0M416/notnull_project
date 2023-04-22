package com.example.notnullproject.mailSender.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Mail {
    @Id
    private String mail;

    private String code;

    private LocalTime time;
}
