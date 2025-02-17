const VotesPopup = ({ selections, handleCloseButton }) => {
    return (
        <div className="votes-popup" >
          <p>
            You voted for: {selections.map((selection) => selection.name).join(", ")}
          </p>
          <button className="close-button" onClick={handleCloseButton}>
            Close
          </button>
        </div>
    )
}

export default VotesPopup;