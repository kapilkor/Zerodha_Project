import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className='container mt-5 offset-md-1 '>
        <div className='row'>
          <div className='col-5 fs-5'>
            <div className='mt-3 '>
              <h4 className=' mb-3 fs-2'>Unbeatable pricing</h4>
              <p className=' mt-4'>
                We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
              </p>
               <a href='#' style={{ textDecoration: "none" }}>See pricing <i class="fa fa-arrow-right " aria-hidden="true"></i></a>
            </div>
          </div>
          
          <div className='col-7 text-center'>
            <div className="row g-3 mt-3 " > {/* g-4 adds spacing */}

              <div className='col-4' >
                <img src='\media\media\pricingEquity.svg' className="img-fluid mb-1" style={{ width: "45%" }} alt="pricing" />
                <p className='mb-0'>Free account opening</p>
              </div>

              <div className='col-4'>
                <img src='\media\media\pricingEquity.svg' className="img-fluid mb-1"  style={{ width: "45%" }} alt="pricing" />
                <p className='mb-0'>Free account opening</p>
              </div>

              <div className='col-4'>
                <img src='/media/media/intradayTrades.svg' className="img-fluid mb-1" style={{ width: "45%" }} alt="pricing" />
                <p className='mb-4'>Free account opening</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default Pricing
