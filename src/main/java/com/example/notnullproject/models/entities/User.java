package com.example.notnullproject.models.entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NonNull
    private String username;

    @NonNull
    private String password;

    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true)
    private Session session;

    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "username_id")
    private List<PastMessage> pastMessage = new ArrayList<>();


}
