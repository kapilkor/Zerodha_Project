import React from 'react'

const Universe = () => {
  const handleSignupClick = () => {
    window.location.href = "http://localhost:3000/signup";
  };

  return (
    <div className='container'>
      <div className='row text-muted text-center p-5'>
        <div className='mb-5'>
          <h4>The Zerodha Universe</h4>
          <p className='fw-normal text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="container text-center">
          <div className='row'>

            <div className='col-4 p-5'>
              <img src="media/media/zerodhaFundhouse.png" className="img-fluid" style={{ width: "75%" }} alt="..." />
              <p>Explore the vast ecosystem of Zerodha's products and services.</p>
            </div>

            <div className='col-4 p-5'>
              <img src="media/media/streakLogo.png" className="img-fluid" style={{ width: "75%" }} alt="..." />
              <p>Explore the vast ecosystem of Zerodha's products and services.</p>
            </div>

            <div className='col-4 p-5'>
              <img src="media/media/streakLogo.png" className="img-fluid" style={{ width: "75%" }} alt="..." />
              <p>Explore the vast ecosystem of Zerodha's products and services.</p>
            </div>

            <div className='col-4 p-5'>
              <img src="media/media/sensibullLogo.svg" className="img-fluid" style={{ width: "75%" }} alt="..." />
              <p>Explore the vast ecosystem of Zerodha's products and services.</p>
            </div>

            <div className='col-4 p-5'>
              <img src="media/media/smallcaseLogo.png" className="img-fluid" style={{ width: "75%" }} alt="..." />
              <p>Explore the vast ecosystem of Zerodha's products and services.</p>
            </div>

            <div className='col-4 p-5'>
              <img src="media/media/dittoLogo.png" className="img-fluid" style={{ width: "75%" }} alt="..." />
              <p>Explore the vast ecosystem of Zerodha's products and services.</p>
            </div>

          </div>
        </div>

        <div><button
          className='btn btn-primary p-2 fs-5 mb-5'
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Signup for free
        </button></div>
      </div>
    </div>
  )
}

export default Universe
