import React, { useEffect, useState } from 'react'
import './Shop_content.css'
// import {Data} from './Data'
import { useNavigate } from 'react-router-dom';
// import {DummyData} from './DataSets/DummyData'
import axios from 'axios';
import Loader from './Loader';

const ShopContent = (props) => {

  const { fil, filPrice } = props;


  const [productApi, setProductApi] = useState();

  useEffect(() => {
    // setProductApi({images:[1,2],title:"test",variant_price:69});
    axios.get('https://ecommerce-api-mc76.onrender.com/api/product')
      .then(response => {
        console.log(response);

        setProductApi(response.data);
      })
      .catch(error => {
        console.log(error);
        console.log("error")
      });
  }, []);



  // POST_Products() {
  //     axios.post('http://localhost:5000/api/product')
  //         .then(response => {
  //             this.setState({ prodArray: response.data });
  //         })
  //         .catch(error => {
  //             console.log(error);
  //         });
  // }



  let navigate = useNavigate();

  const toProduct = (e) => {
    localStorage.setItem('currentItem', JSON.stringify(e))
    navigate("/product")
  }

  return (
    <>
      <div className="shop-content">
        {/* {Data.filter((ele) => {
            return ele.color.toLowerCase().includes(fil.toLowerCase());
          })
          .map((elem,index) => {
            return(
              <div className="card-cont" onClick={(e) => toProduct(elem)} key={index}>
                <img className='shop-content-img' src={elem.imgURL} alt="" />
                <p>color : {elem.color}</p>
              </div>
            )
          })} */}
        {/* {DummyData.filter((ele) => {
            return 0 < ele.variant_price && ele.variant_price <= filPrice && ele.product_details.includes(fil.toLowerCase());
          }).map((elem,index) => {
            console.log(elem)
            return(
              <div className="card-cont" key={index} onClick={(e) => toProduct(elem)}>
                <img src={elem.images} alt="" />
                <p>{elem.title}</p>
                <p>{elem.variant_price}</p>
              </div>
            )
          })} */}

        {productApi?.filter((ele) => {
          return (filPrice < 5000) || ele.current_price <= filPrice
        }).map((elem, index) => {
          console.log(productApi + " in useeffect");

          return (
            <div className="card-cont" key={index} onClick={(e) => toProduct(elem)}>
              <img src={elem.images[1]} alt="" />
              <p>{elem.title}</p>
              <p>{elem.variant_price}</p>
            </div>
          )
        }) || <Loader />}
      </div>
    </>
  )
}

export default ShopContent