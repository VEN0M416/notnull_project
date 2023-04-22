package com.example.notnullproject.mailSender.mailService;

public interface EmailService {
    void sendSimpleMessage(String to, String subject, String text);
}
