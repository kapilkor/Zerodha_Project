import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings", { withCredentials: true })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Fetch holdings error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h3>Loading holdings...</h3>;

  if (allHoldings.length === 0)
    return (
      <h4 style={{ padding: "20px" }}>
        No Holdings Found ❌  
        Add sample data here 👉 
        <a 
          href="http://localhost:3002/addHoldings"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >Insert Holdings Data</a>
      </h4>
    );

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );
  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );
  const totalPnL = currentValue - totalInvestment;
  const totalPnLPercent = ((totalPnL / totalInvestment) * 100).toFixed(2);

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(54,162,235,0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* Table Section */}
   {/* Table Section */}
<div className="order-table" style={{ maxHeight: "350px", overflowY: "scroll" }}>
  <table>
    <thead>
      <tr>
        <th>Instrument</th>
        <th>Qty.</th>
        <th>Avg. Cost</th>
        <th>LTP</th>
        <th>Cur. Val</th>
        <th>P&L</th>
        <th>Net Chg.</th>
        <th>Day Chg.</th>
      </tr>
    </thead>

    <tbody>
      {allHoldings.map((stock, index) => {
        const curValue = stock.price * stock.qty;
        const pnl = curValue - stock.avg * stock.qty;
        const pnlClass = pnl >= 0 ? "profit" : "loss";
        const dayClass = stock.day.includes("-") ? "loss" : "profit";

        return (
          <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curValue.toFixed(2)}</td>
            <td className={pnlClass}>{pnl.toFixed(2)}</td>
            <td className={pnlClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

      {/* Summary Section */}
      <div className="row summary">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}
          </h5>
          <p>Total Investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toFixed(2)}
          </h5>
          <p>Current Value</p>
        </div>
        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            {totalPnL.toFixed(2)} ({totalPnL >= 0 ? "+" : ""}
            {totalPnLPercent}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Graph */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
