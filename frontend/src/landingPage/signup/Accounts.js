import React from 'react';

function Accounts() {
  const handleSignupClick = () => {
    window.location.href = "http://localhost:3000/signup";
  };

  return (
    <div className="container mt-5">
      <div className="row text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col-6 p-5">
          <h3 className="mb-5">The Zerodha universe</h3>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha Broking Ltd.
            </a>
            <p>Our flagship trading platform</p>
          </div>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha Mutual Fund
            </a>
            <p>Modern & intuitive APIs</p>
          </div>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha Investments
            </a>
            <p>Investment research platform</p>
          </div>
        </div>
        <div className="col-6 p-5">
          <h3 className="mb-5">Open a Zerodha account</h3>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <br />
          <button
            onClick={handleSignupClick}
            className="p-2 btn btn-primary fs-5 mb-5"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accounts;