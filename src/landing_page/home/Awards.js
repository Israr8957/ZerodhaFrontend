import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/largestBroker.svg`}
            alt="largest broker"
          />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1 className="mt-5">Largest broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha lient contribute to over 15% of allvolumes in
            India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futers and Options</li>
                <li>Commodative Derivative</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stock & IPOs</li>
                <li>Direct Mutual funds</li>
                <li>Bond and Govenment security</li>
              </ul>
            </div>
            <img
              style={{ width: "90%" }}
              src={`${process.env.PUBLIC_URL}/media/images/pressLogos.png`}
              alt="press logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
