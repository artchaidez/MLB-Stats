package com.mlb_stats.baseball.hof;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HofService {

    @Autowired
    private HofRepository hofRepository;

    public void addHof(HofModel hof) {
        Optional<HofModel> checkHof = hofRepository.findById(hof.getId());

        if (checkHof.isPresent())
        {
            hof.setTotalVotes(checkHof.get().getTotalVotes() + 1);
            hofRepository.save(hof);
        } else {
            hofRepository.save(hof);
        }

    }
}
