import React, { useState } from "react";
import Modal from "react-modal";
import SearchBar from "./components/SearchBar";
import StockTable from "./components/StockTable";
import StockGraph from "./components/StockGraph";

// Set the app element for accessibility (this is needed for react-modal)
Modal.setAppElement("#root");

const App = () => {
  const stockData = [
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: 174.75,
      change: -0.65,
      marketCap: "2.79T",
      history: [172, 175, 174, 176, 174, 178, 174],
    },
    {
      name: "Microsoft Corp.",
      symbol: "MSFT",
      price: 331.35,
      change: 1.15,
      marketCap: "2.47T",
      history: [328, 330, 331, 332, 333, 330, 331],
    },
    {
      name: "Amazon.com Inc.",
      symbol: "AMZN",
      price: 139.68,
      change: 2.1,
      marketCap: "1.43T",
      history: [138, 137, 139, 140, 141, 139, 139],
    },
    {
      name: "Google LLC",
      symbol: "GOOGL",
      price: 129.54,
      change: 0.43,
      marketCap: "1.72T",
      history: [127, 129, 128, 130, 129, 130, 129],
    },
    {
      name: "Tesla Inc.",
      symbol: "TSLA",
      price: 227.03,
      change: -4.32,
      marketCap: "738.54B",
      history: [225, 228, 227, 229, 230, 228, 227],
    },
    {
      name: "Meta Platforms",
      symbol: "META",
      price: 328.23,
      change: 3.28,
      marketCap: "846.54B",
      history: [320, 322, 325, 326, 328, 330, 328],
    },
    {
      name: "NVIDIA Corp.",
      symbol: "NVDA",
      price: 408.21,
      change: 7.22,
      marketCap: "1.03T",
      history: [400, 405, 403, 407, 408, 410, 408],
    },
    {
      name: "Alibaba Group",
      symbol: "BABA",
      price: 89.12,
      change: -1.02,
      marketCap: "231.45B",
      history: [88, 89, 87, 90, 89, 88, 89],
    },
    {
      name: "Berkshire Hathaway",
      symbol: "BRK.B",
      price: 510.43,
      change: 0.62,
      marketCap: "786.23B",
      history: [505, 508, 507, 509, 510, 511, 510],
    },
    {
      name: "Johnson & Johnson",
      symbol: "JNJ",
      price: 153.82,
      change: -0.54,
      marketCap: "403.45B",
      history: [152, 154, 153, 154, 153, 154, 153],
    },
    {
      name: "Visa Inc.",
      symbol: "V",
      price: 241.91,
      change: 1.87,
      marketCap: "510.67B",
      history: [239, 240, 241, 242, 241, 242, 241],
    },
    {
      name: "Samsung Electronics",
      symbol: "SSNLF",
      price: 65.32,
      change: -0.15,
      marketCap: "422.78B",
      history: [64, 65, 66, 65, 65, 66, 65],
    },
    {
      name: "Procter & Gamble",
      symbol: "PG",
      price: 151.22,
      change: 0.91,
      marketCap: "359.45B",
      history: [150, 151, 152, 151, 151, 152, 151],
    },
    {
      name: "JPMorgan Chase",
      symbol: "JPM",
      price: 141.23,
      change: 0.54,
      marketCap: "482.56B",
      history: [140, 141, 142, 141, 141, 142, 141],
    },
    {
      name: "Intel Corp.",
      symbol: "INTC",
      price: 34.58,
      change: -0.12,
      marketCap: "144.23B",
      history: [34, 34.5, 35, 34.8, 34.6, 34.9, 34.5],
    },
    {
      name: "Adobe Inc.",
      symbol: "ADBE",
      price: 569.21,
      change: 4.21,
      marketCap: "261.54B",
      history: [560, 565, 562, 567, 569, 570, 569],
    },
    {
      name: "Netflix Inc.",
      symbol: "NFLX",
      price: 404.58,
      change: -1.32,
      marketCap: "180.34B",
      history: [400, 402, 401, 405, 404, 406, 404],
    },
    {
      name: "Salesforce Inc.",
      symbol: "CRM",
      price: 201.76,
      change: 1.58,
      marketCap: "198.43B",
      history: [198, 200, 201, 202, 201, 203, 201],
    },
    {
      name: "PepsiCo Inc.",
      symbol: "PEP",
      price: 182.32,
      change: -0.98,
      marketCap: "250.32B",
      history: [180, 181, 182, 183, 182, 184, 182],
    },
    {
      name: "Coca-Cola Co.",
      symbol: "KO",
      price: 58.67,
      change: 0.23,
      marketCap: "252.89B",
      history: [58, 58.5, 58.3, 58.7, 58.6, 58.8, 58.7],
    },
    {
      name: "Pfizer Inc.",
      symbol: "PFE",
      price: 35.87,
      change: -0.34,
      marketCap: "200.45B",
      history: [35.5, 36, 35.8, 36.2, 35.9, 36.3, 35.8],
    },
    {
      name: "ExxonMobil",
      symbol: "XOM",
      price: 118.32,
      change: 2.18,
      marketCap: "489.23B",
      history: [115, 116, 117, 118, 119, 118, 118],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStock, setSelectedStock] = useState(stockData[0]); // Default to the first stock
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const filteredStocks = stockData.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (stock) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fa",
      }}
    >
      <h1
        style={{ color: "#3d4b61", textAlign: "center", marginBottom: "20px" }}
      >
        Stock List with Graphs
      </h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "100%",
          maxWidth: "400px",
          display: "block",
          margin: "0 auto 20px",
          outline: "none",
          backgroundColor: "#fff",
        }}
      />
      <StockTable
        stocks={filteredStocks}
        setSelectedStock={openModal}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "0 20px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Added shadow to the table container
          borderRadius: "8px", // Rounded corners for the table container
        }}
      />

      {/* Modal to show the stock graph */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Stock Graph Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
            width: "80%",
            margin: "auto",
            maxHeight: "80%",
            overflowY: "auto",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow for the modal
          },
        }}
      >
        {/* Close Button at the Top */}
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#ff6347",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "50%",
            fontSize: "16px",
          }}
        >
          ×
        </button>
        <StockGraph stock={selectedStock} />
      </Modal>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import StockTable from "./components/StockTable";
