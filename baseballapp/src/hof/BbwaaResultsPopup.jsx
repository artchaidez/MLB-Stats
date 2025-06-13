import React from "react";

const BbwaaResultsPopup = ({ handleCloseButton }) => {
  return (
    <div className="bbwaa-results-popup">
      <p className="bbwaa-results-title">2025 BBWAA Results </p>
      <p className="bbwaa-results-p">
        Name - Total Votes - Percentage of Votes - (Years on Ballot) <br />
        Players receiving less than 5% will drop off future ballots
      </p>
      <ul className="bbwaa-results-list">
        <li className="bbwaa-results-hof bbwaa-results-li">
          Ichiro Suzuki: 393 votes, 99.7% (1st)
        </li>
        <li className="bbwaa-results-hof bbwaa-results-li">CC Sabathia: 342 votes, 86.8% (1st)</li>
        <li className="bbwaa-results-hof bbwaa-results-li">
          Billy Wagner: 325 votes, 82.5% (10th)
        </li>
        <li className="bbwaa-results-li">Carlos Beltrán: 277 votes, 70.3% (3rd)</li>
        <li className="bbwaa-results-li">Andruw Jones: 261 votes, 66.2% (8th)</li>
        <li className="bbwaa-results-li">Chase Utley: 157 votes, 39.8% (2nd)</li>
        <li className="bbwaa-results-li">Alex Rodriguez: 146 votes, 37.1% (4th)</li>
        <li className="bbwaa-results-li">Manny Ramirez: 135 votes, 34.3% (9th)</li>
        <li className="bbwaa-results-li">Andy Pettitte: 110 votes, 27.9% (7th)</li>
        <li className="bbwaa-results-li">Félix Hernández: 81 votes, 20.6% (1st)</li>
        <li className="bbwaa-results-li">Bobby Abreu: 77 votes, 19.5% (6th)</li>
        <li className="bbwaa-results-li">Jimmy Rollins: 71 votes, 18% (4th)</li>
        <li className="bbwaa-results-li">Omar Vizquel: 70 votes, 17.8% (8th)</li>
        <li className="bbwaa-results-li">Dustin Pedroia: 47 votes, 11.9% (1st)</li>
        <li className="bbwaa-results-li">Mark Buehrle: 45 votes, 11.4% (5th)</li>
        <li className="bbwaa-results-li">Francisco Rodriguez: 40 votes, 10.2% (3rd)</li>
        <li className="bbwaa-results-li">David Wright: 32 votes, 8.1% (2nd)</li>
        <li className="bbwaa-results-li">Torii Hunter: 20 votes, 5.1% (5th)</li>
        <li className="bbwaa-results-li">Ian Kinsler: 10 votes, 2.5% (1st)</li>
        <li className="bbwaa-results-li">Russell Martin: 9 votes, 2.3% (1st)</li>
        <li className="bbwaa-results-li">Brian McCann: 7 votes, 1.8% (1st)</li>
        <li className="bbwaa-results-li">Troy Tulowitzki: 4 votes, 1% (1st)</li>
        <li className="bbwaa-results-li">Curtis Granderson: 3 votes, 0.8% (1st)</li>
        <li className="bbwaa-results-li">Adam Jones: 3 votes, 0.8% (1st)</li>
        <li className="bbwaa-results-li">Carlos González: 2 votes, 0.5% (1st)</li>
        <li className="bbwaa-results-li">Hanley Ramirez: 0 votes (1st)</li>
        <li className="bbwaa-results-li">Fernando Rodney: 0 votes (1st)</li>
        <li className="bbwaa-results-li">Ben Zobrist: 0 votes (1st)</li>
      </ul>
      <button className="close-button" onClick={handleCloseButton}>
        Close
      </button>
    </div>
  );
};

export default BbwaaResultsPopup;
