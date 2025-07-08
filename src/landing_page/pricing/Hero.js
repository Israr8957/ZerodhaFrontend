import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row mb-5 text-center">
        <h1 className=" text-center mb-4 " style={{ fontSize: "3.5rem" }}>
          Charges
        </h1>
        <p className="text-muted" style={{ fontSize: "1.6rem" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row ">
        <div className="col mt-5 text-center">
          <img src="media/images/pricing0.svg" style={{ width: "70%" }}></img>
          <h1>Free equity delivery</h1>
          <p className="text-muted mt-4 fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col mt-5 text-center">
          <img
            src="media/images/intradayTrades.svg"
            style={{ width: "70%" }}
          ></img>
          <h1>Intraday F&O trades</h1>
          <p className="text-muted mt-4 fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col  mt-5 text-center">
          <img src="media/images/pricing0.svg" style={{ width: "70%" }}></img>
          <h1>Free direct MF</h1>
          <p className="text-muted mt-4 fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
