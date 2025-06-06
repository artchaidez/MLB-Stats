import { useEffect, useState } from "react";

const VotesPopup = ({ selections, handleCloseButton }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < selections.length) {
      const timer = setTimeout(() => {
        setSelectedPlayers((prevItems) => [
          ...prevItems,
          selections[currentIndex],
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, selections]);

  useEffect(() => {
    selections.forEach((player) => {
      let playerId = player.name.replace(" ", "-");

      const postSelections = async () =>
        await fetch("http://localhost:8081/hof", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: playerId,
            name: player.name,
            totalVotes: 1,
          }),
        });

      postSelections();
    });
  }, []);

  const votesList = selectedPlayers.map((item, index) => (
    <li key={index} className="votes-item">
      {item.name}
    </li>
  ));

  return selections.length > 0 ? (
    <div className="votes-popup">
      You voted for: <ul className="votes-list">{votesList}</ul>
      <button className="close-button" onClick={handleCloseButton}>
        Close
      </button>
    </div>
  ) : (
    <div className="votes-popup">
      <p>Small hall voter I see...</p>
      <button className="close-button" onClick={handleCloseButton}>
        Close
      </button>
    </div>
  );
};

export default VotesPopup;
