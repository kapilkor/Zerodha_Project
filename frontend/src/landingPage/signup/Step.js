import React from 'react';

function Step() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mt-5 border-top text-center">
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <div className="col-4 p-5 mt-5">
          <img
            src="media/largestBroker.svg"
            alt="Largest Broker"
            style={{ width: "90%" }}
          />
          <p className="mt-3">
            India's <br />
            largest broker
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img
            src="media/lock.svg"
            alt="Trusted"
            style={{ width: "90%" }}
          />
          <p className="mt-3">
            Trusted by <br />
            millions of Indians
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img
            src="media/openAccount.svg"
            alt="Open Account"
            style={{ width: "90%" }}
          />
          <p className="mt-3">
            Open account <br />
            in 10 minutes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step;