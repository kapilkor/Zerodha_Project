import React from 'react'

const Hero = () => {
  return (
    <div className='container mt-5'>
      <div className='row  text-center  fs-5'>
        <div className='text-center mt-5 mb-5 p-4'>
          <h2 className='text-muted'>Charges</h2>
          <p className='text-muted fs80'>List of all charges and taxes</p>
        </div>
      </div>
      <div className='text-center mt-5 p-5'>
  <div className="row d-flex justify-content-evenly text-center " > {/* g-4 adds spacing */}

          <div className='col' >
            <img src='/media/media/pricingEquity.svg' className="img-fluid mb-1" style={{ width: "75%" }} alt="pricing" />
          <p className='text-muted fs-6'>List of all charges and taxes</p>
            <h2 className='fs-3 mt-3'>Free equity delivery</h2>
            <p className='mb-0 text-muted fs-6 p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='col'>
            <img src='/media/media/intradayTrades.svg' className="img-fluid mb-1" style={{ width: "75%" }} alt="pricing" />
            <h2 className='fs-3 mt-3'>Intraday and F&O trades</h2>
            <p className='mb-4 text-muted fs-6 p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col'>
            <img src='/media/media/pricingEquity.svg' className="img-fluid mb-1" style={{ width: "75%" }} alt="pricing" />
            <h2 className='fs-3 mt-3'>Free direct MF</h2>

            <p className='mb-0 text-muted fs-6 '>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </div>

    



  )
}

export default Hero
