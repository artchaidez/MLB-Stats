package com.mlb_stats.baseball.hof;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class HofModel {

    @Id
    public String id;

    public String name;

    public int totalVotes;

    public HofModel() {}

    public HofModel(String id, String name, int totalVotes) {
        this.id = id;
        this.name = name;
        this.totalVotes = totalVotes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTotalVotes() {
        return totalVotes;
    }

    public void setTotalVotes(int totalVotes) {
        this.totalVotes = totalVotes;
    }
}
