package com.mlb_stats.baseball.pitchers;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PitcherModel {

    @Id
    public String id;
    public String name;
    public String city;
    public String team;
    public String teamAcronym;
    public boolean hitter;
    public String img;
    public int games;
    public int qualityStarts;
    public int wins;
    public int loses;
    public double inningsPitched;
    public int strikeouts;
    public double kPercentage;
    public double bbPercentage;
    public double groundBallRate;
    public double era;
    public double xEra;
    public double fip;
    public double xFip;
    public double fWAR;

    public PitcherModel() {}

    public PitcherModel(String id, String name, String city, String team, String teamAcronym, boolean hitter, String img, int games, int qualityStarts, int wins, int loses, double inningsPitched, int strikeouts, double kPercentage, double bbPercentage, double groundBallRate, double era, double xEra, double fip, double xFip, double fWAR) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.team = team;
        this.teamAcronym = teamAcronym;
        this.hitter = hitter;
        this.img = img;
        this.games = games;
        this.qualityStarts = qualityStarts;
        this.wins = wins;
        this.loses = loses;
        this.inningsPitched = inningsPitched;
        this.strikeouts = strikeouts;
        this.kPercentage = kPercentage;
        this.bbPercentage = bbPercentage;
        this.groundBallRate = groundBallRate;
        this.era = era;
        this.xEra = xEra;
        this.fip = fip;
        this.xFip = xFip;
        this.fWAR = fWAR;
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

    public String getTeamAcronym() {
        return teamAcronym;
    }

    public void setTeamAcronym(String teamAcronym) {
        this.teamAcronym = teamAcronym;
    }

    public boolean isHitter() {
        return hitter;
    }

    public void setHitter(boolean hitter) {
        this.hitter = hitter;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getGames() {
        return games;
    }

    public void setGames(int games) {
        this.games = games;
    }

    public int getQualityStarts() {
        return qualityStarts;
    }

    public void setQualityStarts(int qualityStarts) {
        this.qualityStarts = qualityStarts;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public int getLoses() {
        return loses;
    }

    public void setLoses(int loses) {
        this.loses = loses;
    }

    public double getInningsPitched() {
        return inningsPitched;
    }

    public void setInningsPitched(double inningsPitched) {
        this.inningsPitched = inningsPitched;
    }

    public int getStrikeouts() {
        return strikeouts;
    }

    public void setStrikeouts(int strikeouts) {
        this.strikeouts = strikeouts;
    }

    public double getkPercentage() {
        return kPercentage;
    }

    public void setkPercentage(double kPercentage) {
        this.kPercentage = kPercentage;
    }

    public double getBbPercentage() {
        return bbPercentage;
    }

    public void setBbPercentage(double bbPercentage) {
        this.bbPercentage = bbPercentage;
    }

    public double getGroundBallRate() {
        return groundBallRate;
    }

    public void setGroundBallRate(double groundBallRate) {
        this.groundBallRate = groundBallRate;
    }

    public double getEra() {
        return era;
    }

    public void setEra(double era) {
        this.era = era;
    }

    public double getxEra() {
        return xEra;
    }

    public void setxEra(double xEra) {
        this.xEra = xEra;
    }

    public double getFip() {
        return fip;
    }

    public void setFip(double fip) {
        this.fip = fip;
    }

    public double getxFip() {
        return xFip;
    }

    public void setxFip(double xFip) {
        this.xFip = xFip;
    }

    public double getfWAR() {
        return fWAR;
    }

    public void setfWAR(double fWAR) {
        this.fWAR = fWAR;
    }
}
