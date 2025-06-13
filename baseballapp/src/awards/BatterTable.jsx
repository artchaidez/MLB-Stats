const BatterTable = ({ data }) => {
  const avg = Number(data.avg).toFixed(3);
  const obp = Number(data.obp).toFixed(3);
  const slg = Number(data.slg).toFixed(3);

  return (
    <div className="collapse-content">
      <table className="award-table">
        <thead className={`${data.team}-primary`}>
          <tr>
            <th className="award-th">G</th>
            <th className="award-th">PA</th>
            <th className="award-th">HR</th>
            <th className="award-th">RBI</th>
            <th className="award-th">SB</th>
            <th className="award-th">BB%</th>
            <th className="award-th">K%</th>
            <th className="award-th">AVG</th>
            <th className="award-th">OBP</th>
            <th className="award-th">SLG</th>
            <th className="award-th">wRC+</th>
            <th className="award-th">BsR</th>
            <th className="award-th">Def</th>
            <th className="award-th">fWAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="award-td">{data.games}</td>
            <td className="award-td">{data.plateApperances}</td>
            <td className="award-td">{data.homeRuns}</td>
            <td className="award-td">{data.rbis}</td>
            <td className="award-td">{data.stolenBases}</td>
            <td className="award-td">{data.bbPercentage}%</td>
            <td className="award-td">{data.kPercentage}%</td>
            <td className="award-td">{avg}</td>
            <td className="award-td">{obp}</td>
            <td className="award-td">{slg}</td>
            <td className="award-td">{data["wRC+"]}</td>
            <td className="award-td">{data.bsr}</td>
            <td className="award-td">{data.def}</td>
            <td className="award-td">{data.fWAR}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BatterTable;
