import { useState } from "react";
import Caret from "./Caret";

const LeaderTable = ({ headerArray, tableArray }) => {
  const [sort, setSort] = useState({ keyToSort: "#", direction: "asc" });

  const handleHeaderClick = (header) => {
    setSort({
      keyToSort: header.KEY,
      direction:
        header.KEY === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  const getSortedArray = (arrayToSort) => {
    if (sort.direction === "asc") {
      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    }

    return arrayToSort.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
    );
  };

  return (
    <table className="leader-table">
      <thead className="leader-thead">
        <tr className="leader-tr">
          {headerArray.map((header, index) => (
            <th className="leader-th" key={index} onClick={() => handleHeaderClick(header)}>
              <div className="caret-div">
                {header.LABEL}
                {header.KEY === sort.keyToSort && (
                  <Caret
                    direction={
                      sort.keyToSort === header.KEY ? sort.direction : "asc"
                    }
                  />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="leader-tbody">
        {getSortedArray(tableArray).map((row, tableIndex) => (
          <tr key={tableIndex}>
            {headerArray.map((header, index) => {
              return row[header.KEY] ? (
                <td className="leader-data" key={index}>{row[header.KEY]}</td>
              ) : (
                <td className="fixed leader-data" key={index}>
                  {tableIndex + 1}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderTable;
