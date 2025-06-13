import "./leaders.css";
import { useState, useEffect } from "react";
import LeaderTable from "./LeaderTable";

const Leaders = () => {
  const [active, setActive] = useState(0);
  const [pitchers, setPitchers] = useState([]);
  const [hitters, setHitters] = useState([]);

  const handleActiveTab = (value) => {
    setActive(value);
  };

  let batterHeader = [
    { id: 1, KEY: "#", LABEL: "#" },
    { id: 2, KEY: "name", LABEL: "Name" },
    { id: 3, KEY: "teamAcronym", LABEL: "Team" },
    { id: 4, KEY: "avg", LABEL: "AVG" },
    { id: 5, KEY: "obp", LABEL: "OBP" },
    { id: 6, KEY: "slg", LABEL: "SLG" },
    { id: 7, KEY: "wRC+", LABEL: "wRC+" },
    { id: 8, KEY: "bsr", LABEL: "BsR" },
    { id: 9, KEY: "def", LABEL: "Def" },
    { id: 10, KEY: "fWAR", LABEL: "fWAR" },
  ];

  let pitcherHeader = [
    { id: 1, KEY: "#", LABEL: "#" },
    { id: 2, KEY: "name", LABEL: "Name" },
    { id: 3, KEY: "teamAcronym", LABEL: "Team" },
    { id: 4, KEY: "inningsPitched", LABEL: "IP" },
    { id: 5, KEY: "kPercentage", LABEL: "K%" },
    { id: 6, KEY: "bbPercentage", LABEL: "BB%" },
    { id: 7, KEY: "groundBallRate", LABEL: "GB%" },
    { id: 8, KEY: "era", LABEL: "ERA" },
    { id: 9, KEY: "fip", LABEL: "FIP" },
    { id: 10, KEY: "fWAR", LABEL: "fWAR" },
  ];

  const pitchersUrl = "http://localhost:8081/topFivePitchers";
  const hittersUrl = "http://localhost:8081/hitters";

  useEffect(() => {
    const fetchData = async () => {
      const pitchers = await fetch(pitchersUrl);
      const pitchersJson = await pitchers.json();
      setPitchers(pitchersJson);

      const hitters = await fetch(hittersUrl);
      const hittersJson = await hitters.json();
      setHitters(hittersJson);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="leaders-section">
        <div className="leaders-div">
          <button
            className={`leaders-tab ${active === 0 && "active-tab"}`}
            onClick={() => handleActiveTab(0)}
          >
            Batting
          </button>
          <button
            className={`leaders-tab ${active === 1 && "active-tab"}`}
            onClick={() => handleActiveTab(1)}
          >
            Pitching
          </button>
        </div>
      </section>

      {active === 0 && (
        <LeaderTable headerArray={batterHeader} tableArray={hitters} />
      )}

      {active === 1 && (
        <LeaderTable headerArray={pitcherHeader} tableArray={pitchers} />
      )}
    </>
  );
};

export default Leaders;
