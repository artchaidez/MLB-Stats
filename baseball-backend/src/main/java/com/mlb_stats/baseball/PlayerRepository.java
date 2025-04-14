package com.mlb_stats.baseball;

import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<PlayerModel, String> {
}
