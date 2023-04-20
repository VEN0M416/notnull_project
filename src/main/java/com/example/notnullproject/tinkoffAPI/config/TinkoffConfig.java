package com.example.notnullproject.tinkoffAPI.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.tinkoff.invest.openapi.OpenApi;
import ru.tinkoff.invest.openapi.okhttp.OkHttpOpenApi;

@Configuration
public class TinkoffConfig {

    @Bean
    public OpenApi api(){
        return new OkHttpOpenApi("t.VfbpdvX6EyPQE4tSQ0VyhBcj5l_dm0Xe9OsVf5ikRQMrWSQkgUe2JpgN7Nn_sdLAIuuAbm9Xh1h6qfehKdArCg", true);
    }
}
