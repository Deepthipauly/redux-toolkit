import React, { useMemo } from "react";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import { useSelector } from "react-redux";
//evde nammal props ayt data pass aki, then cartlist egad kondvaranm.

const CartButton = ({ product}) => {
  const { cartList } = useSelector((state) => state.cart);
  const cartCount = useMemo(()=>{
    return cartList?.find((item) => item?.id === product?.id)?.count;
  },[cartList]
   
  )
  // namde item nte id cartlist l indo n check cheyan.
  return (
    <>
      {" "}
      {cartCount > 0 ? (
        <AfterCart productId={product.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}{" "}
    </>
  );
};

export default CartButton;

// evde count update akillaa.. so cartcount nammalk after cart l prop ay kodukam enit after count l argument ay kodukanm,