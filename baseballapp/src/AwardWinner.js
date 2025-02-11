import { useState } from "react";
import BatterTable from "./BatterTable";
import PitcherTable from "./PitcherTable";

const AwardWinner = ({ data }) => {
  const [open, setOpen] = useState(false);
  const hitter = data.hitter;

  return (
    <div className="collapse">
      <div
        className={`collapse-header ${data.team}-primary`}
        onClick={() => setOpen(!open)}
      >
        <img
          class="header-image"
          src={data.img}
          alt={`${data.lastName}-photo`}
        ></img>
        <span className="collapse-title">
          {`${data.firstName} ${data.lastName} - ${data.city} ${data.team}`}
        </span>
      </div>
      {open && (
        hitter ? <BatterTable data={data}/> : <PitcherTable data={data}/>
      )}
    </div>
  );
};

export default AwardWinner;
