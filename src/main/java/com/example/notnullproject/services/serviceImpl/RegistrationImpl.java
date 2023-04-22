package com.example.notnullproject.services.serviceImpl;

import com.example.notnullproject.mailSender.mailRepo.MailRepo;
import com.example.notnullproject.mailSender.mailService.EmailService;
import com.example.notnullproject.mailSender.models.Mail;
import com.example.notnullproject.models.entities.User;
import com.example.notnullproject.models.requestBodies.RegistrationReq;
import com.example.notnullproject.models.responses.RegistrationResponse;
import com.example.notnullproject.passwordEncoder.PasswordEncoder;
import com.example.notnullproject.repositories.UsersRepo;
import com.example.notnullproject.services.service.RegistrationService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;


@Service
public class RegistrationImpl implements RegistrationService{

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private MailRepo mailRepo;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public RegistrationResponse createRegistrationCode(RegistrationReq user) {
        RegistrationResponse response = new RegistrationResponse();
        if(usersRepo.existsByUsername(user.getUsername())){
            response.setStatus("user already exists");
        }else if (usersRepo.existsByMail(user.getMail())){
            response.setStatus("mail already exists");
        }else{
            String code = Integer.toString(100000 + (int) (Math.random() * 899999));
            Mail mail = new Mail();
            mail.setMail(user.getMail());
            mail.setCode(code);
            LocalTime time = LocalTime.now().plusMinutes(5).withNano(0).withSecond(0);
            mail.setTime(time);
            mailRepo.save(mail);
            response.setStatus("done");
        }
        return response;
    }

    @Override
    public void sendCode(String mail){
        String code = mailRepo.findByMail(mail).getCode();
        emailService.sendSimpleMessage(mail, "Регистрация на сайте NotNullCompany", "Ваш код подтверждения: " + code);
    }

    @Override
    @Transactional
    public RegistrationResponse mailConfirmation(RegistrationReq user) {
        RegistrationResponse response = new RegistrationResponse("denied");
        if(mailRepo.findByMail(user.getMail())
                .getCode()
                .equals(user.getCode())){
            User globalUser = new User();
            globalUser.setPassword(passwordEncoder.encode(user.getPassword()));
            globalUser.setUsername(user.getUsername());
            globalUser.setMail(user.getMail());
            usersRepo.save(globalUser);
            mailRepo.deleteById(user.getMail());
            response.setStatus("done");
        }
        return response;
    }
}
