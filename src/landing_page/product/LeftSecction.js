import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row  ts-5  p-5">
        <div className="col p-5">
          <img src={imageURL} alt="image" />
        </div>
        <div
          className="col p-5 mt-5"
          style={{ lineHeight: "2", fontSize: "1.2rem" }}
        >
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <span>
            <a
              href={tryDemo}
              style={{ textDecoration: "none" }}
              className="mx-5 p-2"
            >
              Try demo →
            </a>{" "}
          </span>
          <span>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
              className="mx-5 p-2"
            >
              Learn more →
            </a>{" "}
          </span>
          <p>
            <a href={googlePlay} className="mx-5">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} className="mx-5">
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
