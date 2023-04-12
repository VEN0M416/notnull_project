package com.example.notnullproject.tinkoffAPI.models.dto;

import com.example.notnullproject.tinkoffAPI.models.stock.StockPrice;
import lombok.AllArgsConstructor;
import lombok.Value;

import java.util.List;

@AllArgsConstructor
@Value
public class StocksPricesDto {
    List<StockPrice> prices;
}
