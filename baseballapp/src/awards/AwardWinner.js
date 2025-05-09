import { useState, useEffect } from "react";
import BatterTable from "./BatterTable";
import PitcherTable from "./PitcherTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AwardWinner = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const rotate = open ? "rotate(-90deg)" : "rotate(0)";
  const url = "http://localhost:8081/" + name;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const json = await result.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  });

  if (loading) {
    return <p></p>
  }

  return (
    <div className="collapse">
      <div
        className={`collapse-header ${data.team}-primary`}
        onClick={() => setOpen(!open)}
      >
        <img
          className="header-image"
          src={data.img}
          alt={`${data.Name}-photo`}
        ></img>
        <span className="collapse-title">
          {`${data.name} - ${data.city} ${data.team}`}
        </span>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ transform: rotate, transition: "all 0.2s linear" }}
        />
      </div>
      {open &&
        (data.hitter ? (
          <BatterTable data={data} />
        ) : (
          <PitcherTable data={data} />
        ))}
    </div>
  );
};

export default AwardWinner;
