import { useState } from "react";
import BbwaaResultsPopup from "./BbwaaResultsPopup";

const BbwaaButton = () => {
  const [popUp, setPopup] = useState(false);

  const handleCloseButton = () => {
    setPopup(false);
  };

  return (
    <>
      <button className="bbwaa-button" onClick={() => setPopup(true)}>Show 2025 BBWAA Results</button>
      {popUp && <BbwaaResultsPopup handleCloseButton={handleCloseButton} />}
    </>
  );
};

export default BbwaaButton;
