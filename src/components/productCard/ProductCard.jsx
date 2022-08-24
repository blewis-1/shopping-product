import React from "react";
import './productCard.css';

const ProductCard = ({ productName, price, img, description }) => {
  return (
    <div>
      <div className="product-card">
        <img src={img} alt="Product Img" />
        <p>{productName} --
          <em> ${price}</em>
        </p>
        <small> {description}</small>
        <button> Add to cart </button>
      </div>
    </div>
  );
};

export default ProductCard;
