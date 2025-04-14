CREATE TABLE IF NOT EXISTS Player_Model (
   id varchar(250) NOT NULL,
   name varchar(250) NOT NULL,
   city varchar(250) NOT NULL,
   team varchar(250) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Hitter_Model (
   id varchar(250) NOT NULL,
   name varchar(250) NOT NULL,
   city varchar(250) NOT NULL,
   team varchar(250) NOT NULL,
   teamAcronym varchar(250) NOT NULL,
   hitter bool,
   img varchar(250) NOT NULL,
   games int NOT NULL,
   plateApperances int NOT NULL,
   homeRuns int NOT NULL,
   rbis int NOT NULL,
   stolenBases int NOT NULL,
   bbPercentage float(2) NOT NULL,
   kPercentage float(2) NOT NULL,
   avg float(3) NOT NULL,
   obp float(3) NOT NULL,
   slg float(3) NOT NULL,
   wRCPlus int NOT NULL,
   bsr float(1) NOT NULL,
   def float(1) NOT NULL,
   fWAR float(1) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Pitcher_Model (
   id varchar(250) NOT NULL,
   name varchar(250) NOT NULL,
   city varchar(250) NOT NULL,
   team varchar(250) NOT NULL,
   teamAcronym varchar(250) NOT NULL,
   hitter bool,
   img varchar(250) NOT NULL,
   games int NOT NULL,
   qualityStarts int NOT NULL,
   wins int NOT NULL,
   loses int NOT NULL,
   inningsPitched float(1) NOT NULL,
   strikeouts int NOT NULL,
   kPercentage float(1) NOT NULL,
   bbPercentage float(1) NOT NULL,
   groundBallRate float(1) NOT NULL,
   era float(2) NOT NULL,
   xEra float(2) NOT NULL,
   fip float(2) NOT NULL,
   xFip float(2) NOT NULL,
   fWAR float(1) NOT NULL,
   PRIMARY KEY (id)
);