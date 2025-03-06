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
            <th className="award-header">G</th>
            <th className="award-header">QS</th>
            <th className="award-header">W</th>
            <th className="award-header">L</th>
            <th className="award-header">IP</th>
            <th className="award-header">SO</th>
            <th className="award-header">K%</th>
            <th className="award-header">BB%</th>
            <th className="award-header">GB%</th>
            <th className="award-header">ERA</th>
            <th className="award-header">xERA</th>
            <th className="award-header">FIP</th>
            <th className="award-header">xFIP</th>
            <th className="award-header">fWAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="award-data">{data.games}</td>
            <td className="award-data">{data.qualityStarts}</td>
            <td className="award-data">{data.wins}</td>
            <td className="award-data">{data.loses}</td>
            <td className="award-data">{data.inningsPitched}</td>
            <td className="award-data">{data.strikeouts}</td>
            <td className="award-data">{data.bbPercentage}%</td>
            <td className="award-data">{data.kPercentage}%</td>
            <td className="award-data">{data.groundBallRate}%</td>
            <td className="award-data">{era}</td>
            <td className="award-data">{xEra}</td>
            <td className="award-data">{fip}</td>
            <td className="award-data">{xFip}</td>
            <td className="award-data">{data.fWAR}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PitcherTable;
