import React from "react";
import products from "../../api/products.json";
import "./productList.css";
import BeforeCart from "../cartButtons/BeforeCart";
import AfterCart from "../cartButtons/AfterCart";
import { useSelector } from "react-redux"; // hook used to redux n react k fetch cheyan //
import CartButton from "../cartButtons";
//useDispatch use akanath namade data ne dipatch akan nammal kodutha logic call akan,

const ProductList = () => {
  const {cartList } = useSelector((state) => state.cart); // data  access akan
  // const dispatch = useDispatch() namk but ee dispatched data de use beforeCart & afterCart l anu. so avde use aknm.

  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          <CartButton product={product}/>
        </div>
      ))}
    </section>
  );
};

export default ProductList;

// namak before cart k product details pass aknm indidual data ayt venel pass akam like id oke but here namak
// full data pass akan nokan so props use akit pass akm, ith nammal before cart component l addtoCart call akmbol
// avde data kitanm