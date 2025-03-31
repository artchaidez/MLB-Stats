package com.mlb_stats.baseball;

import aj.org.objectweb.asm.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
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
    private final PlayerRepository playerRepository;

    public RunJsonDataLoader(ObjectMapper objectMapper, PlayerRepository playerRepository) {
        this.objectMapper = objectMapper;
        this.playerRepository = playerRepository;
    }

    @Override
    public void run(String... args) {
        if(playerRepository.count() == 0) {
            try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/players.json")) {
                Players players = objectMapper.readValue(inputStream, Players.class);
                log.info("Reading {} runs from JSON data and saving to database.", players.players().size());
                playerRepository.saveAll(players.players());
            } catch (IOException e) {
                throw new RuntimeException("Failed to read JSON data", e);
            }
        } else {
            log.info("Not loading Runs from JSON data because the collection contains data.");
        }
    }
}
