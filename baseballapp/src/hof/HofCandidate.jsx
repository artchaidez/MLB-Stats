const HofCandidate = ({ name, handleSelection, year = "" }) => {
  return (
    <>
      <li className={`candidate-item ${year}`} key={name}>
        <label className="candidate-label">
          <input type="checkbox" name={name} onClick={handleSelection} />
          {name}
        </label>
      </li>
    </>
  );
};

export default HofCandidate;
