package com.mlb_stats.baseball;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping("/player")
    public String getPlayer() {
        return "Shohei Ohtani";
    }

    @GetMapping("/players")
    public List<PlayerModel> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/players/{id}")
    public PlayerModel getPlayer(@PathVariable String id) {
        return playerService.getPlayer(id);
    }

    @PostMapping("/players")
    public void addPlayer(@RequestBody PlayerModel player) {
        playerService.addPlayer(player);
    }

    @PutMapping("/players/{id}")
    public void updatePlayer(@RequestBody PlayerModel player, @PathVariable String id) {
        playerService.updatePlayer(id, player);
    }

    @DeleteMapping("/players/{id}")
    public void deletePlayer(@PathVariable String id) {
        playerService.deletePlayer(id);
    }
}
