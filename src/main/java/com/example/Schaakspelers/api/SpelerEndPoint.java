package com.example.Schaakspelers.api;

import com.example.Schaakspelers.server.SpelerServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpelerEndPoint {
    @Autowired
    private SpelerServer spelerServer;
}
