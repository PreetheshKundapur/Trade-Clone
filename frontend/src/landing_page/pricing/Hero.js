import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 bodder-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          free Equtity investment and flat 20 trady f&o trades
        </h3>

        <div className="col-4 p-5">
          <img src="Media/pricingEquity.svg" />
          <h1>Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media/intradayTrades.svg" />
          <h1>Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media/pricingEquity.svg" />
          <h1>Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
