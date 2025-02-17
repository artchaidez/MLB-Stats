import "./HofVoting.css";
import HofCandidate from "./HofCandidate";
import { useState } from "react";
import VotesPopup from "./VotesPopup";
import ErrorPopup from "./ErrorPopup";

const HofVoting = () => {
  const [selections, setSelections] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSelection = (e) => {
    if (selections.length >= 10) {
      setShowError(true);
      setSelections(selections.filter((selection) => selection !== e.target));
      e.target.checked = false;
    } else {
      if (e.target.checked) {
        setSelections([...selections, e.target]);
      } else {
        setSelections(selections.filter((selection) => selection !== e.target));
      }
    }
  };

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
      <fieldset className="fieldset-ballot">
        <legend className="legend-ballot">
          2025 BBWAA HALL OF FAME BALLOT
        </legend>
        <ul className="ul-ballot">
          <li className="candidate-item">
            <label className="candidate-label">
              <input
                type="checkbox"
                name="Bobby Abreu"
                onClick={handleSelection}
              />
              Bobby Abreu
            </label>
          </li>
          <li className="candidate-item">
            <label className="candidate-label">
              <input
                type="checkbox"
                name="Carlos Beltrán"
                onClick={handleSelection}
              />
              Carlos Beltrán
            </label>
          </li>
          <li className="candidate-item">
            <label className="candidate-label">
              <input
                type="checkbox"
                name="Mark Buehrle"
                onClick={handleSelection}
              />
              Mark Buehrle
            </label>
          </li>
          <li className="candidate-item first-year">
            <label className="candidate-label">
              <input
                type="checkbox"
                name="Carlos González"
                onClick={handleSelection}
              />
              Carlos González
            </label>
          </li>
          <li className="candidate-item first-year">
            <label className="candidate-label">
              <input
                type="checkbox"
                name="Curtis Granderson"
                onClick={handleSelection}
              />
              Curtis Granderson
            </label>
          </li>
          <li className="candidate-item first-year">
            <label className="candidate-label">
              <input
                type="checkbox"
                name="Félix Hernández"
                onClick={handleSelection}
              />
              Félix Hernández
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Torii Hunter"
                onClick={handleSelection}
              />
              Torii Hunter
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Adam Jones"
                onClick={handleSelection}
              />
              Adam Jones
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Andruw Jones"
                onClick={handleSelection}
              />
              Andruw Jones
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Ian Kinsler"
                onClick={handleSelection}
              />
              Ian Kinsler
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Russell Martin"
                onClick={handleSelection}
              />
              Russell Martin
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Brian McCann"
                onClick={handleSelection}
              />
              Brian McCann
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Dustin Pedroia"
                onClick={handleSelection}
              />
              Dustin Pedroia
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Andy Pettitte"
                onClick={handleSelection}
              />
              Andy Pettitte
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Hanley Ramírez"
                onClick={handleSelection}
              />
              Hanley Ramírez
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Manny Ramírez"
                onClick={handleSelection}
              />
              Manny Ramírez
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Fernando Rodney"
                onClick={handleSelection}
              />
              Fernando Rodney
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Álex Rodríguez"
                onClick={handleSelection}
              />
              Álex Rodríguez
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Francisco Rodríguez"
                onClick={handleSelection}
              />
              Francisco Rodríguez
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Jimmy Rollins"
                onClick={handleSelection}
              />
              Jimmy Rollins
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="CC Sabathia"
                onClick={handleSelection}
              />
              CC Sabathia
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Ichiro Suzuki"
                onClick={handleSelection}
              />
              Ichiro Suzuki
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Troy Tulowitzki"
                onClick={handleSelection}
              />
              Troy Tulowitzki
            </label>
          </li>
          <li className="candidate-item">
            <label>
              <input
                type="checkbox"
                name="Chase Utley"
                onClick={handleSelection}
              />
              Chase Utley
            </label>
          </li>
          <li className="candidate-item final-year">
            <label>
              <input
                type="checkbox"
                name="Billy Wagner"
                onClick={handleSelection}
              />
              Billy Wagner
            </label>
          </li>
          <li className="candidate-item first-year">
            <label>
              <input
                type="checkbox"
                name="Ben Zobrist"
                onClick={handleSelection}
              />
              Ben Zobrist
            </label>
          </li>
        </ul>
      </fieldset>

      <div className="voting-box">
        <div>
          <p className="first-year legacy">First Year Candidate</p>
          <p className="final-year legacy">Final Year Candidate</p>
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
