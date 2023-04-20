package com.example.notnullproject.models.entities;

import com.example.notnullproject.tinkoffAPI.models.stock.Currency;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String ticker;

    private String figi;

    private String name;

    private String type;

    private String currency;

    private String source;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "ticker_id")
    private List<PriceHistory> priceHistories;

    private Float currPrice;
}
