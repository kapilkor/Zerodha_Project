import React from 'react'

//props to just like input data
const RightSection = ({ imageUrl, title, description, tryDemo}) => {
  return (
   <div className='container mt-3 mb-5 p-3'>
  <div className='row align-items-center'>

    {/* Left Side (Text Content) */}
    <div className='col-md-6 p-5'>
      <h1>{title}</h1>
      <p>{description}</p>

      <div className='mt-3'>
        <a href={tryDemo} className="text-decoration-none">
          Try Demo <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    {/* Right Side (Image) */}
    <div className='col-md-6 text-center p-3'>
      <img src={imageUrl} alt={title} className='img-fluid' />
    </div>

  </div>
</div>

  )
}

export default RightSection
