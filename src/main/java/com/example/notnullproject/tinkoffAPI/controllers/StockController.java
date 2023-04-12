package com.example.notnullproject.tinkoffAPI.controllers;

import com.example.notnullproject.tinkoffAPI.models.dto.FigiesDto;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksDto;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksPricesDto;
import com.example.notnullproject.tinkoffAPI.models.dto.TickersDto;
import com.example.notnullproject.tinkoffAPI.models.stock.Stock;
import com.example.notnullproject.tinkoffAPI.services.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping("/stocks/{ticker}")
    public Stock getStock(@PathVariable String ticker){
        return stockService.getStockByTicker(ticker);
    }

    @PostMapping("/prices")
    public StocksPricesDto getPricesStocksByFigies(@RequestBody FigiesDto figiesDto) {
        return stockService.getPricesStocksByFigies(figiesDto);
    }

    @PostMapping("/stocks/getStocksByTickers")
    public StocksDto getStocksByTickers(@RequestBody TickersDto tickers) {
        return stockService.getStocksByTickers(tickers);
    }
}
