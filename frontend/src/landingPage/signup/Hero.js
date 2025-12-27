import React from 'react';

const Hero = () => {
  
  const handleSignupClick = () => {
    window.location.href = "http://localhost:3001/login";
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Signup now</h1>
        <h3 className="text-muted mt-3 fs-4">
          Or track your existing application.
        </h3>
        <br />
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleSignupClick}
            className="p-2 btn btn-primary fs-5"
            style={{ minWidth: "150px" }}
          >
            Sign up
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;