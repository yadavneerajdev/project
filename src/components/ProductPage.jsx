import React from 'react'
import { useState } from 'react'
import './ProductPage.css'
import ProLeft from './ProLeft'
import ProRight from './ProRight'
import ProductReviewCard from './ProductReviewCard'
import { CartState } from './context/Context'

const ProductPage = (e) => {

  const [proData,SetProData] = useState(() => {
    return JSON.parse(localStorage.getItem('currentItem'))
  })

  const {
    state: {cart},
    dispatch,
  } = CartState()
  // console.log(products);
  
  return (
    <>
    <section className="pro-cont">
      <ProLeft data={proData} />
      <ProRight data={proData} />
      {/* <div className="img-cont">
      <img src={proData.images} alt="" />
      <h2>{proData.title}</h2>
      </div> */}
    </section>
    <hr className='product-page-main-hr' />
    <section>
          <ProductReviewCard data={proData}/>
    </section>
    
    </>
  )
}

export default ProductPage