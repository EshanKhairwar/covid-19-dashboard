import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import "chartjs-adapter-date-fns";
import numeral from "numeral";

// Register the necessary components with ChartJS
ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend, Title);

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem) {
          return numeral(tooltipItem.raw.y).format("+0,0");
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
        tooltipFormat: "PP", // Proper format string using date-fns tokens
      },
      title: {
        display: true,
        text: 'Date'
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function (value) {
          return numeral(value).format("0a");
        },
      },
      title: {
        display: true,
        text: 'Number of Cases'
      },
    },
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;

  if (!data[casesType]) {
    console.error(`No data available for casesType: ${casesType}`);
    return chartData;
  }

  for (let date in data[casesType]) {
    if (data[casesType].hasOwnProperty(date)) {
      if (lastDataPoint !== undefined) {
        let newDataPoint = {
          x: new Date(date), // Ensure the date is a Date object
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
  }

  return chartData;
};

function LineGraph({ casesType = "cases",...props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
          console.log(chartData);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchData();
  }, [casesType]);

  return (
    <div className={props.className}>
      {data.length > 0 && (
        <Line 
          data={{
            datasets: [
              {
                label: `Daily ${casesType.charAt(0).toUpperCase() + casesType.slice(1)}`,
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
