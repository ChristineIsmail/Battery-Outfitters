import React from "react";
import "./AboutUsPopup.css";
type AboutUsPopupProps = {
  closePopup: any;
};
function AboutUpPopup(props: AboutUsPopupProps) {
  return (
    <div className="popup-container">
      <div className="popup-overlay" onClick={props.closePopup}></div>

      <div className="popup-body">
        <img
          src="close.png"
          alt="close"
          className="close-icon"
          onClick={props.closePopup}
        />
        <div className="all-p">
          <p className="paragraph">
            We are pleased to serve our customers with one of the best Turkish
            batteries found in the market from one of the biggest Turkish
            factories that was built in 1976.
          </p>
          <p className="paragraph">
            We care about building a quality product, trusted relationships with
            our customers. Our most important key values are integrity, honesty,
            trust, and loyalty.
          </p>
          <p className="paragraph">
            We have a mission to serve the most possible number of people with
            various products at the best prices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUpPopup;
