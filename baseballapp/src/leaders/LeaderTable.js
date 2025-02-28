import React from "react";
import { useState } from "react";
import Caret from "./Caret";

const LeaderTable = ({ headerArray, tableArray }) => {
  const [sort, setSort] = useState({ keyToSort: "#", direction: "asc" });

  const handleHeaderClick = (header) => {
    console.log(header);
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
    <table id="stats-table" className="table">
      <thead id="stats-thead">
        <tr>
          {headerArray.map((header, index) => (
            <th key={index} onClick={() => handleHeaderClick(header)}>
              <div className="header-container">
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
      <tbody id="stats-tbody">
        {getSortedArray(tableArray).map((row, tableIndex) => (
          <tr key={tableIndex}>
            {headerArray.map((header, index) => {
              return row[header.KEY] ? (
                <td key={index}>{row[header.KEY]}</td>
              ) : (
                <td className="fixed" key={index}>
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
