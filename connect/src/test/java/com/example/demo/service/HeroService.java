package com.example.demo.service;

import com.example.demo.model.Hero;
import com.example.demo.repository.HeroRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class HeroService {
    private final HeroRepository repo;
    public HeroService(HeroRepository repo){ this.repo = repo; }

    @Transactional(readOnly = true)
    public List<Hero> findAll() { return repo.findAll(); }

    @Transactional(readOnly = true)
    public Hero find(Long id) { return repo.findById(id).orElseThrow(); }

    @Transactional
    public Hero create(Hero h) { return repo.save(h); }

    @Transactional
    public Hero update(Hero h) { return repo.save(h); }

    @Transactional
    public void delete(Long id) { repo.deleteById(id); }
}

