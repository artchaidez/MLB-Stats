const BatterTable = ({ data }) => {
  const avg = Number(data.avg).toFixed(3);
  const obp = Number(data.obp).toFixed(3);
  const slg = Number(data.slg).toFixed(3);

  return (
    <div className="collapse-content">
      <table className="award-table">
        <thead className={`${data.team}-primary`}>
          <tr>
            <th className="award-header">G</th>
            <th className="award-header">PA</th>
            <th className="award-header">HR</th>
            <th className="award-header">RBI</th>
            <th className="award-header">SB</th>
            <th className="award-header">BB%</th>
            <th className="award-header">K%</th>
            <th className="award-header">AVG</th>
            <th className="award-header">OBP</th>
            <th className="award-header">SLG</th>
            <th className="award-header">wRC+</th>
            <th className="award-header">BsR</th>
            <th className="award-header">Def</th>
            <th className="award-header">fWAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="award-data">{data.games}</td>
            <td className="award-data">{data.plateApperances}</td>
            <td className="award-data">{data.homeRuns}</td>
            <td className="award-data">{data.rbis}</td>
            <td className="award-data">{data.stolenBases}</td>
            <td className="award-data">{data.bbPercentage}%</td>
            <td className="award-data">{data.kPercentage}%</td>
            <td className="award-data">{avg}</td>
            <td className="award-data">{obp}</td>
            <td className="award-data">{slg}</td>
            <td className="award-data">{data["wRC+"]}</td>
            <td className="award-data">{data.bsr}</td>
            <td className="award-data">{data.def}</td>
            <td className="award-data">{data.fWAR}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BatterTable;
