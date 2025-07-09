import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h1 className=" text-center p-5">People</h1>
      </div>
      <div
        className="row  p-2 text-muted text-center"
        style={{ lineHeight: "2", fontSize: "1.2rem" }}
      >
        <div className="col p-2 ">
          <img
            src={`${process.env.PUBLIC_URL}/media/images/nithinKamath.jpg`}
            alt="ceo"
            style={{ borderRadius: "100%", width: "50%" }}
            className="ml-5"
          />

          <h5 className="mt-3">Nithin Kamath</h5>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col p-2">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Connect on Homepage
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA{" "}
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
