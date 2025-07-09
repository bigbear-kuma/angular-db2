package com.example.demo.service;

import com.example.demo.entity.Hero;
import java.util.List;

public interface HeroService {
    List<Hero> findAll();
    Hero find(Long id);
    Hero create(Hero hero);
    Hero update(Long id, Hero hero);
    void delete(Long id);

    List<Hero> getAllHeroes();
    List<Hero> searchHeroesByName(String name);

}
