//git checkout -b home-component   -Create a new branch
import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;
