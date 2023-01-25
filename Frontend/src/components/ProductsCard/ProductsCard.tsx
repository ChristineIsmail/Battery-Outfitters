import React from "react";
import "./ProductsCard.css";
import Default from "../../assets/default.jpg";

type ProductCardProps = {
  image: any;

  description: string;
};

function ProductsCard(props: ProductCardProps) {
  return (
    <div className="container">
      <div className="card-content">
        <div className="front-face">
          <img
            src={props.image ? props.image : Default}
            alt=""
            className="product-box-image"
          />
        </div>
        <div className="back-face">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
