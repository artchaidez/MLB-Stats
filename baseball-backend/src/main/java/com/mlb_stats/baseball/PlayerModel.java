package com.mlb_stats.baseball;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PlayerModel {

    @Id
    public String id;
    public String name;
    public String city;
    public String team;

    public PlayerModel() {

    }

    public PlayerModel(String id, String city, String team) {
        this.id = id;
        this.name = id.replace("-", " ");
        this.city = city;
        this.team = team;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }
}
