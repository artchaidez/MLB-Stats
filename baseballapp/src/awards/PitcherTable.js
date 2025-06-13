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
            <th className="award-th">G</th>
            <th className="award-th">QS</th>
            <th className="award-th">W</th>
            <th className="award-th">L</th>
            <th className="award-th">IP</th>
            <th className="award-th">SO</th>
            <th className="award-th">K%</th>
            <th className="award-th">BB%</th>
            <th className="award-th">GB%</th>
            <th className="award-th">ERA</th>
            <th className="award-th">xERA</th>
            <th className="award-th">FIP</th>
            <th className="award-th">xFIP</th>
            <th className="award-th">fWAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="award-td">{data.games}</td>
            <td className="award-td">{data.qualityStarts}</td>
            <td className="award-td">{data.wins}</td>
            <td className="award-td">{data.loses}</td>
            <td className="award-td">{data.inningsPitched}</td>
            <td className="award-td">{data.strikeouts}</td>
            <td className="award-td">{data.bbPercentage}%</td>
            <td className="award-td">{data.kPercentage}%</td>
            <td className="award-td">{data.groundBallRate}%</td>
            <td className="award-td">{era}</td>
            <td className="award-td">{xEra}</td>
            <td className="award-td">{fip}</td>
            <td className="award-td">{xFip}</td>
            <td className="award-td">{data.fWAR}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PitcherTable;
