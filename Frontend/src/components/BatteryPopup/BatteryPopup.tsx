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
  // const products = [
  //   {
  //     description:
  //       "12V 36 Ah Dimensions (L) 197 (W) 128 (H) 225 Terminal small Layout (-,+) Weight 8.4 KG",
  //     image: "battery8.jpg",
  //   },
  //   {
  //     description:
  //       "12V 40Ah Dimensions (mm) (L) 197 (W) 128 (H) 225 Terminal small, Layout (-,+) Weight 8.8 KG",
  //     image: "36A.jpg",
  //   },
  //   {
  //     description:
  //       "12V 45Ah Dimensions (mm) (L) 236 (W) 175 (H) 190 Terminal Standard, Layout (-,+) Weight 13.12 Kg",
  //     image: "battery5.jpg",
  //   },
  //   {
  //     description:
  //       "12V 55Ah Dimensions (mm) (L) 242 (W) 128 (H) 190 Terminal Standard, Layout (-,+) Weight 10.2 Kg",
  //     image: "battery8.jpg",
  //   },
  //   {
  //     description:
  //       "12V 70 Ah Dimensions (L) 260 (W) 170 (H) 225 Terminal standard Layout (-,+) Weight 15.76 Kgs. Note compatible for cars with 66 Ah batteries",
  //     image: "battery4.jpg",
  //   },
  //   {
  //     description:
  //       " 12V 70 Ah Dimensions (L) 306 (W) 176 (H) 225 Terminal standard Layout (-,+) Weight 17.03 Kgs. ",
  //     image: "Battery3.jpg",
  //   },

  //   {
  //     description:
  //       "12V 90Ah Dimensions (L) 306 (W) 175 (H) 225 Terminal Standard, Layout (-,+) Weight 18KG. Note compatible for cars with 100 Ah",
  //     image: "battery7.jpg",
  //   },

  //   {
  //     description:
  //       "12V 120 Ah Dimensions (mm) (L) 513 (W) 189 (H) 223 Terminal Standard, Layout 3, Weight (Kg) 29.03",
  //     image: "battery6.jpg",
  //   },
  // ];
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
