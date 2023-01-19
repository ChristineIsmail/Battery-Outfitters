import React from "react";
import "./WaterPopup.css";
import ProductsCard from "../ProductsCard/ProductsCard";
import data from "../../Data.json";

type WaterPopupProps = {
  closePopup: any;
};

function WaterPopup(props: WaterPopupProps) {
  const waterTypes = data.watertypes;
  // const waters = [
  //   {
  //     description:
  //       "Aqua Purifiée. Distilled water 1 US Gallon (3.8Liters) Suitable for batteries, iron, car radiator, and car wipers.",
  //     image: "small.jpg",
  //   },
  //   {
  //     description:
  //       "Aqua Purifiée. Distilled water 10 Liters Suitable for batteries, iron, car radiator, and car wipers.",
  //     image: "big.jpg",
  //   },
  // ];
  return (
    <div className="water-popup-container">
      <div className="water-popup-overlay" onClick={props.closePopup}></div>

      <div className="water-popup-body">
        <img
          src="close.png"
          alt="close"
          className="water-close-icon"
          onClick={props.closePopup}
        />
        <div className="water-products-main-container" id="products">
          <div className="water-products-list-container">
            {waterTypes.length > 0 &&
              waterTypes.map((product: any, index: number) => {
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
