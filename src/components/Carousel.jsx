import React from 'react'
import './Carousel.css'
import { useState } from 'react'
import { ArrowLeft } from 'react-feather'
import { ArrowRight } from 'react-feather'
import example from './images/example.jpg'
import example1 from './images/example1.jpg'

const Carousel = () => {

    const[slideCount, setSlideCount] = useState(0)

    const nextSlide = () => {
        setSlideCount(slideCount === 2 ? 0 : slideCount+1)
        console.log(slideCount * 100);
    }

    const prevSlide = () => {
        setSlideCount(slideCount === 0 ? 2 : slideCount-1)
        console.log(slideCount);
    }
  return (
    <div className="carousel">
        <div className="container" style={{transform: `translateX(-${slideCount * 100}vw)`}}>
            <div className="carousel-item">
            <img className='carousel-banner' src="https://www.kreeva.com/blog/wp-content/uploads/2022/04/1_DESKTOP_BANNER1.jpg" alt="" />
            </div>
            <div className="carousel-item">
            <img className='carousel-banner' src="https://www.cbazaar.com/blog/wp-content/uploads/2021/03/WP_Blog_Mar30.jpg" alt="" />
            </div>
            <div className="carousel-item">
            <img className='carousel-banner' src={example} alt="" />
            </div>
        </div>
        {/* <button onClick={() => nextSlide()}>prev</button>
        <button onClick={() => prevSlide()}>next</button> */}
        <button className='btn-left btn-car' onClick={prevSlide}><ArrowLeft /></button>
        <button className='btn-right btn-car' onClick={nextSlide}><ArrowRight /></button>
    </div>
  )
}

export default Carousel


