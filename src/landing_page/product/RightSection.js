import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div
          className="col p-5 mt-5"
          style={{ lineHeight: "2", fontSize: "1.2rem", marginTop: "10px" }}
        >
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <a href="" style={{ textDecoration: "none" }}>
            {learnMore}→
          </a>
        </div>
        <div className="col">
          <img src={`${process.env.PUBLIC_URL}${imageURL}`} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
