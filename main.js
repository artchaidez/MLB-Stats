let battingArray = [
    {'num': '1', 'name': 'Aaron Judge', 'team': 'NYY', 'AVG': '.322', 'OBP': '.458', 'SLG': '701', 'wRC+':'218', 'BsR':'-0.4', 'Def':'-9.9','WAR':'11.2'},
]

let batterHeader = ['#', 'Name', 'Team', 'AVG', 'OBP', 'SLG', 'wRC+', 'BsR', 'Def', 'WAR']

let pitchingArray = [
    {'num': '1', 'name': 'Chris Sale', 'team': 'ATL', 'IP': '177.2', 'K%': '32.1', 'BB%': '5.6', 'GB%':'44.8', 'ERA':'2.38', 'FIP':'2.09','WAR':'6.4'},
]

let pitchingHeader = ['#', 'Name', 'Team', 'IP', 'K%', 'BB%', 'GB%', 'ERA', 'FIP', 'WAR' ]

let thead = document.getElementById('stats-thead');
let tbody = document.getElementById('stats-tbody');
let tabs = document.querySelectorAll('.leaders-tab');
let table = document.getElementById('stats-table');
let heading = document.querySelector('thead');

function buildTable(data, header) {

    for (let i = 0; i < header.length; i++) {
        let headerCell = document.createElement('th');
        headerCell.classList.add('header')
        headerCell.textContent = header[i]

        let span = document.createElement('span')
        span.textContent = '↓';
        span.classList.add('icon-arrow')
        headerCell.appendChild(span)

        if (i==0) {
            headerCell.classList.add('fixed')
        }

        thead.appendChild(headerCell)
    }

        for (let i =0; i < data.length; i++) {
            let newRow = document.createElement('tr');

            for (let [key, value] of Object.entries(data[i])) {
                let newData = document.createElement('td');
                if (key === 'num') {
                    newData.classList.add('fixed')
                }

                newData.textContent = value;
                newRow.appendChild(newData)
            }
            tbody.appendChild(newRow)
        }
}

buildTable(battingArray, batterHeader)


tabs.forEach(tab => tab.addEventListener('click', (e) => {
    e.preventDefault()

    removeActiveTabs()
    e.target.classList.add('active-tab')
    let activeTable = e.target.id;

    thead.innerHTML = '';
    tbody.innerHTML = '';

    if (activeTable === 'batting') {
        buildTable(battingArray,batterHeader)
    } else {
        buildTable(pitchingArray, pitchingHeader)
    }
}))

function removeActiveTabs() {
    tabs.forEach(tab => tab.classList.remove('active-tab'))
}