import "./HofVoting.css";
import HofCandidate from "./HofCandidate";
import { useState, useRef } from "react";
import VotesPopup from "./VotesPopup";
import ErrorPopup from "./ErrorPopup";

const HofVoting = () => {
  const [selections, setSelections] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showError, setShowError] = useState(false);
  let ref = useRef(0);

  const handleSelection = (e) => {
    if (e.target.checked) {
      setSelections([...selections, e.target]);
      ref.current = ref.current + 1;
    } else {
      setSelections(selections.filter((selection) => selection !== e.target));
      ref.current = ref.current - 1;
    }

    if (ref.current > 10) {
      setShowError(true);
      setSelections(selections.filter((selection) => selection !== e.target));
      ref.current = ref.current - 1;
      e.target.checked = false;
    }
  };

  const handleCloseButton = (e) => {
    if (e.target.classList.contains("fix-votes-button")) {
      setShowError(false);
    } else {
      selections.forEach((selection) => (selection.checked = false));
      setSelections([]);
      setShowResults(false);
      ref.current = 0;
    }
  };

  return (
    <>
      <fieldset className="fieldset-ballot">
        <legend className="legend-ballot">
          2025 BBWAA HALL OF FAME BALLOT
        </legend>
        <ul className="ul-ballot">
          <HofCandidate name={"Bobby Abreu"} handleSelection={handleSelection} />
          <HofCandidate name={"Carlos Beltrán"} handleSelection={handleSelection} />
          <HofCandidate name={"Mark Buehrle"} handleSelection={handleSelection} />
          <HofCandidate name={"Carlos González"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Curtis Granderson"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Félix Hernández"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Torii Hunter"} handleSelection={handleSelection}/>
          <HofCandidate name={"Adam Jones"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Andruw Jones"} handleSelection={handleSelection} />
          <HofCandidate name={"Ian Kinsler"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Russell Martin"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Brian McCann"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Dustin Pedroia"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Andy Pettitte"} handleSelection={handleSelection} />
          <HofCandidate name={"Hanley Ramírez"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Manny Ramírez"} handleSelection={handleSelection} />
          <HofCandidate name={"Fernando Rodney"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Álex Rodríguez"} handleSelection={handleSelection} />
          <HofCandidate name={"Francisco Rodríguez"} handleSelection={handleSelection} />
          <HofCandidate name={"Jimmy Rollins"} handleSelection={handleSelection} />
          <HofCandidate name={"CC Sabathia"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Ichiro Suzuki"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Troy Tulowitzki"} handleSelection={handleSelection} year={"first-year"} />
          <HofCandidate name={"Chase Utley"} handleSelection={handleSelection} />
          <HofCandidate name={"Omar Vizquel"} handleSelection={handleSelection} />
          <HofCandidate name={"Billy Wagner"} handleSelection={handleSelection} year={"final-year"} />
          <HofCandidate name={"David Wright"} handleSelection={handleSelection} />
          <HofCandidate name={"Ben Zobrist"} handleSelection={handleSelection} year={"first-year"} />
        </ul>
      </fieldset>

      <div className="voting-box">
        <div>
          <p className="first-year legend">First Year Candidate</p>
          <p className="final-year legend">Final Year Candidate</p>
        </div>
        <button className="button-votes" onClick={() => setShowResults(true)}>
          Submit Votes
        </button>
      </div>

      {showResults && (
        <VotesPopup
          selections={selections}
          handleCloseButton={handleCloseButton}
        />
      )}

      {showError && (
        <ErrorPopup handleCloseButton={handleCloseButton} />
      )}
    </>
  );
};

export default HofVoting;
