import React from "react";
import "./ProductsCard.css";

type ProductCardProps = {
  image: any;

  description: string;
};

function ProductsCard(props: ProductCardProps) {
  return (
    <div className="container">
      <div className="card-content">
        <div className="front-face">
          <img src={props.image} alt="" className="product-box-image" />
        </div>
        <div className="back-face">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
