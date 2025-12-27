import React from 'react'
import Her from './Her'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ProductPage = () => {
    return (
        <>
            <Her />
            <LeftSection imageUrl="media/media/kite.png" title="Kite" description="Our ultraifast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="#" learnMore="#" gogstore="#" appstore="#" />

            <RightSection imageUrl="media/media/console.png" title="Console" description="The central dashboard for the Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations" tryDemo="#" />

            <LeftSection imageUrl="media/media/coin.png" title="Coin" description="Buy direct mutual funds online, commission-free, delivered to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Coin" gogstore="#" appstore="#" />

            <RightSection imageUrl="media/media/kiteconnect.png" title="Kite Connect Api" description="Built powerful trading platforms and experience with our super simple HTTP/JSON APIs. If you are a stratup, built your invertment appa nd showcase it to our clientbase." tryDemo="Kite Connect" />

            <LeftSection imageUrl="media/media/varsity.png" title="Varsity mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go" gogstore="#" appstore="#" />
            <div className='row text-muted fs-5 text-center p-5'>
                <p>Want to know more about our technology stack? Check out the <a href="#" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Zerodha.tech blog.</a></p>
            </div>
            <Universe imageUrl="media/media/smallcaseLogo.png" cardText="Explore the vast ecosystem of Zerodha's products and services." />
        </>
    )
}

export default ProductPage
