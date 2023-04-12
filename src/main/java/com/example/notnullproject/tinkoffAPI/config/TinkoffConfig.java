package com.example.notnullproject.tinkoffAPI.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.tinkoff.invest.openapi.OpenApi;
import ru.tinkoff.invest.openapi.okhttp.OkHttpOpenApi;

@Configuration
public class TinkoffConfig {

    @Bean
    public OpenApi api(){
        return new OkHttpOpenApi("t.WgfV6YNcn6ZLBsG8i2ctQVtAwudg9FrGJ5OXm91X9nW7E2H6UTeyDh-cdKCr1Kjx9vlzzgVZfEY5mj6fQZwsbQ", true);
    }
}
