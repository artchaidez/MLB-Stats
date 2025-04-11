package com.mlb_stats.baseball.hitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HitterController {

    @Autowired
    private HitterService hitterService;

    @GetMapping("/hitters")
    public List<HitterModel> getAllHitters() {return hitterService.getAllHitters(); }

    @GetMapping("/hitters/{id}")
    public HitterModel getHitter(@PathVariable String id) { return hitterService.getHitter(id);}

    @PostMapping("/hitters")
    public void addPlayer(@RequestBody HitterModel hitter) {hitterService.addHitter(hitter);}
}
