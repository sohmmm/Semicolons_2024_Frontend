import { React, useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Linegraph = () => {
  const [labels, setlabels] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thus",
    "Fri",
    "Sat",
  ]);
  const [amount, setamount] = useState([1, 2, 4, 3, 1, 6]); // Pass amount array here

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          padding: 10,
        },
        grid: {
          drawTicks: false,
          lineWidth: 0.2,
        },
      },
      x: {
        ticks: {
          padding: 7,
        },
        grid: {
          drawTicks: false,
          lineWidth: 0.2,
        },
      },
    },
  };

  let data = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        data: amount,
        borderColor: "rgba(255, 99, 132, .8)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Linegraph;
