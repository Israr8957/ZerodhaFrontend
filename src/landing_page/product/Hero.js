import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5">
        <h1>Zerodha Products</h1>
        <p className="fs-3 text-muted">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
