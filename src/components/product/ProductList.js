import React from "react";
import products from "../../api/products.json";
import "./productList.css";
import BeforeCart from "../cartButtons/BeforeCart";
import AfterCart from "../cartButtons/AfterCart";
import { useSelector } from "react-redux";
import CartButton from "../cartButtons";

const ProductList = () => {
  const { cartList } = useSelector((state) => state.cart);

  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          <CartButton product={product} />
        </div>
      ))}
    </section>
  );
};

export default ProductList;
