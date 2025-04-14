package com.mlb_stats.baseball.pitchers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PitcherService {

    @Autowired
    private PitcherRepository pitcherRepository;

    public List<PitcherModel> getAllPitchers() {
        List<PitcherModel> pitchers = new ArrayList<>();
        pitcherRepository.findAll().forEach(pitchers::add);
        return pitchers;
    }

    public PitcherModel getPitcher(String id) {
        return pitcherRepository.findById(id).get();
    }

    public void addPitcher(PitcherModel pitcher) {
        pitcherRepository.save(pitcher);
    }
}
