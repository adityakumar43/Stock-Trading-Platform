import React from 'react'
import Hero from "./Hero"
import Leftsection from './Leftsection'
import Rightsection from './Rightsection'
import Universe from './Universe'

function ProductPage() {
  return (
    <>
      <Hero />
      <Leftsection imageURL="./images/kite.png" productname="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <Rightsection productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations." learnMore="" imageURL="./images/console.png"/>
      <Leftsection imageURL="./images/coin.png" productname="Coin" productDescription="But direct mutual funds online, commission-free, delivered directly to your Demate account. Enjoy the investment experience on your Android and iOS  devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <Rightsection productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" imageURL="./images/kiteconnect.png"/>
      <Leftsection imageURL="./images/varsity.png" productname="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessions with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore="" />
      <p className='text-center fs-5 mb-5 mt-5'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
      <Universe/>
    </>
  )
}

export default ProductPage
