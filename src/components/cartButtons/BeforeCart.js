import React from "react";
import "./cartButton.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cart";

const BeforeCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button
        className="add-cart-button"
        onClick={() => dispatch(addtoCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default BeforeCart;
