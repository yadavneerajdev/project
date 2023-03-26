import React from "react";
import styled from "styled-components";
import { useCartContext } from "../components/hooks/CartContext";
import { DummyData } from "../components/DataSets/DummyData";
import { Link, useNavigate } from "react-router-dom";

export default function CartInfo() {
    let navigate = useNavigate();

  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useCartContext();

  const StyleDiv = styled.div`
    .cart-side-bar {
      // background-color: green;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      // width: 30%;
      padding: 1rem;
      gap: 15px;
    }
    .Promo-code {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding: 2rem;
    }

    .table {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // border: 1px solid;
    }
    tr {
      display: flex;
      justify-content: space-between;
      gap: 10rem;
      border: 1px solid;
      padding: 10px;
    }

    .cart-header {
      text-align: center;
      font-size: 3rem;
    }
  `;

  const item = DummyData.find((i) => cartItems.id === i.uniq_id);

  let total = cartItems.reduce((total, cartItem) => {
    const it = DummyData.find((i) => i.uniq_id === cartItem.id);
    console.log(cartItem.quantity);
    return total + (it?.variant_price || 0) * cartItem.quantity;
  }, 0);

  let bagTotal = cartItems.reduce((total, cartItem) => {
    const it = DummyData.find((i) => i.uniq_id === cartItem.id);
    console.log(cartItem.quantity);
    return total + (it?.variant_compare_at_price || 0) * cartItem.quantity;
  }, 0);

  let Discount = bagTotal - total;
  return (
    <StyleDiv className="cart-side-bar">
      <div className="Promo-code">
        <h4>ENTER PROMO CODE</h4>
        <input type="text" />
      </div>
      <div className="cart-side-bar-content">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <p>Shipping cost</p>
              </td>
              <td>
                <p>0</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Bag cost</p>
              </td>

              <td>
                <p>{bagTotal}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Discount</p>
              </td>
              <td>
                <p>-{Discount}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Pay Total</h3>
              </td>
              <td>
                <h3>{total}</h3>
              </td>
            </tr>
            <tr >
            <Link 
                to={"/checkout"}>
            <button
                  onClick={() => {
                    navigate("/product")
                  }}
                >
                  Checkout Now
                </button>
            </Link>
                
            </tr>
          </tbody>
        </table>
      </div>
    </StyleDiv>
  );
}
