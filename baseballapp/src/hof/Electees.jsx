import React from "react";
import ElecteeCard from "./ElecteeCard";

const Electees = () => {

  const sabathia = {
    name: "CC Sabathia",
    position: "Pitcher",
    img: "https://baseballhall.org/sites/default/files/Sabathia_CC_253-2012-60_HS_HoFUseOnly.jpg",
  };

  const suzuki = {
    name: "Ichiro Suzuki",
    position: "Right Fielder",
    img: "https://baseballhall.org/sites/default/files/Suzuki%20Ichiro%20455-2011-67_HS_HoFUseOnly.jpg",
  };

  const wagner = {
    name: "Billy Wagner",
    position: "Pitcher",
    img: "https://baseballhall.org/sites/default/files/Wagner%20Sky%20Background.jpg",
  };

  return (
    <div className="electees">
      <h1 className="electees-h1">2025 BBWAA HALL OF FAME ELECTEES</h1>

      <div className="electees-container">
        <ElecteeCard data={sabathia} />
        <ElecteeCard data={suzuki} />
        <ElecteeCard data={wagner} />
      </div>

      <p className="electees-description">
        CC Sabathia, Ichiro Suzuki and Billy Wagner were elected to the Hall of
        Fame by the Baseball Writers' Association of America on Jan. 21. The
        Class of 2025 will be inducted July 27 on the grounds of the Clark
        Sports Center in Cooperstown.
      </p>
    </div>
  );
};

export default Electees;