// import StockGraph from "./components/StockGraph";

// const App = () => {
//   const stockData = [
//     {
//       name: "Apple Inc.",
//       symbol: "AAPL",
//       price: 174.75,
//       change: -0.65,
//       marketCap: "2.79T",
//       history: [172, 175, 174, 176, 174, 178, 174],
//     },
//     {
//       name: "Microsoft Corp.",
//       symbol: "MSFT",
//       price: 331.35,
//       change: 1.15,
//       marketCap: "2.47T",
//       history: [328, 330, 331, 332, 333, 330, 331],
//     },
//     {
//       name: "Amazon.com Inc.",
//       symbol: "AMZN",
//       price: 139.68,
//       change: 2.1,
//       marketCap: "1.43T",
//       history: [138, 137, 139, 140, 141, 139, 139],
//     },
//     {
//       name: "Google LLC",
//       symbol: "GOOGL",
//       price: 129.54,
//       change: 0.43,
//       marketCap: "1.72T",
//       history: [127, 129, 128, 130, 129, 130, 129],
//     },
//     {
//       name: "Tesla Inc.",
//       symbol: "TSLA",
//       price: 227.03,
//       change: -4.32,
//       marketCap: "738.54B",
//       history: [225, 228, 227, 229, 230, 228, 227],
//     },
//     {
//       name: "Meta Platforms",
//       symbol: "META",
//       price: 328.23,
//       change: 3.28,
//       marketCap: "846.54B",
//       history: [320, 322, 325, 326, 328, 330, 328],
//     },
//     {
//       name: "NVIDIA Corp.",
//       symbol: "NVDA",
//       price: 408.21,
//       change: 7.22,
//       marketCap: "1.03T",
//       history: [400, 405, 403, 407, 408, 410, 408],
//     },
//     {
//       name: "Alibaba Group",
//       symbol: "BABA",
//       price: 89.12,
//       change: -1.02,
//       marketCap: "231.45B",
//       history: [88, 89, 87, 90, 89, 88, 89],
//     },
//     {
//       name: "Berkshire Hathaway",
//       symbol: "BRK.B",
//       price: 510.43,
//       change: 0.62,
//       marketCap: "786.23B",
//       history: [505, 508, 507, 509, 510, 511, 510],
//     },
//     {
//       name: "Johnson & Johnson",
//       symbol: "JNJ",
//       price: 153.82,
//       change: -0.54,
//       marketCap: "403.45B",
//       history: [152, 154, 153, 154, 153, 154, 153],
//     },
//     {
//       name: "Visa Inc.",
//       symbol: "V",
//       price: 241.91,
//       change: 1.87,
//       marketCap: "510.67B",
//       history: [239, 240, 241, 242, 241, 242, 241],
//     },
//     {
//       name: "Samsung Electronics",
//       symbol: "SSNLF",
//       price: 65.32,
//       change: -0.15,
//       marketCap: "422.78B",
//       history: [64, 65, 66, 65, 65, 66, 65],
//     },
//     {
//       name: "Procter & Gamble",
//       symbol: "PG",
//       price: 151.22,
//       change: 0.91,
//       marketCap: "359.45B",
//       history: [150, 151, 152, 151, 151, 152, 151],
//     },
//     {
//       name: "JPMorgan Chase",
//       symbol: "JPM",
//       price: 141.23,
//       change: 0.54,
//       marketCap: "482.56B",
//       history: [140, 141, 142, 141, 141, 142, 141],
//     },
//     {
//       name: "Intel Corp.",
//       symbol: "INTC",
//       price: 34.58,
//       change: -0.12,
//       marketCap: "144.23B",
//       history: [34, 34.5, 35, 34.8, 34.6, 34.9, 34.5],
//     },
//     {
//       name: "Adobe Inc.",
//       symbol: "ADBE",
//       price: 569.21,
//       change: 4.21,
//       marketCap: "261.54B",
//       history: [560, 565, 562, 567, 569, 570, 569],
//     },
//     {
//       name: "Netflix Inc.",
//       symbol: "NFLX",
//       price: 404.58,
//       change: -1.32,
//       marketCap: "180.34B",
//       history: [400, 402, 401, 405, 404, 406, 404],
//     },
//     {
//       name: "Salesforce Inc.",
//       symbol: "CRM",
//       price: 201.76,
//       change: 1.58,
//       marketCap: "198.43B",
//       history: [198, 200, 201, 202, 201, 203, 201],
//     },
//     {
//       name: "PepsiCo Inc.",
//       symbol: "PEP",
//       price: 182.32,
//       change: -0.98,
//       marketCap: "250.32B",
//       history: [180, 181, 182, 183, 182, 184, 182],
//     },
//     {
//       name: "Coca-Cola Co.",
//       symbol: "KO",
//       price: 58.67,
//       change: 0.23,
//       marketCap: "252.89B",
//       history: [58, 58.5, 58.3, 58.7, 58.6, 58.8, 58.7],
//     },
//     {
//       name: "Pfizer Inc.",
//       symbol: "PFE",
//       price: 35.87,
//       change: -0.34,
//       marketCap: "200.45B",
//       history: [35.5, 36, 35.8, 36.2, 35.9, 36.3, 35.8],
//     },
//     {
//       name: "ExxonMobil",
//       symbol: "XOM",
//       price: 118.32,
//       change: 2.18,
//       marketCap: "489.23B",
//       history: [115, 116, 117, 118, 119, 118, 118],
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedStock, setSelectedStock] = useState(stockData[0]); // Default to the first stock

