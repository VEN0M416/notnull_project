package com.example.notnullproject.tinkoffAPI.models.stock;

import lombok.AllArgsConstructor;
import lombok.Value;

@AllArgsConstructor
@Value
public class StockPrice {
    String figi;
    Double price;
}
