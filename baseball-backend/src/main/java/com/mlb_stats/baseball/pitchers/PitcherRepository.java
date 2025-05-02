package com.mlb_stats.baseball.pitchers;

import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PitcherRepository extends CrudRepository<PitcherModel, String> {

    @NativeQuery(value = "SELECT * FROM PITCHER_MODEL ORDER BY fwar desc FETCH FIRST 5 ROWS ONLY;")
    List<PitcherModel> findTop5PitchersByfWar();
}
