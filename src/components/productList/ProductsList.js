import React from "react";
import ProductCard from "../productCard/ProductCard";
import './productsList.css';

const ProductsList = ({ products }) => {
    return (
        <div className="p-list">
            {products.map((product) =>
                <ProductCard 
                    key={product.id}
                    img={product.images[0]}
                    productName={product.title}
                    price={product.price}
                    description={product.description.substring(0,30) + ' Read More ..'}
                />
            )}
        </div>
    );
}


export default ProductsList;