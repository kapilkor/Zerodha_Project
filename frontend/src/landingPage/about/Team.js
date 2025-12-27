import React from 'react'

const Team = () => {
  return (
    <div className='container'>
      <div className='row text-center my-5 py-5  border-top'> 
        <h1 className="fs-4 mt-5 semibold">People</h1>
       
      </div>
      <div className='row '>
        <div className=' about col-md-6 text-center mb-5 mt-4 p-5'>
         <img ></img>
         <p></p>
         <p></p>
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

export default Team
