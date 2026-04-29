import React from "react";
import perfumeBottle from "./assets/perfumeBottle.jpg";
import cart from "./assets/cart.jpg";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="container">
      <div className="card">
      <div className="image">
        <img
          src={perfumeBottle}
          alt="A bottle of perfume surrounded by foliage"
        />
      </div>
      <div className="description">
        <div className="category">
          <h2>PERFUME</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
        </div>
        <div className="product-desc">
          <p>
            A floral, solar, and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <p className="sale-price">$149.99</p>
        <p className="list-price">$169.99</p>
        <button>Add to Cart</button>
      </div >
      </div>
      <div className="attribution">
      <footer >
        Challenge by <u><a href="https://www.crio.do" target="blank">Crio</a></u> Coded by <u>Nandini</u>
      </footer>
      </div>
    </div>
  );
};

export default ProductCard;
