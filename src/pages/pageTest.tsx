import React from "react";
import Linecharts from "../components/charts/Linecharts";
import Piecharts from "../components/charts/Piecharts";

const options = {
  chart: {
    height: 50,
    type: "line",
    toolbar: { show: false },
  },
  colors: ["#5156be"],
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

const PageTest = () => {
  return (
    <div>
      {/* <Piecharts text="hello" />
      <Linecharts /> */}
    </div>
  );
};

export default PageTest;
