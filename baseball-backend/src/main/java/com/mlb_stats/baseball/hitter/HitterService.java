package com.mlb_stats.baseball.hitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HitterService {

    @Autowired
    private HitterRepository hitterRepository;

    public List<HitterModel> getAllHitters() {
        List<HitterModel> hitters = new ArrayList<>();
        hitterRepository.findAll().forEach(hitters::add);
        return hitters;
    }

    public HitterModel getHitter(String id) {
        return hitterRepository.findById(id).get();
    }

    public void addHitter(HitterModel hitter) { hitterRepository.save(hitter);}
}
