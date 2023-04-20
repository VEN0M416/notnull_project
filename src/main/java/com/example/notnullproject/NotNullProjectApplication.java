package com.example.notnullproject;

import com.example.notnullproject.globalConfig.implementation.ConfigImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NotNullProjectApplication{

	public static void main(String[] args){
		SpringApplication.run(NotNullProjectApplication.class, args);

	}

	@Bean(initMethod="stocksInitFun")
	public ConfigImpl stocksInit() {
		return new ConfigImpl();
	}

}
