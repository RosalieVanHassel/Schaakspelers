package com.example.Schaakspelers.repository;

import com.example.Schaakspelers.model.Speler;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface SpelerRepository extends CrudRepository<Speler,Long> {
}
