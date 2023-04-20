package com.example.notnullproject.stockMonitoring.schedule.services.serviceImpl;


import com.example.notnullproject.repositories.StockRepo;
import com.example.notnullproject.tinkoffAPI.services.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling
public class ScheduleStocks{

    @Autowired
    private StockService stockService;

    @Autowired
    private StockRepo stockRepo;

}