//   const filteredStocks = stockData.filter(
//     (stock) =>
//       stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Stock List with Graphs</h1>
//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       <StockTable stocks={filteredStocks} setSelectedStock={setSelectedStock} />
//       <StockGraph stock={selectedStock} />
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const App = () => {
//   const stockData = [
//     {
//       name: "Apple Inc.",
//       symbol: "AAPL",
//       price: 174.75,
//       change: -0.65,
//       marketCap: "2.79T",
//       history: [172, 175, 174, 176, 174, 178, 174],
//     },
//     {
//       name: "Microsoft Corp.",
//       symbol: "MSFT",
//       price: 331.35,
//       change: 1.15,
//       marketCap: "2.47T",
//       history: [328, 330, 331, 332, 333, 330, 331],
//     },
//     {
//       name: "Amazon.com Inc.",
//       symbol: "AMZN",
//       price: 139.68,
//       change: 2.1,
//       marketCap: "1.43T",
//       history: [138, 137, 139, 140, 141, 139, 139],
//     },
//     {
//       name: "Google LLC",
//       symbol: "GOOGL",
//       price: 129.54,
//       change: 0.43,
//       marketCap: "1.72T",
//       history: [127, 129, 128, 130, 129, 130, 129],
//     },
//     {
//       name: "Tesla Inc.",
//       symbol: "TSLA",
//       price: 227.03,
//       change: -4.32,
//       marketCap: "738.54B",
//       history: [225, 228, 227, 229, 230, 228, 227],
//     },
//     {
//       name: "Meta Platforms",
//       symbol: "META",
//       price: 328.23,
//       change: 3.28,
//       marketCap: "846.54B",
//       history: [320, 322, 325, 326, 328, 330, 328],
//     },
//     {
//       name: "NVIDIA Corp.",
//       symbol: "NVDA",
//       price: 408.21,
//       change: 7.22,
//       marketCap: "1.03T",
//       history: [400, 405, 403, 407, 408, 410, 408],
//     },
//     {
//       name: "Alibaba Group",
//       symbol: "BABA",
//       price: 89.12,
//       change: -1.02,
//       marketCap: "231.45B",
//       history: [88, 89, 87, 90, 89, 88, 89],
//     },
//     {
//       name: "Berkshire Hathaway",
//       symbol: "BRK.B",
//       price: 510.43,
//       change: 0.62,
//       marketCap: "786.23B",
//       history: [505, 508, 507, 509, 510, 511, 510],
//     },
//     {
//       name: "Johnson & Johnson",
//       symbol: "JNJ",
//       price: 153.82,
//       change: -0.54,
//       marketCap: "403.45B",
//       history: [152, 154, 153, 154, 153, 154, 153],
//     },
//     {
//       name: "Visa Inc.",
//       symbol: "V",
//       price: 241.91,
//       change: 1.87,
//       marketCap: "510.67B",
//       history: [239, 240, 241, 242, 241, 242, 241],
//     },
//     {
//       name: "Samsung Electronics",
//       symbol: "SSNLF",
//       price: 65.32,
//       change: -0.15,
//       marketCap: "422.78B",
//       history: [64, 65, 66, 65, 65, 66, 65],
//     },
//     {
//       name: "Procter & Gamble",
//       symbol: "PG",
//       price: 151.22,
//       change: 0.91,
//       marketCap: "359.45B",
//       history: [150, 151, 152, 151, 151, 152, 151],
//     },
//     {
//       name: "JPMorgan Chase",
//       symbol: "JPM",
//       price: 141.23,
//       change: 0.54,
//       marketCap: "482.56B",
//       history: [140, 141, 142, 141, 141, 142, 141],
//     },
//     {
//       name: "Intel Corp.",
//       symbol: "INTC",
//       price: 34.58,
//       change: -0.12,
//       marketCap: "144.23B",
//       history: [34, 34.5, 35, 34.8, 34.6, 34.9, 34.5],
//     },
//     {
//       name: "Adobe Inc.",
//       symbol: "ADBE",
//       price: 569.21,
//       change: 4.21,
//       marketCap: "261.54B",
//       history: [560, 565, 562, 567, 569, 570, 569],
//     },
//     {
//       name: "Netflix Inc.",
//       symbol: "NFLX",
//       price: 404.58,
//       change: -1.32,
//       marketCap: "180.34B",
//       history: [400, 402, 401, 405, 404, 406, 404],
//     },
//     {
//       name: "Salesforce Inc.",
//       symbol: "CRM",
//       price: 201.76,
//       change: 1.58,
//       marketCap: "198.43B",
//       history: [198, 200, 201, 202, 201, 203, 201],
//     },
//     {
//       name: "PepsiCo Inc.",
//       symbol: "PEP",
//       price: 182.32,
//       change: -0.98,
//       marketCap: "250.32B",
//       history: [180, 181, 182, 183, 182, 184, 182],
//     },
//     {
//       name: "Coca-Cola Co.",
//       symbol: "KO",
//       price: 58.67,
//       change: 0.23,
//       marketCap: "252.89B",
//       history: [58, 58.5, 58.3, 58.7, 58.6, 58.8, 58.7],
//     },
//     {
//       name: "Pfizer Inc.",
//       symbol: "PFE",
//       price: 35.87,
//       change: -0.34,
//       marketCap: "200.45B",
//       history: [35.5, 36, 35.8, 36.2, 35.9, 36.3, 35.8],
//     },
//     {
//       name: "ExxonMobil",
//       symbol: "XOM",
//       price: 118.32,
//       change: 2.18,
//       marketCap: "489.23B",
//       history: [115, 116, 117, 118, 119, 118, 118],
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedStock, setSelectedStock] = useState(stockData[0]); // Default to the first stock

