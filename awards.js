document.body.addEventListener("click", (e) => {
  const iscollapseTitle = !!e.target.closest(".collapse-header");
  const collapse = e.target.closest(".collapse");

  if (!iscollapseTitle) {
    return;
  }

  collapse.classList.toggle("collapse-open");
});

Chart.defaults.font.size = 18;
Chart.defaults.borderColor = "gray";
Chart.defaults.borderWidth = 1;
Chart.defaults.hoverBorderWidth = 5;
Chart.defaults.hoverBorderColor = "white";

let pitcherLabels = [
    "Fastball Run Value",
    "Breaking Run Value",
    "OffSpeed Run Value",
];

let hitterLabels = [
    "Batting Run Value",
    "BaseRunning Run Value",
    "Fielding Run Value",
];

let ohtaniBar = document.getElementById("ohtani-bar").getContext("2d");

let ohtaniBarChart = new Chart(ohtaniBar, {
  type: "bar",
  data: {
    labels: hitterLabels,
    datasets: [
      {
        label: "Run Value",
        data: [99, 100, 0],
        backgroundColor: ["blue", "red", "orange"],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Run Value Percentile Rankings",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let judgeBar = document.getElementById("judge-bar").getContext("2d");

let judgeBarChart = new Chart(judgeBar, {
  type: "bar",
  data: {
    labels: hitterLabels,
    datasets: [
      {
        label: "Run Value",
        data: [100, 54, 27],
        backgroundColor: ["blue", "red", "orange"],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Run Value Percentile Rankings",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let salePie = document.getElementById("sale-pie").getContext("2d");

let salePieChart = new Chart(salePie, {
  type: "pie",
  data: {
    labels: ["Slider", "4-Seam", "Change", "Sinker"],
    datasets: [
      {
        label: "Usage",
        data: [40, 38, 15, 7],
        backgroundColor: ["yellow", "red", "green", "orange"],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Pitch Usage",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let saleBar = document.getElementById("sale-bar").getContext("2d");

let saleBarChart = new Chart(saleBar, {
  type: "bar",
  data: {
    labels: pitcherLabels,
    datasets: [
      {
        label: "Run Value",
        data: [50, 100, 97],
        backgroundColor: ["blue", "red", "orange"],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Run Value Percentile Rankings",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let skubalPie = document.getElementById("skubal-pie").getContext("2d");

let skubalPieChart = new Chart(skubalPie, {
  type: "pie",
  data: {
    labels: ["4-Seam", "Change","Sinker", "Slider", "Curve"],
    datasets: [
      {
        label: "Usage",
        data: [33, 27, 20, 15, 4],
        backgroundColor: ["red", "green", "orange", "yellow", "blue"],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Pitch Usage",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let skubalBar = document.getElementById("skubal-bar").getContext("2d");

let skubalChart = new Chart(skubalBar, {
  type: "bar",
  data: {
    labels: pitcherLabels,
    datasets: [
      {
        label: "Run Value",
        data: [99, 83, 93],
        backgroundColor: ["blue", "red", "orange"],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Run Value Percentile Rankings",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let skenesPie = document.getElementById("skenes-pie").getContext("2d");

let skenesPieChart = new Chart(skenesPie, {
  type: "pie",
  data: {
    labels: ["4-Seam", "Sinker", "Curve", "Sweeper","Slider", "Change"],
    datasets: [
      {
        label: "Usage",
        data: [39, 28, 11, 10, 6, 5],
        backgroundColor: ["red", "orange", "blue", "orange", "yellow", "green"],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Pitch Usage",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let skenesBar = document.getElementById("skenes-bar").getContext("2d");

let skenesBarChart = new Chart(skenesBar, {
  type: "bar",
  data: {
    labels: pitcherLabels,
    datasets: [
      {
        label: "Run Value",
        data: [99, 84, 78],
        backgroundColor: ["blue", "red", "orange"],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Run Value Percentile Rankings",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let gilPie = document.getElementById("gil-pie").getContext("2d");

let gilPieChart = new Chart(gilPie, {
  type: "pie",
  data: {
    labels: ["4-Seam", "Slider", "Change"],
    datasets: [
      {
        label: "Usage",
        data: [49, 26, 25],
        backgroundColor: ["red", "yellow", "green"],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Pitch Usage",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});

let gilBar = document.getElementById("gil-bar").getContext("2d");

let gilBarChart = new Chart(gilBar, {
  type: "bar",
  data: {
    labels: pitcherLabels,
    datasets: [
      {
        label: "Run Value",
        data: [51, 94, 83],
        backgroundColor: ["blue", "red", "orange"],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Run Value Percentile Rankings",
        color: "gray",
        font: {
          size: 24,
        },
      },
    },
  },
});
