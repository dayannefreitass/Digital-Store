// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css'; // Adicione estilos específicos se necessário

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      {priceDiscount ? (
        <div className="product-price">
          <span className="price-original">{price}</span>
          <span className="price-discount">{priceDiscount}</span>
        </div>
      ) : (
        <h5 className="product-price">{price}</h5>
      )}
    </div>
  );
};

export default ProductCard;
