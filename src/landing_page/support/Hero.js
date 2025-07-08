import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5  " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="p-2" id="supportWrapper">
        <div className="col-6 p-5 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="p-3 "
            style={{
              width: "90%",
              borderRadius: "10px",
              margin: "10px 0",
              border: "none",
            }}
            placeholder="Eg. how do I activate F&O ,why is my order getting rejected"
          />{" "}
          <br />
          <a href="">Track account</a>
          <a href="">opening Track </a>
          <a href="">segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
          <a href="">Track Tickets</a>
        </div>
        <div className="col-6 p-5 mt-5 mb-5">
          <h5>Featured</h5>
          <ol>
            <li className="mb-2">
              <a href="">
                Trading holiday on account of Maha Shivaratri on February 26,
                2025
              </a>
            </li>
            <li>
              <a href="">Offer for sale (OFS) - February 2025 </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
