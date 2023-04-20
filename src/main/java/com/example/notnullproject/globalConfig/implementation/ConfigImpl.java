package com.example.notnullproject.globalConfig.implementation;

import com.example.notnullproject.models.entities.Stock;
import com.example.notnullproject.repositories.StockRepo;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksDto;
import com.example.notnullproject.tinkoffAPI.models.dto.TickersDto;
import com.example.notnullproject.tinkoffAPI.models.stock.Currency;
import com.example.notnullproject.tinkoffAPI.services.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

import static com.example.notnullproject.globalConfig.implementation.ListOfTickersRepo.tickers;

@Service
public class ConfigImpl implements ConfigRepo {

    @Autowired
    private ListOfTickersRepo listOfTickersRepo;
    @Autowired
    private StockService stockService;

    @Autowired
    private StockRepo stockRepo;

    public void stocksInitFun() throws IOException {
        if (stocksInit) {
            getStock();
        }
    }

    public void getStock() throws IOException {
        listOfTickersRepo.getTicketsFromJsoup();
        StocksDto stocksDto;
        TickersDto tickersDto = new TickersDto();
        tickersDto.setTickers(tickers);
        stocksDto = stockService.getStocksByTickers(tickersDto);
        stocksDto.getStocks().forEach(o -> {
            Stock stock = new Stock();
            if (stockRepo.existsByName(o.getName())) {
                stock = stockRepo.findByName(o.getName());
            }
            stock.setTicker(o.getTicker());
            stock.setFigi(o.getFigi());
            stock.setName(o.getName());
            stock.setType(o.getType());
            stock.setCurrency(String.valueOf(Currency.valueOf(o.getCurrency().toString())));
            stock.setSource(o.getSource());
            stockRepo.save(stock);
        });
    }
}
