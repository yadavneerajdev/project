import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styled from 'styled-components';
import { DummyData } from "../components/DataSets/DummyData";
import { useCartContext } from "../components/hooks/CartContext";
import "./ProductCardCart.css";
// import { useCartContext } from '../components/hooks/CartContext';
import { FiDelete } from "react-icons/fi";
import {MdCancel} from "react-icons/md"

const ProductCardCart = ({ data, qty }) => {
  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useCartContext();

  const callIncrease = (e) => {
    increaseCartQuantity(data.id);
  };

  const navigate = useNavigate();

  const [minQuantity, setMinQuantity] = useState(1);
  const { removeFromCart } = useCartContext();

  const item = DummyData.find((ele) => ele.uniq_id === data.id);
  const onchange = (e) => {
    e.target.value < 1 ? setMinQuantity(0) : setMinQuantity(e.target.value);
    increaseCartQuantity(e.target.id);
  };

  const toProduct = (e) => {
    localStorage.setItem("currentItem", JSON.stringify(e));
    navigate("/product");
  };
  // minQuantity<=0? removeFromCart(data.id) : null
  console.log(item);
  return (
    <>
      <div className="cart-card-cont">
        <div className="cart-card-img">
          <img className="cart-card-img" src={item.images} alt={data.name} />
        </div>
        <div className="cart-card-info">
          <p>{item.name}</p>
          <p>{item.variant_price}</p>
        </div>
        <div className="cart-card-quantity">
          <div className="cart-card-quantity-input">
            <button
              className="decreament-cart-item"
              onClick={() => decreaseCartQuantity(data.id)}
            >
              -
            </button>
            <p className="productCartCardQuantity">{getItemQuantity(data.id)}</p>
            <button
              className="increament-cart-item"
              onClick={() => increaseCartQuantity(data.id)}
            >
              +
            </button>
            
          </div>
          <button className="productCartCardRemoveBtn" style={{border:'none',fontSize:'1rem'}} onClick={() => removeFromCart(data.id)}
          > <MdCancel size={25}/> Remove
          </button>
        </div>
        <p className="final-price">
              Total: {item.variant_price * getItemQuantity(data.id)}
            </p>
      </div>
      <hr />
    </>
  );
};
// <img className='cart-cont-img' src={item.images} alt="cart image" />
// <h2>{item.title}</h2>
// <h4>Price: {item.variant_price}</h4>
// <input className='qty-counter' type={"number"} min={1} value={minQuantity} onChange={(e)=>onchange(e)}/>
// <h3>Total: {item.variant_price*minQuantity}</h3>
//     </div>

export default ProductCardCart;
