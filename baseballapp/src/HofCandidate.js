const HofCandidate = ({ name, handleSelection }) => {
    return (
        <>
        <li className="candidate-item">
            <label className="candidate-label">
              <input type="checkbox" name={name} onClick={handleSelection}/>
              {name}
            </label>
          </li></>
    )
}

export default HofCandidate;