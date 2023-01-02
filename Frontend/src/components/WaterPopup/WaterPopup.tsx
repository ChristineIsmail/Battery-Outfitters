import React from "react";
import "./WaterPopup.css";
import ProductsCard from "../ProductsCard/ProductsCard";
type WaterPopupProps = {
  closePopup: any;
};

function WaterPopup(props: WaterPopupProps) {
  const waters = [
    {
      description:
        "Aqua Purifiée. Distilled water 1 US Gallon (3.8Liters) Suitable for batteries, iron, car radiator, and car wipers.",
      image: "small.jpg",
    },
    {
      description:
        "Aqua Purifiée. Distilled water 10 Liters Suitable for batteries, iron, car radiator, and car wipers.",
      image: "big.jpg",
    },
  ];
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
        <div className="products-main-container" id="products">
          <div className="products-list-container">
            {waters.length > 0 &&
              waters.map((product: any, index: number) => {
                return (
                  <ProductsCard
                    key={index}
                    description={product.description}
                    image={product.image}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaterPopup;