//   const filteredStocks = stockData.filter(
//     (stock) =>
//       stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const stockGraphData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: `${selectedStock.name} Price (USD)`,
//         data: selectedStock.history,
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.3,
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Stock List with Graphs</h1>
//       <input
//         type="text"
//         placeholder="Search by stock name or symbol..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "100%",
//           marginBottom: "20px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//         }}
//       />
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           marginBottom: "20px",
//         }}
//       >
//         <thead>
//           <tr>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Name
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Symbol
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Price
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Change
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Market Cap
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStocks.length > 0 ? (
//             filteredStocks.map((stock, index) => (
//               <tr
//                 key={index}
//                 onClick={() => setSelectedStock(stock)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.name}
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.symbol}
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   ${stock.price.toFixed(2)}
//                 </td>
//                 <td
//                   style={{
//                     padding: "10px",
//                     borderBottom: "1px solid #ddd",
//                     color: stock.change > 0 ? "green" : "red",
//                   }}
//                 >
//                   {stock.change > 0
//                     ? `+${stock.change.toFixed(2)}`
//                     : stock.change.toFixed(2)}
//                   %
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.marketCap}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
//                 No stocks found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div style={{ marginTop: "30px" }}>
//         <h2>{selectedStock.name} - Price Trends</h2>
//         <Line data={stockGraphData} />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const App = () => {
//   const stockData = [
//     {
//       name: "Apple Inc.",
//       symbol: "AAPL",
//       price: 174.75,
//       change: -0.65,
//       marketCap: "2.79T",
//       history: [172, 175, 174, 176, 174, 178, 174],
//     },
//     {
//       name: "Microsoft Corp.",
//       symbol: "MSFT",
//       price: 331.35,
//       change: 1.15,
//       marketCap: "2.47T",
//       history: [328, 330, 331, 332, 333, 330, 331],
//     },
//     {
//       name: "Amazon.com Inc.",
//       symbol: "AMZN",
//       price: 139.68,
//       change: 2.1,
//       marketCap: "1.43T",
//       history: [138, 137, 139, 140, 141, 139, 139],
//     },
//     // Add more stocks as needed
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedStock, setSelectedStock] = useState(stockData[0]); // Default to the first stock

