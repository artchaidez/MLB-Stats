import "./HofVoting.css";
import HofCandidate from "./HofCandidate";
import { useState } from "react";
import VotesPopup from "./VotesPopup";
import ErrorPopup from "./ErrorPopup";
import Electees from "./Electees";
import BbwaaButton from "./BbwaaButton";
import SiteResultsButton from "./SiteResultsButton";

const HofVoting = () => {
  const [selections, setSelections] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSelection = (e) => {
    e.target.checked
      ? setSelections([...selections, e.target])
      : setSelections(selections.filter((selection) => selection !== e.target));
  };

  if (selections.length > 10) {
    setShowError(true);
    const lastVote = selections[selections.length - 1];
    lastVote.checked = false;
    setSelections(selections.filter((selection) => selection !== lastVote));
  }

  const handleCloseButton = (e) => {
    if (e.target.classList.contains("fix-votes-button")) {
      setShowError(false);
    } else {
      selections.forEach((selection) => (selection.checked = false));
      setSelections([]);
      setShowResults(false);
    }
  };

  return (
    <>
      <Electees />

      <div className="results-div-buttons">
        <BbwaaButton />
        <SiteResultsButton />
      </div>

      <fieldset className="fieldset-ballot">
        <legend className="legend-ballot">
          2025 BBWAA HALL OF FAME BALLOT
        </legend>
        <ul className="ul-ballot">
          <HofCandidate
            name={"Bobby Abreu"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Carlos Beltrán"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Mark Buehrle"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Carlos González"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Curtis Granderson"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Félix Hernández"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Torii Hunter"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Adam Jones"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Andruw Jones"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Ian Kinsler"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Russell Martin"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Brian McCann"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Dustin Pedroia"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Andy Pettitte"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Hanley Ramírez"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Manny Ramírez"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Fernando Rodney"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Álex Rodríguez"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Francisco Rodríguez"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Jimmy Rollins"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"CC Sabathia"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Ichiro Suzuki"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Troy Tulowitzki"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
          <HofCandidate
            name={"Chase Utley"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Omar Vizquel"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Billy Wagner"}
            handleSelection={handleSelection}
            year={"final-year"}
          />
          <HofCandidate
            name={"David Wright"}
            handleSelection={handleSelection}
          />
          <HofCandidate
            name={"Ben Zobrist"}
            handleSelection={handleSelection}
            year={"first-year"}
          />
        </ul>
      </fieldset>

      <div className="voting-box-div">
        <div>
          <p className="first-year">First Year Candidate</p>
          <p className="final-year">Final Year Candidate</p>
        </div>
        <button className="submit-votes-button" onClick={() => setShowResults(true)}>
          Submit Votes
        </button>
      </div>

      {showResults && (
        <VotesPopup
          selections={selections}
          handleCloseButton={handleCloseButton}
        />
      )}

      {showError && <ErrorPopup handleCloseButton={handleCloseButton} />}
    </>
  );
};

export default HofVoting;
