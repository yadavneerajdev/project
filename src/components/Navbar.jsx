import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { Search } from 'react-feather'
import { Heart } from 'react-feather'
import { ShoppingBag } from 'react-feather'
import { CartState } from './context/Context'
import { useCartContext } from './hooks/CartContext'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from 'react'


const Navbar = (props) => {

  const [nav, setNav] = useState(false);

  const navigate1 = useNavigate();

  const toCart = (e) => {
    navigate("/cartpage")
  }

  const {
    state: {cart},
    dispatch,
  } = CartState()

  let navigate = useNavigate();

  const goHome = () => {
      navigate("/")
  }


  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useCartContext()

  return (
    <>
        <div className="navbar">
            <div className="logo" onClick={() => goHome()}>{props.header}</div>
            <div className= {nav ? "nav-ul nav-ul2" : "nav-ul"} >
              <ul className='nav-mid'>
                <li><Link to={"/"} >{props.link1}</Link></li>
                <li><Link to={"/about"}>{props.link2}</Link></li>
                <li><Link to={"/shop"}>{props.link3}</Link></li>
                <li><Link to={"/blog"}>{props.link4}</Link></li>
                <li><Link to={"/contacts"}>{props.link5}</Link></li>
                <li><Link to={"/cart"}>{props.link6}</Link></li>
            </ul>
            <ul className="nav-end">
              <li className='login'><Link to={"/login"}>{props.login}</Link></li>
              <li className='nav-icons'><Search /></li>
              <li className='nav-icons'><Heart /></li>
              <li className='nav-icons shoppingBag' onClick={(e) => toCart()}><ShoppingBag /><span className='Cart-count-display'>{cartItems.length}</span></li>
            </ul>
            </div>
            
            <p className='dropdown-nav' onClick={() => setNav(!nav)}><RxHamburgerMenu size={27} /></p>
        </div>
    </>
  )
}

export default Navbar