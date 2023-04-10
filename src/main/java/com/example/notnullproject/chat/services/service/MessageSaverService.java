package com.example.notnullproject.chat.services.service;

import com.example.notnullproject.chat.models.requestBodies.MessageReq;
import org.springframework.stereotype.Service;

@Service
public interface MessageSaverService {
    void saveMessage(MessageReq message);
}
