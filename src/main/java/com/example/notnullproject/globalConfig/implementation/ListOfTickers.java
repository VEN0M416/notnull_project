package com.example.notnullproject.globalConfig.implementation;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ListOfTickers implements ListOfTickersRepo {

    public void getTicketsFromJsoup() throws IOException {
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
