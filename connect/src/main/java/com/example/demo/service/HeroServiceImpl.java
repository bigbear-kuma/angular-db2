package com.example.demo.service;

import com.example.demo.entity.Hero;
import com.example.demo.repository.HeroRepository;
import com.example.demo.mapper.HeroMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HeroServiceImpl implements HeroService {
    @Autowired
    private HeroRepository heroRepository;

    @Autowired
    private HeroMapper heroMapper; // HeroMapperを追加

    @Override
    public List<Hero> findAll() {
        return heroRepository.findAll();
    }

    @Override
    public List<Hero> getAllHeroes() {
        return heroMapper.findAll();
    }

    @Override
    public List<Hero> searchHeroesByName(String name) { // 不足していたメソッドを追加
        return heroMapper.findByNameContaining(name);
    }

    @Override
    public Hero find(Long id) {
        Optional<Hero> hero = heroRepository.findById(id);
        return hero.orElse(null);
    }

    @Override
    public Hero create(Hero hero) {
        return heroRepository.save(hero);
    }

    @Override
    public Hero update(Long id, Hero hero) {
        hero.setId(id);
        return heroRepository.save(hero);
    }

    @Override
    public void delete(Long id) {
        heroRepository.deleteById(id);
    }
}
