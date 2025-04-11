package com.mlb_stats.baseball.hitter;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class HitterModel {

    @Id
    public String id;
    public String name;
    public String city;
    public String team;
    public String teamAcronym;
    public boolean hitter;
    public String img;
    public int games;
    public int plateApperances;
    public int homeRuns;
    public int rbis;
    public int stolenBases;
    public double bbPercentage;
    public double kPercentage;
    public double avg;
    public double obp;
    public double slg;
    @JsonProperty("wRC+")
    public int wRCPlus;
    public double bsr;
    public double def;
    public double fWAR;

    public HitterModel() {

    }

    public HitterModel(String id, String name, String city, String team, String teamAcronym, boolean hitter, String img, int games, int plateApperances, int homeRuns, int rbis, int stolenBases, double bbPercentage, double kPercentage, double avg, double obp, double slg, int wRCPlus, double bsr, double def, double fWAR) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.team = team;
        this.teamAcronym = teamAcronym;
        this.hitter = hitter;
        this.img = img;
        this.games = games;
        this.plateApperances = plateApperances;
        this.homeRuns = homeRuns;
        this.rbis = rbis;
        this.stolenBases = stolenBases;
        this.bbPercentage = bbPercentage;
        this.kPercentage = kPercentage;
        this.avg = avg;
        this.obp = obp;
        this.slg = slg;
        this.wRCPlus = wRCPlus;
        this.bsr = bsr;
        this.def = def;
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

    public int getPlateApperances() {
        return plateApperances;
    }

    public void setPlateApperances(int plateApperances) {
        this.plateApperances = plateApperances;
    }

    public int getHomeRuns() {
        return homeRuns;
    }

    public void setHomeRuns(int homeRuns) {
        this.homeRuns = homeRuns;
    }

    public int getRbis() {
        return rbis;
    }

    public void setRbis(int rbis) {
        this.rbis = rbis;
    }

    public int getStolenBases() {
        return stolenBases;
    }

    public void setStolenBases(int stolenBases) {
        this.stolenBases = stolenBases;
    }

    public double getBbPercentage() {
        return bbPercentage;
    }

    public void setBbPercentage(double bbPercentage) {
        this.bbPercentage = bbPercentage;
    }

    public double getkPercentage() {
        return kPercentage;
    }

    public void setkPercentage(double kPercentage) {
        this.kPercentage = kPercentage;
    }

    public double getAvg() {
        return avg;
    }

    public void setAvg(double avg) {
        this.avg = avg;
    }

    public double getObp() {
        return obp;
    }

    public void setObp(double obp) {
        this.obp = obp;
    }

    public double getSlg() {
        return slg;
    }

    public void setSlg(double slg) {
        this.slg = slg;
    }

    public int getwRCPlus() {
        return wRCPlus;
    }

    public void setwRCPlus(int wRCPlus) {
        this.wRCPlus = wRCPlus;
    }

    public double getBsr() {
        return bsr;
    }

    public void setBsr(double bsr) {
        this.bsr = bsr;
    }

    public double getDef() {
        return def;
    }

    public void setDef(double def) {
        this.def = def;
    }

    public double getfWAR() {
        return fWAR;
    }

    public void setfWAR(double fWAR) {
        this.fWAR = fWAR;
    }
}
