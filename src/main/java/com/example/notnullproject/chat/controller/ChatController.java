package com.example.notnullproject.chat.controller;

import com.example.notnullproject.chat.models.Message;
import com.example.notnullproject.chat.services.service.MessageSaverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Controller
public class ChatController {

    @Autowired
    private MessageSaverService messageSaverService;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    private Message receivePublicMessage(@Payload Message message){
        messageSaverService.saveMessage(message);
        return message;
    }
}
