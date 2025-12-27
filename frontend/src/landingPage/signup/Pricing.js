import React from 'react';

function Pricing() {
  return (
    <div className="container">
      <div className="row p-5 border-top text-center">
        <h1 className="mb-5 mt-5">Unbeatable pricing</h1>
        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg" alt="Free equity delivery" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/intradayTrades.svg" alt="Intraday and F&O trades" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg" alt="Free direct MF" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;