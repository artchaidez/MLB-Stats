let battingArray = [
    {'num': '1', 'name': 'Aaron Judge', 'team': 'NYY', 'AVG': '.322', 'OBP': '.458', 'SLG': '.701', 'wRC+':'218', 'BsR':'-0.4', 'Def':'-9.9','fWAR':'11.2'},
    {'num': '2', 'name': 'Bobby Witt Jr', 'team': 'KCR', 'AVG': '.332', 'OBP': '.389', 'SLG': '.588', 'wRC+':'168', 'BsR':'-4.5', 'Def':'-17.5','fWAR':'10.2'},
    {'num': '3', 'name': 'Shohei Ohtani', 'team': 'LAD', 'AVG': '.310', 'OBP': '.390', 'SLG': '.646', 'wRC+':'181', 'BsR':'9.8', 'Def':'-17.2','fWAR':'9.1'},
    {'num': '4', 'name': 'Juan Soto', 'team': 'NYY', 'AVG': '.288', 'OBP': '.419', 'SLG': '.569', 'wRC+':'180', 'BsR':'-3.8', 'Def':'-6.1','fWAR':'8.1'},
    {'num': '5', 'name': 'Gunner Henderson', 'team': 'BAL', 'AVG': '.281', 'OBP': '.364', 'SLG': '.529', 'wRC+':'155', 'BsR':'4.0', 'Def':'4.7','fWAR':'8.0'}
]

let batterHeader = ['#', 'Name', 'Team', 'AVG', 'OBP', 'SLG', 'wRC+', 'BsR', 'Def', 'fWAR']

let pitchingArray = [
    {'num': '1', 'name': 'Chris Sale', 'team': 'ATL', 'IP': '177.2', 'K%': '32.1', 'BB%': '5.6', 'GB%':'44.8', 'ERA':'2.38', 'FIP':'2.09','fWAR':'6.4'},
    {'num': '2', 'name': 'Tarik Skubal', 'team': 'DET', 'IP': '192.0', 'K%': '30.3', 'BB%': '4.6', 'GB%':'45.7', 'ERA':'2.39', 'FIP':'2.49','fWAR':'5.9'},
    {'num': '3', 'name': 'Zack Wheeler', 'team': 'PHI', 'IP': '200.0', 'K%': '29.5', 'BB%': '6.6', 'GB%':'42.6', 'ERA':'2.57', 'FIP':'3.13','fWAR':'5.4'},
    {'num': '4', 'name': 'Cole Ragans', 'team': 'KCR', 'IP': '186.1', 'K%': '29.3', 'BB%': '8.8', 'GB%':'40.7', 'ERA':'3.14', 'FIP':'2.99','fWAR':'4.9'},
    {'num': '5', 'name': 'Dylan Cease', 'team': 'SDP', 'IP': '189.1', 'K%': '29.4', 'BB%': '8.5', 'GB%':'33.8', 'ERA':'3.47', 'FIP':'3.10','fWAR':'4.8'}
]

let pitchingHeader = ['#', 'Name', 'Team', 'IP', 'K%', 'BB%', 'GB%', 'ERA', 'FIP', 'fWAR' ]

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

heading.addEventListener('click', (e) => {
    let sortAsc = true;
    let header = e.target;

    if (header.classList.contains('header')) {
        let parent = header.parentElement;
        let column;

        for (const child of parent.children) {
            child.classList.remove('active');
        }
        header.classList.add('active')

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'))
        for (let i = 0; i < parent.childElementCount; i++) {
            if (parent.children[i].classList.contains('active')) {
                column = i;
            }
        }

        let tableRows = document.querySelectorAll('tbody tr');
        tableRows.forEach(row => {
            row.querySelectorAll('td')[column].classList.add('active');
        })

        header.classList.toggle('asc')
        sortAsc = header.classList.contains('asc') ? false : true;

        sortTable(column, sortAsc, tableRows);
    }
})

function sortTable(column, sortAsc, tableRows) {
    [...tableRows].sort((a,b) => {
        let firstRow = a.querySelectorAll('td')[column].textContent.toLowerCase();
        let secondRow = b.querySelectorAll('td')[column].textContent.toLowerCase();

        if (!isNaN(Number(firstRow)) || !isNaN(Number(secondRow))) {
            firstRow = parseFloat(firstRow);
            secondRow = parseFloat(secondRow);
            return sortAsc ? (firstRow < secondRow ? -1 : 1) : (firstRow < secondRow ? 1 : -1);
        }

        return sortAsc ? (firstRow < secondRow ? 1 : -1) : (firstRow < secondRow ? -1 : 1);
    }).map((sortedRow, i) => {
        let fixedColumn = sortedRow.querySelector('.fixed')
        fixedColumn.textContent = i + 1;

        document.querySelector('tbody').appendChild(sortedRow)
    })
}

