import React from "react";
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
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const StockGraph = ({ stock }) => {
  const stockGraphData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: `${stock.name} Price (USD)`,
        data: stock.history,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{stock.name} - Price Trends</h2>
      <Line data={stockGraphData} />
    </div>
  );
};

export default StockGraph;

// import React from "react";
// import { Line } from "react-chartjs-2";

// const StockGraph = ({ stock }) => {
//   const stockGraphData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: `${stock.name} Price (USD)`,
//         data: stock.history,
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.3,
//       },
//     ],
//   };

//   return (
//     <div style={{ marginTop: "30px" }}>
//       <h2>{stock.name} - Price Trends</h2>
//       <Line data={stockGraphData} />
//     </div>
//   );
// };

// export default StockGraph;
