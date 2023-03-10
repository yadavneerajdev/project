import React from 'react'
import { useState } from 'react'
import './ProductPage.css'

const ProductPage = (e) => {

  const [proData,SetProData] = useState(() => {
    return JSON.parse(localStorage.getItem('currentItem'))
  })

  console.log(proData);

  return (
    <>
    <div className="pro-cont">
      <div className="img-cont">
      <img src={proData.images} alt="" />
      <h2>{proData.title}</h2>
      </div>
    </div>
    
    </>
  )
}

export default ProductPage