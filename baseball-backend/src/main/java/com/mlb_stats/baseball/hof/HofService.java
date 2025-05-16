package com.mlb_stats.baseball.hof;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HofService {

    @Autowired
    private HofRepository hofRepository;

    public void addHof(HofModel hof) {hofRepository.save(hof);}
}
