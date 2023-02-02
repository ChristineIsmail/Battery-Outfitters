import React from "react";
//import { Button, IconButton } from "@mui/material";
import "./BatteryPopup.css";
import ProductsCard from "../ProductsCard/ProductsCard";
import data from "../../Data.json";
import Default from "../../assets/default.jpg";

type BatteryPopupProps = {
  closePopup: any;
};

function BatteryPopup(props: BatteryPopupProps) {
  const batteryTypes = data["batterytypes"];

  return (
    <div className="battery-popup-container">
      <div className="battery-popup-overlay" onClick={props.closePopup}></div>
      <div className="battery-popup-body">
        <div className="battery-products-main-container" id="battery-products">
          <div className="battery-products-list-container">
            {batteryTypes.length > 0 &&
              batteryTypes.map((product: any, index: number) => {
                return (
                  <ProductsCard
                    key={index}
                    description={product.description}
                    image={product.image ? product.image : ""}
                  />
                );
              })}
          </div>
        </div>
        <img
          src="close.png"
          alt="close"
          className="battery-close-icon"
          onClick={props.closePopup}
        />
      </div>
    </div>
  );
}

export default BatteryPopup;
