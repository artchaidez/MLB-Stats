package com.mlb_stats.baseball;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

//    private List<PlayerModel> players = new ArrayList<>(Arrays.asList(
//            new PlayerModel("Aaron-Judge", "New York", "Yankees"),
//            new PlayerModel("Bobby-Witt-Jr", "Kansas City", "Royals"),
//            new PlayerModel("Shohei-Ohtani", "Los Angeles", "Dodgers")
//    ));

    public List<PlayerModel> getAllPlayers() {
        List<PlayerModel> players = new ArrayList<>();
        playerRepository.findAll().forEach(players::add);
        return players;
    }

    public PlayerModel getPlayer(String id) {
        //return players.stream().filter(p -> p.getId().equals(id)).findFirst().get();
        return playerRepository.findById(id).get();
    }

    public void addPlayer(PlayerModel player) {
        playerRepository.save(player);
    }


    public void updatePlayer(String id, PlayerModel player) {
//        for(int i = 0; i < players.size(); i++) {
//            PlayerModel p = players.get(i);
//            if (p.getId().equals(id)) {
//                players.set(i, player);
//                return;
//            }
//        }
        playerRepository.save(player);
    }

    public void deletePlayer(String id) {
//        players.removeIf(p -> p.getId().equals(id));
        playerRepository.deleteById(id);
    }
}
