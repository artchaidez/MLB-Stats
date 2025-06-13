import { useState } from "react";
import SiteResultsPopup from "./SiteResultsPopup";

const SiteResultsButton = () => {
  const [popUp, setPopup] = useState(false);

  const handleCloseButton = () => {
    setPopup(false);
  };

  return (
    <>
      <button className="results-button" onClick={() => setPopup(true)}>
        Show Site Results
      </button>
      {popUp && <SiteResultsPopup handleCloseButton={handleCloseButton} />}
    </>
  );
};

export default SiteResultsButton;
