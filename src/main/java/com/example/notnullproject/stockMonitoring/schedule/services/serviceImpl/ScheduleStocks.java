package com.example.notnullproject.stockMonitoring.schedule.services.serviceImpl;


import com.example.notnullproject.models.entities.Stock;
import com.example.notnullproject.repositories.StockRepo;
import com.example.notnullproject.stockMonitoring.schedule.ListOfTickers;
import com.example.notnullproject.stockMonitoring.schedule.services.service.ScheduleStocksRepo;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksDto;
import com.example.notnullproject.tinkoffAPI.models.dto.TickersDto;
import com.example.notnullproject.tinkoffAPI.models.stock.Currency;
import com.example.notnullproject.tinkoffAPI.services.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.io.IOException;

@Configuration
@EnableScheduling
public class ScheduleStocks
        extends ListOfTickers
        implements ScheduleStocksRepo {

    @Autowired
    private StockService stockService;

    @Autowired
    private StockRepo stockRepo;

    @Scheduled(fixedDelay = 3600000)
    public void getStock() throws IOException {
        //getTicketsFromJsoup();
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
