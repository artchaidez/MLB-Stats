const BatterTable = ({ data }) => {
  const ba = Number(data.ba).toFixed(3);
  const obp = Number(data.obp).toFixed(3);
  const slg = Number(data.slg).toFixed(3);

  return (
    <div className="collapse-content">
      <table className="award-table">
        <thead className={`${data.team}-primary`}>
          <tr>
            <th>G</th>
            <th>PA</th>
            <th>HR</th>
            <th>RBI</th>
            <th>SB</th>
            <th>BB%</th>
            <th>K%</th>
            <th>AVG</th>
            <th>OBP</th>
            <th>SLG</th>
            <th>wRC+</th>
            <th>BsR</th>
            <th>Def</th>
            <th>fWAR</th>
          </tr>
        </thead>
        <tbody>
          <td>{data.games}</td>
          <td>{data.plateApperances}</td>
          <td>{data.homeRuns}</td>
          <td>{data.rbis}</td>
          <td>{data.stolenBases}</td>
          <td>{data.bbPercentage}%</td>
          <td>{data.kPercentage}%</td>
          <td>{ba}</td>
          <td>{obp}</td>
          <td>{slg}</td>
          <td>{data.wrcPlus}</td>
          <td>{data.bsr}</td>
          <td>{data.def}</td>
          <td>{data.fWar}</td>
        </tbody>
      </table>
    </div>
  );
};

export default BatterTable;
