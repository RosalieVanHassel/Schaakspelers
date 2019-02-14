package com.example.Schaakspelers.server;

import com.example.Schaakspelers.model.Speler;
import com.example.Schaakspelers.repository.SpelerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SpelerServer {
    @Autowired
    private SpelerRepository spelerRepository;

    public Iterable<Speler> getAll(){
        return spelerRepository.findAll();
    }
}
