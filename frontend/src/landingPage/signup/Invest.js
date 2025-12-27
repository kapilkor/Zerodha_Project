import React from 'react';

function Invest() {
  const handleSignupClick = () => {
    window.location.href = "http://localhost:3000/signup";
  };

  return (
    <div className="container mt-5 p-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/signup.png"
            alt="Signup"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="mb-3 fs-2">Invest in everything</h1>
          <h6 className="mb-3">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </h6>
          <button
            onClick={handleSignupClick}
            style={{ width: "30%", margin: "0" }}
            className="p-2 btn btn-primary fs-5 mb-5"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invest;