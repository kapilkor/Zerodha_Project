import React from 'react'

const Efound = () => {
  return (
    <div className='container p-5 mb-4'>
      <div className='row text-center'>
        <h1 className='mt-5 '>404 Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button
          className='btn btn-primary p-2 fs-5 mb-5'
          style={{ width: "20%", margin: "0 auto" }}
        >
          <a href="/" className="text-white text-decoration-none">Go to Home</a>
        </button>
      </div>
    </div>
  )
}

export default Efound
