package com.example.notnullproject.globalConfig.implementation;

import com.example.notnullproject.globalConfig.GlobalConfig;

import java.io.IOException;

public interface ConfigRepo
        extends GlobalConfig {
    void stocksInitFun() throws IOException;
    void getStock() throws IOException;
}
