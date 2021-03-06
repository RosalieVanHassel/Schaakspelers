package com.example.Schaakspelers.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Speler {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String voornaam;
    private String achternaam;
    private String tussenvoegsel;
    private LocalDate geboortedatum;
    private int gewonnenPartijen;
    private int remises;
    private int verlorenPartijen;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getVoornaam() {
        return voornaam;
    }

    public void setVoornaam(String voornaam) {
        this.voornaam = voornaam;
    }

    public String getAchternaam() {
        return achternaam;
    }

    public void setAchternaam(String achternaam) {
        this.achternaam = achternaam;
    }

    public String getTussenvoegsel() {
        return tussenvoegsel;
    }

    public void setTussenvoegsel(String tussenvoegsel) {
        this.tussenvoegsel = tussenvoegsel;
    }

    public LocalDate getGeboortedatum() {
        return geboortedatum;
    }

    public void setGeboortedatum(LocalDate geboortedatum) {
        this.geboortedatum = geboortedatum;
    }

    public int getGewonnenPartijen() {
        return gewonnenPartijen;
    }

    public void setGewonnenPartijen(int gewonnenPartijen) {
        this.gewonnenPartijen = gewonnenPartijen;
    }

    public int getRemises() {
        return remises;
    }

    public void setRemises(int remises) {
        this.remises = remises;
    }

    public int getVerlorenPartijen() {
        return verlorenPartijen;
    }

    public void setVerlorenPartijen(int verlorenPartijen) {
        this.verlorenPartijen = verlorenPartijen;
    }
}
