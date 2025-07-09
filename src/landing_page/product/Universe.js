import React from "react";

function Universe() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <h1 className="mb-5 mt-3">The Zerodha Universe</h1>
        <p className="ts-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col p-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/zerodhaFundhouse.png`}
            style={{ width: "50%" }}
            alt="Zerodha Fundhouse"
          />

          <p className="text-muted p-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col p-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/sensibullLogo.svg`}
            alt="sens"
            style={{ width: "80%" }}
          />

          <p className="text-muted p-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col p-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/goldenpiLogo.png`}
            alt="goliden"
            style={{ width: "80%" }}
          />

          <p className="text-muted p-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col p-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/streakLogo.png`}
            alt="Streak Logo"
            style={{ width: "50%" }}
          />

          <p className="text-muted p-5">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col p-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/smallcaseLogo.png`}
            alt="Smallcase Logo"
            style={{ width: "60%" }}
          />

          <p className="text-muted p-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col p-5">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/dittoLogo.png`}
            alt="Ditto Logo"
            style={{ width: "30%" }}
          />

          <p className="text-muted p-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>

      <div className="row text-center">
        <button
          style={{ width: "20%" }}
          className="btn btn-primary m-auto p-2 fs-8 mb-5"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
