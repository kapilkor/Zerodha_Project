import React from 'react'

const Hero = () => {
    const handleSignupClick = () => {
        window.location.href = "http://localhost:3000/signup";
    };

    return (
        <div>
            <div className='container p-5 mb-3'>
                <div className='row text-center'>
                    <img src='/media/media/homeHero.png' alt='Hero' className='mb-5' style={{ width: '100%', objectFit: 'cover' }} />
                    <h1 className='mt-4'><b>Invest</b> in everything</h1>
                    <p>Online platform to invest in stocks, derivatives,mutual funds and more..</p>
                    <button
                        className='btn btn-primary p-2 fs-5 mb-5'
                        style={{ width: "20%", margin: "0 auto" }}
                        onClick={handleSignupClick}
                    >
                        
                        Signup for free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
