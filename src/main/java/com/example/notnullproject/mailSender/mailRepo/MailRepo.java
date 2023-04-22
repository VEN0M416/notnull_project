package com.example.notnullproject.mailSender.mailRepo;

import com.example.notnullproject.mailSender.models.Mail;
import org.springframework.data.repository.CrudRepository;

public interface MailRepo extends CrudRepository<Mail, String> {
    Mail findByMail(String mail);
}
