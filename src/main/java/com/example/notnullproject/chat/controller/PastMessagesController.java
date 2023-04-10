package com.example.notnullproject.chat.controller;

import com.example.notnullproject.models.entities.PastMessage;
import com.example.notnullproject.repositories.PastMessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PastMessagesController {

    @Autowired
    private PastMessageRepo pastMessageRepo;

    @GetMapping("/pastMessages/load")
    private List<PastMessage> load(){
        return pastMessageRepo.findAll();
    }

}
