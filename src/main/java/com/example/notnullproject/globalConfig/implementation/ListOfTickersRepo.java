package com.example.notnullproject.globalConfig.implementation;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public interface ListOfTickersRepo {

    List<String> tickers = new ArrayList<>();

    List<String> urls = new ArrayList<>(List.of(
            "https://smart-lab.ru/q/shares/order_by_sec_id/asc/"
            //"https://smart-lab.ru/q/spbex/",
            //"https://smart-lab.ru/q/world-stocks/"
    ));

    void getTicketsFromJsoup() throws IOException;
}
