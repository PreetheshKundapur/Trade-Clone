import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Univers from "./Univers";
function ProductPage() {
  return (
    <>
      <Hero />
      <Leftsection
        imageURL="Media/Kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. 
        Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Rightsection
        imageURL="Media/console.png"
        productName="Console"
        productDesription="The central dashboard for your Trade-Easy account. 
        Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <Leftsection
        imageURL="Media/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. 
        Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        Our
        ultra-fast
        flags
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Rightsection 
       imageURL="Media/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
        If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <Leftsection
        imageURL="Media/varsity.png"
        productName="Varsity"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. 
        Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <h3 className="text-center text-muted mb-5">Want to know more about our technology stack? Check out the Trade-Easy.tech blog.</h3>

      <Univers />
    </>
  );
}

export default ProductPage;
