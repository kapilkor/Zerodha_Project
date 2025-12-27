import React from 'react'

const Trust = () => {
  return (
    <div className='container mt-3 mb-5 p-3 offset-md-1'>
      <div className='row'>

        <div className='col-5 '>

          {/* Increased space below heading: mb-4 → mb-5 */}
          <h1 className='mb-5 fw-semibold fs-2'>Trust with confidence</h1>

          {/* Increased block spacing: mt-3 mb-4 → mt-4 mb-5 */}
          <div className='mt-4 mb-3'>
            <h1 className='fw-semibold mb-2 fs-4'>Customer-first always</h1>
            <p className='fw-normal mt-2'>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
              making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className='mt-4 mb-3'>
            <h1 className='fw-semibold mb-2 fs-4'>No spam or gimmicks</h1>
            <p className='fw-normal mt-2'>
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use
              at your pace, the way you like. Our philosophies.
            </p>
          </div>

          <div className='mt-4 mb-3'>
            <h1 className='fw-semibold mb-2 fs-4'>The Zerodha universe</h1>
            <p className='fw-normal mt-2'>
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
              services specific to your needs.
            </p>
          </div>

          <div className='mt-4 mb-3'>
            <h1 className='fw-semibold mb-2 fs-4'>Do better with money</h1>
            <p className='fw-normal mt-2'>
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively
              help you do better with your money.
            </p>
          </div>

        </div>

        <div className='col-7 mt-5 mb-5 p-5 text-start'>
          <img src='/media/media/ecosystem.png' className="img-fluid" style={{ width: "80%" }} alt="ecosystem" />

          {/* Slight internal spacing improved */}
          <div className='mt-5 fs-5 d-flex justify-content-center gap-5'>
            <a href='#' className="text-decoration-none">Explore our products <i class="fa fa-arrow-right"></i></a>
            <a href='#' className="text-decoration-none">Try Kite demo <i class="fa fa-arrow-right"></i></a>
          </div>
        </div>

      </div>

      <div className='col-12 text-center mt-2 mb-5'>
        <img src='/media/media/pressLogos.png' className="img-fluid" alt="press logos" />
      </div>

    </div>


  )
}

export default Trust
