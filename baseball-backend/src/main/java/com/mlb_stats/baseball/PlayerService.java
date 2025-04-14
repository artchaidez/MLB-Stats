package com.mlb_stats.baseball;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    public List<PlayerModel> getAllPlayers() {
        List<PlayerModel> players = new ArrayList<>();
        playerRepository.findAll().forEach(players::add);
        return players;
    }

    public PlayerModel getPlayer(String id) {
        return playerRepository.findById(id).get();
    }

    public void addPlayer(PlayerModel player) {
        playerRepository.save(player);
    }


    public void updatePlayer(String id, PlayerModel player) {
        playerRepository.save(player);
    }

    public void deletePlayer(String id) {
        playerRepository.deleteById(id);
    }
}
