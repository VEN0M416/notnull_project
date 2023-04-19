package com.example.notnullproject.tinkoffAPI.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.tinkoff.invest.openapi.OpenApi;
import ru.tinkoff.invest.openapi.okhttp.OkHttpOpenApi;

@Configuration
public class TinkoffConfig {

    @Bean
    public OpenApi api(){
        return new OkHttpOpenApi("t.LAs04o63Y6NecQ5sH20fvwEx5H5HPGYL6Li7lyr4_6MH6wpDAl00QRf3I7o8ujyhNGLB8yjWEn7dXf8pU9C3mA", true);
    }
}
