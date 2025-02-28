const PitcherTable = ({ data }) => {
  const era = Number(data.era).toFixed(2);
  const xEra = Number(data.xEra).toFixed(2);
  const fip = Number(data.fip).toFixed(2);
  const xFip = Number(data.xFip).toFixed(2);

  return (
    <div className="collapse-content">
      <table className="award-table">
        <thead className={`${data.team}-primary`}>
          <tr>
            <th>G</th>
            <th>QS</th>
            <th>W</th>
            <th>L</th>
            <th>IP</th>
            <th>SO</th>
            <th>K%</th>
            <th>BB%</th>
            <th>GB%</th>
            <th>ERA</th>
            <th>xERA</th>
            <th>FIP</th>
            <th>xFIP</th>
            <th>fWAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.games}</td>
            <td>{data.qualityStarts}</td>
            <td>{data.wins}</td>
            <td>{data.loses}</td>
            <td>{data.inningsPitched}</td>
            <td>{data.strikeouts}</td>
            <td>{data.bbPercentage}%</td>
            <td>{data.kPercentage}%</td>
            <td>{data.groundBallRate}%</td>
            <td>{era}</td>
            <td>{xEra}</td>
            <td>{fip}</td>
            <td>{xFip}</td>
            <td>{data.fWAR}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PitcherTable;
