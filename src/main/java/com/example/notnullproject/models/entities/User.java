package com.example.notnullproject.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NonNull
    @Column(unique = true)
    private String username;

    @NonNull
    private String password;

    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true)
    private Session session;

    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "username")
    @ToString.Exclude
    private List<PastMessage> pastMessage;


}
