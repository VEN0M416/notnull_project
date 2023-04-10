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
@ToString
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

    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "username")
    @Fetch(value = FetchMode.SUBSELECT)
    @ToString.Exclude
    private List<PastMessage> pastMessage = new ArrayList<>();


}
