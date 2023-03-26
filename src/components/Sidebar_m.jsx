import React from 'react'
import './Sidebar.css'
import { useState } from 'react'
// import Slider from 'react-smooth-range-input'; 

const Sidebar_m = ({ func, funcPrice }) => {

  const [rangeVal, setRangeVal] = useState(0)
  const [fil, setFil] = useState("All")






  return (
    <>
      <div className="sidebar-cont">
        <div className="sidebar-fil-input">
          <p>{rangeVal}</p>
          <input type="range" className='fir-range' min={0} max={50000} onChange={(e) => (funcPrice(e.target.value) || setRangeVal(e.target.value))} />
        </div>
        <button onClick={() => func("All")} className='sidebar-btn' style={{ background: (rangeVal <= 5000) ? "teal" : "#fff" }}>All</button>
        <button onClick={() => func("black")} className='sidebar-btn'>black</button>
        <button onClick={() => func("red")} className='sidebar-btn'>red</button>
        <button onClick={() => func("blue")} className='sidebar-btn'>Blue</button>
        <button onClick={() => func("yellow")} className='sidebar-btn'>Yellow</button>
        {/* <button onClick={() => func("men")} className='sidebar-btn'>women</button> */}
      </div>
    </>
  )
}

export default Sidebar_m