package com.mlb_stats.baseball.pitchers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class PitcherController {

    @Autowired
    private PitcherService pitcherService;

    @GetMapping("/pitchers")
    public List<PitcherModel> getAllPitchers() {return pitcherService.getAllPitchers(); }

    @GetMapping("/topFivePitchers")
    public List<PitcherModel> getTopFivePitchersByfWar() {return pitcherService.getTopFivePitchersByfWar();}

    @GetMapping("/pitchers/{id}")
    public PitcherModel getPitcher(@PathVariable String id) { return pitcherService.getPitcher(id);}

    @PostMapping("/pitchers")
    public void addPitcher(@RequestBody PitcherModel pitcher) {pitcherService.addPitcher(pitcher);}
}
