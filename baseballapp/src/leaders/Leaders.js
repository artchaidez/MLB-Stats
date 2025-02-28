import "./leaders.css";
import { useState } from "react";
import LeaderTable from "./LeaderTable";
import judge from "../json/judge.json";
import witt from "../json/witt.json";
import ohtani from "../json/ohtani.json";
import soto from "../json/soto.json";
import henderson from "../json/henderson.json";
import sale from '../json/sale.json';
import skubal from "../json/skubal.json";
import wheeler from "../json/wheeler.json";
import ragans from "../json/ragans.json"
import cease from "../json/cease.json"


const Leaders = () => {
  const [active, setActive] = useState(0);

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

  let batterTable = [];
  batterTable.push(judge);
  batterTable.push(witt);
  batterTable.push(ohtani);
  batterTable.push(soto);
  batterTable.push(henderson);

  let pitcherTable = [];
  pitcherTable.push(sale);
  pitcherTable.push(skubal);
  pitcherTable.push(wheeler);
  pitcherTable.push(ragans);
  pitcherTable.push(cease);

  return (
    <>
      <section className="tabs-leaders">
        <div className="containers-leaders">
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
        <LeaderTable headerArray={batterHeader} tableArray={batterTable} />
      )}

      {active === 1 && (
        <LeaderTable headerArray={pitcherHeader} tableArray={pitcherTable} />
      )}
    </>
  );
};

export default Leaders;
