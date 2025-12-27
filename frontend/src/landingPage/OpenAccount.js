import React from 'react'

const OpenAccount = () => {
  const handleSignupClick = () => {
    window.location.href = "http://localhost:3000/signup";
  };

  return (

      <div className='container p-5 mb-4'>
                <div className='row text-center'>
                   
                    <h1 className='mt-5 '>Open Zerodha Account</h1>
                    <p>Modern platform and apps,  ₹0 investments, and flat  ₹20 intraday and <b>F&O trades</b></p>
                    <button
                        className='btn btn-primary p-2 fs-5 mb-5'
                        style={{ width: "20%", margin: "0 auto" }}
                        onClick={handleSignupClick}
                    >
                        Sign up Now
                    </button>
                </div>
            </div>
   
  )
}

export default OpenAccount
