import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row align-items-center'>

        <div className='col-5 p-5'>
          <img src="/media/media/largestBroker2.svg" className='img-fluid' alt="Largest Broker" />
        </div>

        <div className='col-1'></div>

        <div className='col-6'>
          <h1 className='mb-5 fw-semibold fs-2'>Free and open market education</h1>

          <div className='mb-5'>
            <p className='mb-3'>
              Varsity, the largest online stock market education book in India, covering everything
              from basics to advanced trading.
            </p>
            <a href='#' className='text-decoration-none'>Varsity <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>

          <div className=''>
            <p className='mb-3'>
              TradingQ&A, the most popular trading and investment community in India for all market related queries.
            </p>
            <a href='#' className='text-decoration-none'>TradingQ&A <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>

        </div>
        

      </div>
    </div>
  )
}

export default Education
