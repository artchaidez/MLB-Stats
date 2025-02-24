import "./leaders.css";
import { useState } from "react";

const Leaders = () => {
  const [active, setActive] = useState(0);

  const handleActiveTab = (value) => {
    setActive(value);
  };

  return (
    <>
      <section className="tabs-leaders">
        <div className="containers-leaders">
          <button
            className={`leaders-tab ${active === 0 && "active-tab"}`}
            onClick={() => handleActiveTab(0)}
          >
            Batting
          </button>
          <button
            className={`leaders-tab ${active === 1 && "active-tab"}`}
            onClick={() => handleActiveTab(1)}
          >
            Pitching
          </button>
        </div>
      </section>

      {active === 0 && (
        <table id="stats-table" class="table">
          <thead id="stats-thead">
            <th class="header fixed">
              #<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              Name<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              Team<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              AVG<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              OBP<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              SLG<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              wRC+<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              BsR<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              Def<span class="icon-arrow">↓</span>
            </th>
            <th class="header">
              fWAR<span class="icon-arrow">↓</span>
            </th>
          </thead>
          <tbody id="stats-tbody">
            <tr>
              <td class="fixed">1</td>
              <td>Aaron Judge</td>
              <td>NYY</td>
              <td>.322</td>
              <td>.458</td>
              <td>.701</td>
              <td>218</td>
              <td>-0.4</td>
              <td>-9.9</td>
              <td>11.2</td>
            </tr>
            <tr>
              <td class="fixed">2</td>
              <td>Bobby Witt Jr</td>
              <td>KCR</td>
              <td>.332</td>
              <td>.389</td>
              <td>.588</td>
              <td>168</td>
              <td>-4.5</td>
              <td>-17.5</td>
              <td>10.2</td>
            </tr>
            <tr>
              <td class="fixed">3</td>
              <td>Shohei Ohtani</td>
              <td>LAD</td>
              <td>.310</td>
              <td>.390</td>
              <td>.646</td>
              <td>181</td>
              <td>9.8</td>
              <td>-17.2</td>
              <td>9.1</td>
            </tr>
            <tr>
              <td class="fixed">4</td>
              <td>Juan Soto</td>
              <td>NYY</td>
              <td>.288</td>
              <td>.419</td>
              <td>.569</td>
              <td>180</td>
              <td>-3.8</td>
              <td>-6.1</td>
              <td>8.1</td>
            </tr>
            <tr>
              <td class="fixed">5</td>
              <td>Gunner Henderson</td>
              <td>BAL</td>
              <td>.281</td>
              <td>.364</td>
              <td>.529</td>
              <td>155</td>
              <td>4.0</td>
              <td>4.7</td>
              <td>8.0</td>
            </tr>
          </tbody>
        </table>
      )}
      {active === 1 && <table id="stats-table" class="table">
        <thead id="stats-thead"><th class="header fixed">#<span class="icon-arrow">↓</span></th><th class="header">Name<span class="icon-arrow">↓</span></th><th class="header">Team<span class="icon-arrow">↓</span></th><th class="header">IP<span class="icon-arrow">↓</span></th><th class="header">K%<span class="icon-arrow">↓</span></th><th class="header">BB%<span class="icon-arrow">↓</span></th><th class="header">GB%<span class="icon-arrow">↓</span></th><th class="header">ERA<span class="icon-arrow">↓</span></th><th class="header">FIP<span class="icon-arrow">↓</span></th><th class="header">fWAR<span class="icon-arrow">↓</span></th></thead>
        <tbody id="stats-tbody"><tr><td class="fixed">1</td><td>Chris Sale</td><td>ATL</td><td>177.2</td><td>32.1</td><td>5.6</td><td>44.8</td><td>2.38</td><td>2.09</td><td>6.4</td></tr><tr><td class="fixed">2</td><td>Tarik Skubal</td><td>DET</td><td>192.0</td><td>30.3</td><td>4.6</td><td>45.7</td><td>2.39</td><td>2.49</td><td>5.9</td></tr><tr><td class="fixed">3</td><td>Zack Wheeler</td><td>PHI</td><td>200.0</td><td>29.5</td><td>6.6</td><td>42.6</td><td>2.57</td><td>3.13</td><td>5.4</td></tr><tr><td class="fixed">4</td><td>Cole Ragans</td><td>KCR</td><td>186.1</td><td>29.3</td><td>8.8</td><td>40.7</td><td>3.14</td><td>2.99</td><td>4.9</td></tr><tr><td class="fixed">5</td><td>Dylan Cease</td><td>SDP</td><td>189.1</td><td>29.4</td><td>8.5</td><td>33.8</td><td>3.47</td><td>3.10</td><td>4.8</td></tr></tbody>
    </table>}
    </>
  );
};

export default Leaders;
