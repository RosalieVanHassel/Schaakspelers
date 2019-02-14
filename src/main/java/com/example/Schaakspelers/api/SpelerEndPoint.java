package com.example.Schaakspelers.api;

import com.example.Schaakspelers.model.Speler;
import com.example.Schaakspelers.server.SpelerServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @DeleteMapping("/spelerdelete/{idOfDelete}")
    public void deleteSpeler(@PathVariable Long idOfDelete ){
        System.out.println("ik ben bij delete");
        spelerServer.removeSpeler(idOfDelete);
    }
    @PutMapping("/speleraanpassen/win/{idForChange}")
    public void putSchipWin(@PathVariable Long idForChange){
        Optional<Speler> speler = spelerServer.findElementById(idForChange);
        speler.get().setGewonnenPartijen(speler.get().getGewonnenPartijen()+1);
        spelerServer.saveSpeler(speler.get());
    }
    @PutMapping("/speleraanpassen/verlies/{idForChange}")
    public void putSchipVerlies(@PathVariable Long idForChange){
        Optional<Speler> speler = spelerServer.findElementById(idForChange);
        speler.get().setVerlorenPartijen(speler.get().getVerlorenPartijen()+1);
        spelerServer.saveSpeler(speler.get());
    }
    @PutMapping("/speleraanpassen/gelijk/{idForChange}")
    public void putSchipGelijk(@PathVariable Long idForChange){
        Optional<Speler> speler = spelerServer.findElementById(idForChange);
        speler.get().setRemises(speler.get().getRemises()+1);
        spelerServer.saveSpeler(speler.get());
    }

}
