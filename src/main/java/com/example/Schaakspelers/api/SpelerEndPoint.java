package com.example.Schaakspelers.api;

import com.example.Schaakspelers.model.Speler;
import com.example.Schaakspelers.server.SpelerServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpelerEndPoint {
    @Autowired
    private SpelerServer spelerServer;

    @GetMapping("/alleSchakers")
    public Iterable<Speler> geefAlleSpelers(){
        Iterable<Speler> spelers = spelerServer.getAll();
        return spelers;
    }

    @PostMapping("/voegSpelerToe")
    public void voegSpelerToe(@RequestBody Speler speler){
        spelerServer.saveSpeler(speler);
    }

}
