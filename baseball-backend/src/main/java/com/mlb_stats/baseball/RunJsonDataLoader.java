package com.mlb_stats.baseball;

import aj.org.objectweb.asm.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mlb_stats.baseball.hitter.HitterRepository;
import com.mlb_stats.baseball.hitter.Hitters;
import com.mlb_stats.baseball.pitchers.PitcherRepository;
import com.mlb_stats.baseball.pitchers.Pitchers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;

@Component
public class RunJsonDataLoader implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final ObjectMapper objectMapper;
    private final HitterRepository hitterRepository;
    private final PitcherRepository pitcherRepository;

    public RunJsonDataLoader(ObjectMapper objectMapper, HitterRepository hitterRepository, PitcherRepository pitcherRepository) {
        this.objectMapper = objectMapper;
        this.hitterRepository = hitterRepository;
        this.pitcherRepository = pitcherRepository;
    }

    @Override
    public void run(String... args) {

        if(hitterRepository.count() == 0) {
            try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/hitters.json")) {
                Hitters hitters = objectMapper.readValue(inputStream, Hitters.class);
                log.info("Reading {} hitters from JSON data and saving to database.", hitters.hitters().size());
                hitterRepository.saveAll(hitters.hitters());
            } catch (IOException e) {
                throw new RuntimeException("Failed to read Hitters JSON data", e);
            }
        } else {
            log.info("Not loading Hitters from JSON data because the collection contains data.");
        }

        if(pitcherRepository.count() == 0) {
            try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/pitchers.json")) {
                Pitchers pitchers = objectMapper.readValue(inputStream, Pitchers.class);
                log.info("Reading {} pitchers from JSON data and saving to database.", pitchers.pitchers().size());
                pitcherRepository.saveAll(pitchers.pitchers());
            } catch (IOException e) {
                throw new RuntimeException("Failed to read Pitchers JSON data", e);
            }
        } else {
            log.info("Not loading Pitchers from JSON data because the collection contains data.");
        }
    }
}
