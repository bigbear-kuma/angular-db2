package com.example.demo.controller;

import com.example.demo.entity.Hero;
import com.example.demo.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/heroes")
@CrossOrigin(origins = "http://localhost:4200")
public class HeroController {
    @Autowired
    private HeroService heroService;

    
    @GetMapping  // "/heroes" を削除して、空にする
    public List<Hero> getHeroes(@RequestParam(required = false) String name) {
        System.out.println("Controller called with name parameter: " + name); // デバッグログ
        if (name != null && !name.trim().isEmpty()) {
            // 名前で検索
            System.out.println("Searching for heroes with name: " + name); // デバッグログ
            List<Hero> result = heroService.searchHeroesByName(name);
            System.out.println("Search result count: " + result.size()); // デバッグログ
            return heroService.searchHeroesByName(name);
        } else {
            // 全件取得
            System.out.println("Getting all heroes"); // デバッグログ
            return heroService.getAllHeroes();

        }
    }
    
    @GetMapping("/{id}")
    public Hero one(@PathVariable Long id) {
        return heroService.find(id);
    }
    

    @PostMapping
    public Hero create(@RequestBody Hero hero) {
        return heroService.create(hero);
    }

    @PutMapping("/{id}")
    public Hero update(@RequestBody Hero hero, @PathVariable Long id) {
        return heroService.update(id, hero);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        heroService.delete(id);
    }
}
