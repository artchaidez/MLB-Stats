const ErrorPopup = ({ handleCloseButton}) => {
    return (
        <div className="fix-votes-popup" >
          <p>
            You cannot vote for more than 10 candidates. Please reconsider your
            votes.
          </p>
          <button
            className="close-button fix-votes-button"
            onClick={handleCloseButton}
          >
            Close
          </button>
        </div>
    )
}

export default ErrorPopup;