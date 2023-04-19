package com.example.notnullproject.tinkoffAPI.services.service;

import com.example.notnullproject.tinkoffAPI.models.dto.FigiesDto;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksPricesDto;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksDto;
import com.example.notnullproject.tinkoffAPI.models.dto.TickersDto;
import com.example.notnullproject.tinkoffAPI.models.stock.StockApi;

public interface StockService {
    StockApi getStockByTicker(String ticker);

    StocksPricesDto getPricesStocksByFigies(FigiesDto figiesDto);

    StocksDto getStocksByTickers(TickersDto tickers);
}
