import { useState } from "react";
import BatterTable from "./BatterTable";
import PitcherTable from "./PitcherTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const AwardWinner = ({ data }) => {
  const [open, setOpen] = useState(false);  

  const rotate = open ? "rotate(-90deg)" : "rotate(0)"
  const hitter = data.hitter;

  return (
    <div className="collapse">
      <div
        className={`collapse-header ${data.team}-primary`}
        onClick={() => setOpen(!open)}
      >
        <img
          className="header-image"
          src={data.img}
          alt={`${data.lastName}-photo`}
        ></img>
        <span className="collapse-title">
          {`${data.firstName} ${data.lastName} - ${data.city} ${data.team}`}
        </span>
        <FontAwesomeIcon icon={faArrowLeft} style={{ transform: rotate, transition: "all 0.2s linear" }} />
      </div>
      {open && (
        hitter ? <BatterTable data={data}/> : <PitcherTable data={data}/>
      )}
    </div>
  );
};

export default AwardWinner;
