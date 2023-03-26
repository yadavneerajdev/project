import React, { useState } from 'react'
import './Shop.css'
import { Sidebar } from 'react-feather'
import Sidebar_m from './Sidebar_m'
import ShopContent from './ShopContent'
import { CartState } from './context/Context'


const Shop = () => {

  const {state:{products}} = CartState()
  console.log(products);

  const [filter,setFilter] = useState("All");

  const getFilter = (e) => {
    setFilter(e);
  }

  const [filterPrice,setFilterPrice] = useState(1000);

  const getFilterPrice = (e) => {
    setFilterPrice(e);
  }

  return (
    <>
      <div className="shop-cont">
        <ShopContent fil={filter} filPrice={filterPrice} />
        <Sidebar_m func={(e) => getFilter(e)} funcPrice={(e) => getFilterPrice(e)} />
      </div>
    </>
    
  )
}

export default Shop