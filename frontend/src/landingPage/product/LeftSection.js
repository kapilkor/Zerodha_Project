import React from 'react'

//props to just like input data
const LeftSection = ({ imageUrl, title, description, tryDemo, learnMore, gogstore, appstore }) => {
  return (
    <div className='container mt-4 mb-3 p-3'>
      <div className='row align-items-center'>
        <div className='col-md-1'></div>
        <div className='col-md-6 text-end p-3'>
          <img src={imageUrl} alt={title} className='img-fluid' />
        </div>
        <div className='col-md-5 p-5'>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='mt-3'>
            <a href={tryDemo} className="text-decoration-none me-4">
              Try Demo <i className="fa fa-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-arrow-right"></i>
            </a>
          </div>

          <div className='mt-4 d-flex align-items-center'>
            <a href={gogstore} className='me-2'>
              <img src="media/media/googlePlayBadge.svg" alt="Google Play" className="img-fluid" />
            </a>
            <a href={appstore}>
              <img src="media/media/appstoreBadge.svg" alt="App Store" className="img-fluid" />
            </a>
          </div>
        </div>

      </div>
    </div>

  )
}

export default LeftSection
