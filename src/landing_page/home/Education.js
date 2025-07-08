import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img
            src="media/images/education.svg"
            alt="Educaton Image"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col">
          <h1 className="mb-5">Free and open market education</h1>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="ml-5 mb-5" style={{ textDecoration: "none" }}>
            Varsity
          </a>
          <p className="mb-5 mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="" className="ml-5 mb-5" style={{ textDecoration: "none" }}>
            Trading Q&A
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
