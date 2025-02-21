const VotesPopup = ({ selections, handleCloseButton }) => {
    return (
      (selections.length > 0 ?
        <div className="votes-popup" >
          <p>
            You voted for: {selections.map((selection) => selection.name).join(", ")}
          </p>
          <button className="close-button" onClick={handleCloseButton}>
            Close
          </button>
        </div> :
        <div className="votes-popup" >
        <p>
          Small hall voter I see...
        </p>
        <button className="close-button" onClick={handleCloseButton}>
          Close
        </button>
      </div>
      )
    )
}

export default VotesPopup;