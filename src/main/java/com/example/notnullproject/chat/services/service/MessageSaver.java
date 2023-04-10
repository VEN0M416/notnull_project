package com.example.notnullproject.chat.services.service;

import com.example.notnullproject.chat.models.Message;
import org.springframework.stereotype.Service;

@Service
public interface MessageSaver {
    void saveMessage(Message message);
}
