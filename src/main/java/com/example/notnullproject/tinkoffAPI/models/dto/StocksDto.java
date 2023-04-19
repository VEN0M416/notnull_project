package com.example.notnullproject.tinkoffAPI.models.dto;

import com.example.notnullproject.tinkoffAPI.models.stock.StockApi;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StocksDto {
    List<StockApi> stocks;
}
