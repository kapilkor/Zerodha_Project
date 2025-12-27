import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row text-center my-5 py-5 border-bottom'> 
        <h1 className="fs-4 mt-5 semibold">We pioneered the discount broking model in India.</h1>
        <h1 className="fs-4  mb-5 semibold" >Now, we are breaking ground with our technology.</h1>
      </div>
      <div className='row '>
        <div className=' about col-md-6 text-center mb-5 mt-2 p-5'>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className=' about col-md-6 text-center mb-5 text-start mt-4 p-5'>
          <p>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>blog</a> or see what the media is <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>saying about</a> us or learn more about our business and product <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>philosophies</a>.
          </p>
        </div>
      </div>  
    </div>
  )
}

export default Hero
