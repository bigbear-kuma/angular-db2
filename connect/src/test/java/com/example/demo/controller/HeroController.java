package com.example.demo.controller;

import com.example.demo.model.Hero;
import com.example.demo.service.HeroService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;    // RestController, RequestMapping, GetMapping など
import java.util.List;                            // List を使うため

@RestController
@RequestMapping("/api/heroes")
@CrossOrigin(origins = "http://localhost:4200")  // Angular 開発サーバーを許可
public class HeroController {
  @Autowired private HeroService service;

  @GetMapping
  public List<Hero> all() { return service.findAll(); }

  @GetMapping("/{id}")
  public Hero one(@PathVariable Long id) { return service.find(id); }

  @PostMapping
  public Hero create(@RequestBody Hero hero) { return service.create(hero); }

  @PutMapping("/{id}")
  public Hero update(@RequestBody Hero hero, @PathVariable Long id) {
    hero.setId(id);
    return service.update(hero);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id) { service.delete(id); }
}