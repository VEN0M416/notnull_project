package com.example.notnullproject.stockMonitoring.schedule;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ListOfTickers {
    protected List<String> tickers = new ArrayList<>(List.of("SBER"));
    private final List<String> urls = new ArrayList<>(List.of(
            "https://smart-lab.ru/q/shares/order_by_sec_id/asc/"
            //"https://smart-lab.ru/q/spbex/",
            //"https://smart-lab.ru/q/usa/",
            //"https://smart-lab.ru/q/world-stocks/"
    ));

    protected void getTicketsFromJsoup() throws IOException {
        for (String url : urls) {
            Document doc = Jsoup.connect(url).userAgent("Chrome/4.0.249.0 Safari/532.5").get();
            Elements table = doc.select("table.simple-little-table.trades-table > tbody > tr");
            for (int i = 1; i < table.size(); i++) {
                Element row = table.get(i);
                Elements cols = row.select("td");
                if (cols.size() < 2) {
                    continue;
                }
                tickers.add(cols.get(3).text());
            }
        }
    }
}
