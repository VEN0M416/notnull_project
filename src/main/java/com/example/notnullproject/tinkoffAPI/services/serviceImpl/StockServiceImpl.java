package com.example.notnullproject.tinkoffAPI.services.serviceImpl;

import com.example.notnullproject.tinkoffAPI.exception.StockNotFoundException;
import com.example.notnullproject.tinkoffAPI.models.dto.FigiesDto;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksPricesDto;
import com.example.notnullproject.tinkoffAPI.models.stock.Currency;
import com.example.notnullproject.tinkoffAPI.models.stock.Stock;
import com.example.notnullproject.tinkoffAPI.models.dto.StocksDto;
import com.example.notnullproject.tinkoffAPI.models.dto.TickersDto;
import com.example.notnullproject.tinkoffAPI.models.stock.StockPrice;
import com.example.notnullproject.tinkoffAPI.services.service.StockService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import ru.tinkoff.invest.openapi.OpenApi;
import ru.tinkoff.invest.openapi.model.rest.MarketInstrumentList;
import ru.tinkoff.invest.openapi.model.rest.Orderbook;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class StockServiceImpl implements StockService {

    private final OpenApi api;

    @Async
    public CompletableFuture<MarketInstrumentList> getMarketInstrumentTicker(String ticker) {
        log.info("Getting {} from Tinkoff", ticker);
        var context = api.getMarketContext();
        return context.searchMarketInstrumentsByTicker(ticker);
    }

    public Stock getStockByTicker(String ticker) {
        var cf = getMarketInstrumentTicker(ticker);
        var list = cf.join().getInstruments();
        if (list.isEmpty()) {
            throw new StockNotFoundException(String.format("Stock %S not found.", ticker));
        }
        var item = list.get(0);
        return new Stock(
                item.getTicker(),
                item.getFigi(),
                item.getName(),
                item.getType().getValue(),
                Currency.valueOf(item.getCurrency().getValue()),
                "TINKOFF");
    }

    public StocksDto getStocksByTickers(TickersDto tickers) {
        List<CompletableFuture<MarketInstrumentList>> marketInstruments = new ArrayList<>();
        tickers.getTickers().forEach(ticker -> marketInstruments.add(getMarketInstrumentTicker(ticker)));
        List<Stock> stocks =  marketInstruments.stream()
                .map(CompletableFuture::join)
                .map(mi -> {
                    if (!mi.getInstruments().isEmpty()) {
                        return mi.getInstruments().get(0);
                    }
                    return null;
                })
                .filter(Objects::nonNull)
                .map(mi -> new Stock(
                        mi.getTicker(),
                        mi.getFigi(),
                        mi.getName(),
                        mi.getType().getValue(),
                        Currency.valueOf(mi.getCurrency().getValue()),
                        "TINKOFF"))
                .collect(Collectors.toList());

        return new StocksDto(stocks);
    }

    @Async
    public CompletableFuture<Optional<Orderbook>> getOrderBookByFigi(String figi) {
        var orderBook = api.getMarketContext().getMarketOrderbook(figi, 0);
        log.info("Getting price {} from Tinkoff", figi);
        return orderBook;
    }

    public StocksPricesDto getPricesStocksByFigies(FigiesDto figiesDto) {
        long start = System.currentTimeMillis();
        List<CompletableFuture<Optional<Orderbook>>> orderBooks = new ArrayList<>();
        figiesDto.getFigies().forEach(figi -> orderBooks.add(getOrderBookByFigi(figi)));
        List<StockPrice> prices =  orderBooks.stream()
                .map(CompletableFuture::join)
                .map(oo -> oo.orElseThrow(() -> new StockNotFoundException("Stock not found.")))
                .map(orderBook -> new StockPrice(
                        orderBook.getFigi(),
                        orderBook.getLastPrice().doubleValue())).collect(Collectors.toList());

        log.info("Time getting prices - {}", System.currentTimeMillis() - start);
        return new StocksPricesDto(prices);
    }

}
