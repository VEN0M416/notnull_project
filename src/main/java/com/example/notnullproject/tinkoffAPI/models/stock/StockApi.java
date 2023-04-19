package com.example.notnullproject.tinkoffAPI.models.stock;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor
public class StockApi {
    String ticker;
    String figi;
    String name;
    String type;
    Currency currency;
    String source;
}
