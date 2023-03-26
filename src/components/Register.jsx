import React, { useState } from 'react'
// import Input className='signReg-inp' from './DataSets/Input className='signReg-inp''
import './Register.css'
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import model from '../components/images/login-model.png'
// import { useState } from 'react';

const Register = ({permission}) => {

  const [emp,SetEmp] = useState("none")
  const [name,SetName] = useState()
  const [pass,SetPass] = useState()
  const [form1,setForm1] = useState(true)

  const [buyer,setBuyer] = useState()
  const [seller,setSeller] = useState()

  // permission(true)
  const crePerm = () => {
    if(name === "" || pass === ""){
      SetEmp("block")
    }
  }

  return (
    <>
    <div className="login-main-cont">
      <div className="form-cont">
        <div className="form">
          
          {buyer ? <div className="form-toggle">
            <form action="" className={form1 ? "from1-a" : "form1"}>
            <h3>Log In</h3>
        <label htmlFor="username">username</label>
        <input className='signReg-inp' type="text" required style={{background: "transparent"}} onChange={(e) => SetName(e.target.value)}/>
        <label htmlFor="password" >password</label>
        <input className='signReg-inp' type="password" required style={{background: "transparent"}} onChange={(e) => SetPass(e.target.value)}/>
        <div className="forgot-pass">
        <p style={{color: "red",display: `${emp}`}}>enter credentials</p>
        <a href="">forgot password</a>
        </div>
          <button type='submit' onClick={() => crePerm()} className='signin-btn'>Sign In</button>
          <button className='googleSign-btn'><FcGoogle size={30}/> <span className='googleSign-span'>Sign In With Google</span></button>
          <p className='sign-up-direct'  onClick={() => setForm1(!form1)}>Don't have an account? <span onClick={() => setForm1(!form1)}>Sign up</span></p>
        </form>

        <form action="" className={form1 ? "from2-a rot" : "form1 rot2"}>
            <h3>Registration</h3>
        <label htmlFor="username">username</label>
        <input className='signReg-inp' type="text" required style={{background: "transparent"}} onChange={(e) => SetName(e.target.value)}/>
        <label htmlFor="password" >password</label>
        <input className='signReg-inp' type="password" required style={{background: "transparent"}} onChange={(e) => SetPass(e.target.value)}/>
        <div className="forgot-pass">
        <p style={{color: "red",display: `${emp}`}}>enter credentials</p>
        <a href="">forgot password</a>
        </div>
          <button type='submit' onClick={() => crePerm()} className='signin-btn'>Sign In</button>
          <button className='googleSign-btn'><FcGoogle size={30}/> <span className='googleSign-span'>Sign In With Google</span></button>
          <p className='sign-up-direct'  onClick={() => setForm1(!form1)}>Already signed up? <span onClick={() => setForm1(!form1)}>Log in</span></p>
        </form>
          </div> : <div className="form-toggle">
            <form action="" className={form1 ? "from1-a" : "form1"}>
            <h3>Log In</h3>
        <label htmlFor="username">username</label>
        <input className='signReg-inp' type="text" required style={{background: "transparent"}} onChange={(e) => SetName(e.target.value)}/>
        <label htmlFor="password" >password</label>
        <input className='signReg-inp' type="password" required style={{background: "transparent"}} onChange={(e) => SetPass(e.target.value)}/>
        <div className="forgot-pass">
        <p style={{color: "red",display: `${emp}`}}>enter credentials</p>
        <a href="">forgot password</a>
        </div>
          <button type='submit' onClick={() => crePerm()} className='signin-btn'>Sign In</button>
          <button className='googleSign-btn'><FcGoogle size={30}/> <span className='googleSign-span'>Sign In With Google</span></button>
          <p className='sign-up-direct'  onClick={() => setForm1(!form1)}>Don't have an account? <span onClick={() => setForm1(!form1)}>Sign up</span></p>
        </form>

        <form action="" className={form1 ? "from2-a rot" : "form1 rot2"}>
            <h3>Registration</h3>
        <label htmlFor="username">username</label>
        <input className='signReg-inp' type="text" required style={{background: "transparent"}} onChange={(e) => SetName(e.target.value)}/>
        <label htmlFor="password" >password</label>
        <input className='signReg-inp' type="password" required style={{background: "transparent"}} onChange={(e) => SetPass(e.target.value)}/>
        <div className="forgot-pass">
        <p style={{color: "red",display: `${emp}`}}>enter credentials</p>
        <a href="">forgot password</a>
        </div>
          <button type='submit' onClick={() => crePerm()} className='signin-btn'>Sign In</button>
          <button className='googleSign-btn'><FcGoogle size={30}/> <span className='googleSign-span'>Sign In With Google</span></button>
          <p className='sign-up-direct'  onClick={() => setForm1(!form1)}>Already signed up? <span onClick={() => setForm1(!form1)}>Log in</span></p>
        </form>
          </div>}
          
            
          
          
        <div className="login-right">
          <img className='model-img' src={model} alt="" />
          <div className="cover-div">

          </div>
        </div>
        </div>

        
      </div>
    </div>
      
    </>
  )
}

export default Register