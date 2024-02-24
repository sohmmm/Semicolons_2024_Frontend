import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughNut() {
  const options = {
    plugins: {
      //   legend: {
      //     // labels:{
      //     //   color:'#F5F5F5',
      //     //   boxWidth:8,
      //     //   boxHeight:8,
      //     // },
      //   },
    },
  };

  const labels = [
    "High Stock Product",
    "Near Low Stock Product",
    "Low Stock Product",
    "Out of Stock Product",
  ];

  const data = {
    // labels: labels,
    datasets: [
      {
        // label:'Value',
        data: [4, 5, 6, 7],
        backgroundColor: ["#80B357", "#C68F3D", "#C65E3D", "#D93F3F"],
        borderColor: ["#80B357", "#C68F3D", "#C65E3D", "#D93F3F"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="flex w-[50%]">
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}
