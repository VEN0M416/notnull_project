package com.example.notnullproject.chat.services.serviceImpl;

import com.example.notnullproject.chat.models.requestBodies.MessageReq;
import com.example.notnullproject.chat.services.service.MessageSaverService;
import com.example.notnullproject.models.entities.PastMessage;
import com.example.notnullproject.models.entities.User;
import com.example.notnullproject.repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageSaverImpl implements MessageSaverService {

    @Autowired
    private UsersRepo usersRepo;

    @Override
    public void saveMessage(MessageReq message) {
        User user = usersRepo.findByUsername(message.getUsername());
        List<PastMessage> list = user.getPastMessage();
        PastMessage pastMessage = new PastMessage();
        pastMessage.setMessage(message.getMessage());
        pastMessage.setUsername(message.getUsername());
        pastMessage.setDate(message.getDate());
        list.add(pastMessage);
        user.setPastMessage(list);
        usersRepo.save(user);
    }
}
