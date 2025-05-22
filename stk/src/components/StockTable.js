import React from "react";

const StockTable = ({ stocks, setSelectedStock }) => {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", borderRadius: "8px" }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "left",
            }}
          >
            Company
          </th>
          <th
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "left",
            }}
          >
            Symbol
          </th>
          <th
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "right",
            }}
          >
            Price
          </th>
          <th
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "right",
            }}
          >
            Change
          </th>
          <th
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "right",
            }}
          >
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => (
          <tr
            key={stock.symbol}
            onClick={() => setSelectedStock(stock)}
            style={{
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#e1f7d5", // Alternate row colors
              cursor: "pointer", // Change cursor to pointer on hover
            }}
          >
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              {stock.name}
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              {stock.symbol}
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                textAlign: "right",
              }}
            >
              ${stock.price}
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                textAlign: "right",
                color:
                  stock.change > 0
                    ? "green"
                    : stock.change < 0
                    ? "red"
                    : "black", // Green for positive, red for negative
              }}
            >
              {stock.change > 0 ? `+${stock.change}` : stock.change}
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                textAlign: "right",
              }}
            >
              {stock.marketCap}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;

// import React from "react";

// const StockTable = ({ stocks, setSelectedStock }) => {
//   return (
//     <table
//       style={{
//         width: "100%",
//         borderCollapse: "collapse",
//         marginBottom: "20px",
//       }}
//     >
//       <thead>
//         <tr>
//           <th
//             style={{
//               textAlign: "left",
//               padding: "10px",
//               borderBottom: "2px solid #ddd",
//             }}
//           >
//             Name
//           </th>
//           <th
//             style={{
//               textAlign: "left",
//               padding: "10px",
//               borderBottom: "2px solid #ddd",
//             }}
//           >
//             Symbol
//           </th>
//           <th
//             style={{
//               textAlign: "left",
//               padding: "10px",
//               borderBottom: "2px solid #ddd",
//             }}
//           >
//             Price
//           </th>
//           <th
//             style={{
//               textAlign: "left",
//               padding: "10px",
//               borderBottom: "2px solid #ddd",
//             }}
//           >
//             Change
//           </th>
//           <th
//             style={{
//               textAlign: "left",
//               padding: "10px",
//               borderBottom: "2px solid #ddd",
//             }}
//           >
//             Market Cap
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {stocks.length > 0 ? (
//           stocks.map((stock, index) => (
//             <tr
//               key={index}
//               onClick={() => setSelectedStock(stock)}
//               style={{ cursor: "pointer" }}
//             >
//               <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                 {stock.name}
//               </td>
//               <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                 {stock.symbol}
//               </td>
//               <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                 ${stock.price.toFixed(2)}
//               </td>
//               <td
//                 style={{
//                   padding: "10px",
//                   borderBottom: "1px solid #ddd",
//                   color: stock.change > 0 ? "green" : "red",
//                 }}
//               >
//                 {stock.change > 0
//                   ? `+${stock.change.toFixed(2)}`
//                   : stock.change.toFixed(2)}
//                 %
//               </td>
//               <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
//                 {stock.marketCap}
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
//               No stocks found
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// };

// export default StockTable;
