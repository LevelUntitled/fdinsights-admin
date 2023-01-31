import React from "react";
import ReactApexChart from "react-apexcharts";
interface PiechartsProps {
  text: string;
}

const Piecharts = (props: PiechartsProps) => {
  const piechartColors = ["#777aca", "#5156be", "#a8aada"];
  const series = [35, 70, 15];
  const options = {
    chart: {
      width: 227,
      height: 227,
      type: "pie",
    },
    labels: ["Ethereum", "Bitcoin", "Litecoin"],
    colors: piechartColors,
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactApexChart
        // @ts-ignore
        options={options}
        series={series}
        type="pie"
        height="227"
      />
    </div>
  );
};

export default Piecharts;
