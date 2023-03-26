import React from "react";
import styled from "styled-components";
import ProductCardCart from "./ProductCardCart";
// import { useCartContext } from "../hooks/CartContext";
import { DummyData } from "../components/DataSets/DummyData";
import { useCartContext } from "../components/hooks/CartContext";
import { useState } from "react";
import Footer from "./Footer";
import CartInfo from "./CartInfo";

const CartPage = () => {
  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useCartContext();

  const [cartCardCount, setCartCardCount] = useState(1);

  let { ShippingCost, BagCost } = 0;

  const CartPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .products-and-total {
      display: grid;
      grid-template-columns: 1.5fr 0.5fr;
    }
    .cart-content {
      // background-color: red;
      padding-left: 30px;
    }
  `;

  const item = DummyData.find((i) => cartItems.id === i.uniq_id);

  let total = cartItems.reduce((total, cartItem) => {
    const it = DummyData.find((i) => i.uniq_id === cartItem.id);
    console.log(cartItem.quantity);
    return total + (it ? it.variant_price : 0) * cartItem.quantity;
  }, 0);

  let bagTotal = cartItems.reduce((total, cartItem) => {
    const it = DummyData.find((i) => i.uniq_id === cartItem.id);
    console.log(cartItem.quantity);
    return total + (it ? it.variant_compare_at_price : 0) * cartItem.quantity;
  }, 0);

  let Discount = bagTotal - total;

  return (
    <div>
      <CartPageStyle>
        {/* <button onClick={()=>{increaseCartQuantity(7)}}>add</button>
    <button onClick={()=>{decreaseCartQuantity(7)}}>delete</button>
    <button onClick={()=>{removeFromCart(7)}}>remove</button>
        {console.log(getItemQuantity(7))} */}
        <h1 className="cart-header" style={{textAlign: "center" }}>Cart</h1>
        <div className="products-and-total">
          <div className="cart-content">
            {(cartItems!=(null || undefined || "")? DummyData.map((Ditem) =>
              cartItems.map((item) =>
                Ditem.uniq_id === item.id ? (
                  <ProductCardCart
                    data={item}
                    key={item.id}
                    qty={setCartCardCount}
                  />
                ) : null
              )
            ) : <h1 style={{textAlign: "center"}}>no items</h1>)}
          </div>
          <CartInfo/>
        </div>
      </CartPageStyle>
      <Footer />
    </div>
  );
};

export default CartPage;
