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
    <div className="container mt-5 p-5">
      <div className="row mb-5">
        <div className="col-4">
          <img src={imageURL}/>
        </div>
        <div className="col-3"></div>
        <div className="col-5 mt-5">
          <h1>{productName}</h1>
          <p className="fs-4 text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none"}} className="fs-5">Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft: "50px", textDecoration: "none"}} className="fs-5">Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" style={{width: "30%"}}/>
            </a>
            <a href={appStore} style={{marginLeft: "50px"}}>
              <img src="media/images/appstoreBadge.svg" style={{width: "30%"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
