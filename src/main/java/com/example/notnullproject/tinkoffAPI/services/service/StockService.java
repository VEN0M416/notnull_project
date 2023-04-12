package com.example.notnullproject.tinkoffAPI.services.service;

import com.example.notnullproject.tinkoffAPI.models.dto.FigiesDto;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksPricesDto;
import com.example.notnullproject.tinkoffAPI.models.stock.Stock;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksDto;
import com.example.notnullproject.tinkoffAPI.models.dto.TickersDto;

public interface StockService {
    Stock getStockByTicker(String ticker);

    StocksPricesDto getPricesStocksByFigies(FigiesDto figiesDto);

    StocksDto getStocksByTickers(TickersDto tickers);
}
