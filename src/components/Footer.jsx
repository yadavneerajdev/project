import React from 'react'
import styled from 'styled-components';
import { FiInstagram, FiFacebook,FiLinkedin, FiTwitter } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


export default function Footer() {

  const navigate = useNavigate();

  const socialDirect = () => {
    navigate("https://www.instagram.com/pawarsach_n/?igshid=ZDdkNTZiNTM%3D")
  }

    const Stylefooter=styled.footer`
            display: flex;
            justify-content: space-around;
            margin-top: 5rem;


        .ffA-dJX .btn {
          padding: 1rem;
          border: none;
          font-size: 18px;
          font-weight: 600;
          background: white;
          cursor: pointer;
        }

         .footer{
          display: flex;
          justify-content:space-around;
          align-items:start;
          gap: 5rem;
          padding:4rem;
        }
        .footer-content{
          display: flex;
          flex-direction:column;
          padding: 1rem;
          /* justify-content:space-around; */
            font-weight:900;
            grid-column:1/-1;

            a,a:active,a:hover,a:link{
              margin-top: 1rem;
              color: #192000;
            }
        }
        .footer-contact-logos{
          margin-top:2rem;
          display: flex;
          justify-content:space-around;
          align-items:center;
          font-size:2rem;
        }
    `;
  return (
    <Stylefooter className="footer">
        <div className="epsilon">
          <h1>Epsilon</h1>
          <p>Nor again is there anyone who loves or pursues or desires to obtain pain if itself</p>
        </div>
        <div className="footer-about footer-content">
          <h3>About</h3>
          <a href="#">Home</a>
          <a href="#">Feature</a>
          <a href="#">FAQs</a>
          <a href="#">Reviews</a>
          <a href="#">Stories</a>
        </div>
        <div className="footer-Privacy footer-content">
          <h3>Privacy</h3>
          <a href="#">Privacy</a>
          <a href="#">policy</a>
          <a href="#">Payment</a>
          <a href="#">Terms</a>
        </div>
        <div className="footer-contact footer-content">
          <h3>Contact Us</h3>
          <a href="#">+91 706 606 2958</a>
          <a href="#">pawardevelops@gmail.com</a>
          <div className="footer-contact-logos">
              <FiInstagram onClick={() => socialDirect()}/> <FiFacebook/> <FiLinkedin/> <FiTwitter/>
          </div>
        </div>
      </Stylefooter>
  )
}
