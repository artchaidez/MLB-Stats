import { useEffect, useState } from "react";

const SiteResultsPopup = ({ handleCloseButton }) => {
  const [siteResults, setSiteResults] = useState([]);
  const url = "http://localhost:8081/hof";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSiteResults(data);
        });
    };

    fetchData();
  }, []);

  const listResults = siteResults.map((item, index) => (
    <li key={index} className="site-results-li">
      {item.name} : {item.totalVotes}
    </li>
  ));

  return (
    <div className="site-results-popup">
      <p className="site-results-title">Site Results </p>
      <p className="site-results-p">Name : Total Votes</p>
      {siteResults.length > 0 ? (
        <ul className="site-results-list">{listResults}</ul>
      ) : (
        <p className="site-results-p">No Votes Submited Yet!</p>
      )}

      <button className="close-button" onClick={handleCloseButton}>
        Close
      </button>
    </div>
  );
};

export default SiteResultsPopup;