//   // Filter stocks based on search
//   const filteredStocks = stockData.filter(
//     (stock) =>
//       stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const stockGraphData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: `${selectedStock.name} Price (USD)`,
//         data: selectedStock.history,
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.3,
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Stock List with Graphs</h1>
//       <input
//         type="text"
//         placeholder="Search by stock name or symbol..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "100%",
//           marginBottom: "20px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//         }}
//       />
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           marginBottom: "20px",
//         }}
//       >
//         <thead>
//           <tr>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Name
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Symbol
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Price
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Change
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Market Cap
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStocks.length > 0 ? (
//             filteredStocks.map((stock, index) => (
//               <tr
//                 key={index}
//                 onClick={() => setSelectedStock(stock)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.name}
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.symbol}
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   ${stock.price.toFixed(2)}
//                 </td>
//                 <td
//                   style={{
//                     padding: "10px",
//                     borderBottom: "1px solid #ddd",
//                     color: stock.change > 0 ? "green" : "red",
//                   }}
//                 >
//                   {stock.change > 0
//                     ? `+${stock.change.toFixed(2)}`
//                     : stock.change.toFixed(2)}
//                   %
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.marketCap}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
//                 No stocks found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div style={{ marginTop: "30px" }}>
//         <h2>{selectedStock.name} - Price Trends</h2>
//         <Line data={stockGraphData} />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const stockData = [
//     {
//       name: "Apple Inc.",
//       symbol: "AAPL",
//       price: 174.75,
//       change: -0.65,
//       marketCap: "2.79T",
//     },
//     {
//       name: "Microsoft Corp.",
//       symbol: "MSFT",
//       price: 331.35,
//       change: 1.15,
//       marketCap: "2.47T",
//     },
//     {
//       name: "Amazon.com Inc.",
//       symbol: "AMZN",
//       price: 139.68,
//       change: 2.1,
//       marketCap: "1.43T",
//     },
//     {
//       name: "Google LLC",
//       symbol: "GOOGL",
//       price: 129.54,
//       change: 0.43,
//       marketCap: "1.72T",
//     },
//     {
//       name: "Tesla Inc.",
//       symbol: "TSLA",
//       price: 227.03,
//       change: -4.32,
//       marketCap: "738.54B",
//     },
//     {
//       name: "Meta Platforms",
//       symbol: "META",
//       price: 328.23,
//       change: 3.28,
//       marketCap: "846.54B",
//     },
//     {
//       name: "NVIDIA Corp.",
//       symbol: "NVDA",
//       price: 408.21,
//       change: 7.22,
//       marketCap: "1.03T",
//     },
//     {
//       name: "Alibaba Group",
//       symbol: "BABA",
//       price: 89.12,
//       change: -1.02,
//       marketCap: "231.45B",
//     },
//     {
//       name: "Berkshire Hathaway",
//       symbol: "BRK.B",
//       price: 510.43,
//       change: 0.62,
//       marketCap: "786.23B",
//     },
//     {
//       name: "Johnson & Johnson",
//       symbol: "JNJ",
//       price: 153.82,
//       change: -0.54,
//       marketCap: "403.45B",
//     },
//     {
//       name: "Visa Inc.",
//       symbol: "V",
//       price: 241.91,
//       change: 1.87,
//       marketCap: "510.67B",
//     },
//     {
//       name: "Samsung Electronics",
//       symbol: "SSNLF",
//       price: 65.32,
//       change: -0.15,
//       marketCap: "422.78B",
//     },
//     {
//       name: "Procter & Gamble",
//       symbol: "PG",
//       price: 151.22,
//       change: 0.91,
//       marketCap: "359.45B",
//     },
//     {
//       name: "JPMorgan Chase",
//       symbol: "JPM",
//       price: 141.23,
//       change: 0.54,
//       marketCap: "482.56B",
//     },
//     {
//       name: "Intel Corp.",
//       symbol: "INTC",
//       price: 34.58,
//       change: -0.12,
//       marketCap: "144.23B",
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter stocks based on search
//   const filteredStocks = stockData.filter(
//     (stock) =>
//       stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Stock List</h1>
//       <input
//         type="text"
//         placeholder="Search by stock name or symbol..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "100%",
//           marginBottom: "20px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//         }}
//       />
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           marginBottom: "20px",
//         }}
//       >
//         <thead>
//           <tr>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Name
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Symbol
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Price
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Change
//             </th>
//             <th
//               style={{
//                 textAlign: "left",
//                 padding: "10px",
//                 borderBottom: "2px solid #ddd",
//               }}
//             >
//               Market Cap
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStocks.length > 0 ? (
//             filteredStocks.map((stock, index) => (
//               <tr key={index}>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.name}
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.symbol}
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   ${stock.price.toFixed(2)}
//                 </td>
//                 <td
//                   style={{
//                     padding: "10px",
//                     borderBottom: "1px solid #ddd",
//                     color: stock.change > 0 ? "green" : "red",
//                   }}
//                 >
//                   {stock.change > 0
//                     ? `+${stock.change.toFixed(2)}`
//                     : stock.change.toFixed(2)}
//                   %
//                 </td>
//                 <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                   {stock.marketCap}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
//                 No stocks found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
