import React from "react";
import Styled from "styled-components";
import { FiActivity, FiDollarSign, FiStar,FiSearch, FiPlay, FiInstagram, FiFacebook,FiLinkedin, FiTwitter } from "react-icons/fi";
import {BsFillEmojiHeartEyesFill, BsFillEmojiKissFill, BsFillEmojiWinkFill} from 'react-icons/bs'
import {easeInOut, motion} from 'framer-motion'
import Footer from "./Footer";
/*

    

*/

export default function AboutUs() {
  const AboutUsStyle = Styled.div`
        width:100%;
        height:75vh;
        font-family: 'Poppins', sans-serif;
        p{
          color:#2C3333;
        }

        h1,h2,h3,span{
          color:#192000;
        }

        header{
            display: grid;
            grid-template-columns:repeat(2,1fr);
            justify-content:center;
            align-items:center;

        }

        .head-left{
            display: flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:start;
            padding:5rem;            
        }

        .head-right{
            text-align:center;
        }
        .main-image{
            width:40rem;
        }
        p{
            font-size:1rem;
            line-height:1.5;
        }
        .head-btns{
            margin-top:2rem;   
        }

        .btn{
            padding:1rem;
            // margin-left :1rem;
            border:none;
            font-size:1rem;
            font-weight:600;
            background: white;
            cursor: pointer;
        }

        .accent-btn{
            box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
            /* background:#916BBF ; */
            /* color: white; */
        }
        
        .head-sponsors{
            background:rgba(26,26,26, .1);
            margin:3rem;
            padding:2rem;
            border-radius:.5rem;
            font-size:3rem;
            display:flex;
            justify-content:space-around;
            font-weight:900;
            grid-column:1/-1
        }
        .first-section{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
        }
        .first-section-content-head{
            text-align:center;
            margin-top:5rem;
        }
        .first-section{
            padding:3rem;
        }
        .first-section-content{
            display:flex;
        }
        .first-section-text{
            text-align:center;
            padding:1rem;
        }

        .card{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin:1rem;
            padding: 1rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .first-section-heading{
            font-size:2rem;
            font-weight:400;
            padding:2rem;
        }
        .first-section-icons{
          font-size:2rem;
        }

        .main-content{
          display: flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          font-size:1.5rem;
          padding: 2rem;
          word-wrap:break-all;
        }

        .main-content-head{
          
        }
        .section2align{
          display: flex;
          justify-content:space-between;
          align-items:center;
          margin-top:2rem ;
          padding: 2rem;
          
          
          P{
            width: 70%;
          }
         
        }
        .card-panel-card-2{
          padding:2.5rem 7rem;
          /* overflow:hidden; */
          z-index:1;
          /* overflow: hidden; */
        }
       
        .search{
          position:relative;
          right:18%;
          background: ;
          padding: .5rem;
        }
        .card-panel-card-2-input{
          padding: .5rem;
          border: 1px solid rgba(19,20,00, .2);
        }
        .mid-card-text{
          display: flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }
        .card-panel-card-3{
          padding:1rem 2rem;
          display: flex;
          flex-direction:row ;
          justify-content: space-around;
          align-items:center;
        }
        .emoji{
          /* padding: .5rem; */
          margin:1rem 2.5rem;
          font-size:3rem ;
          color:#192000;
        }

        .infos{
          display: flex;
          padding: 3rem;
          justify-content:space-around;
        }
        .aboutus{
          padding: 2rem;
          word-wrap:wrap-all;
          P{
            width: 60%;
          }
        }

        .more-infos{
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows:1fr 1fr;
          gap:3rem;
          justify-content: space-between;
          align-items:center;
        }

        .info{
          padding: 1rem 4rem;
          border: 1px solid #dddddd;
        }
        .info-1{
          border:none;
        }

        .testimonial{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .signup-section{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding:3rem;
          background: rgba(0, 0, 0, 0.15);

        }
        .signup-input{
          border:none;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
          padding: 1.5rem;
        }
        .signup-input:focus{
          outline:none;
        }
        .email-input{
          // display: flex;
          // align-item: center;
          // gap: 10px;
          margin-top:5rem;
        }
        .signup-btn{
          margin-left: 1rem;
          padding: 1.5rem;
          background: var(--bg-color-button-dark);
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          border-radius: .5rem;
          transition: .4s ease;
          color: var(--bg-color-primary-light);
        }

        .signup-btn:hover{
          background: var(--bg-color-container-dark);
          color: white;
        }


    `;

    const rightToLift ={
      hidden:{
        x:-110
      },
      visible:{
        x:0,
        transition:{duration:1, mass: 10,staggerChildren: 1,easeInOut},
        viewport:{once:true},

      }
      

    }
    const liftToRight ={
      hidden:{
        x:100
      },
      visible:{
        viewport:{once:true},
        x:0,
        transition:{duration:1, type:"spring",staggerChildren: 1,easeInOut}
      }
    }
    const btn={
      whileHover:{
        scale:1.1,
        transition:{duration: .1, mass:2 }
      }
    }

    


  return (
    <AboutUsStyle>
      <header className="head">
        <motion.div className="head-left"
          variants={rightToLift}
            initial="hidden"
            whileInView="visible"
        >
          <h1>Tell a better brand story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
            veniam dolorum quas repudiandae minima praesentium iusto deserunt
            voluptatum similique ullam vel natus non at
          </p>
          <div className="head-btns">
            <motion.button className="btn accent-btn"
              variants={btn}
              whileHover="whileHover"
            >EXPLORE MORE</motion.button>
            <button className="btn">Contact Us</button>
          </div>
        </motion.div>
        <div className="head-right">
          <img
            className="main-image"
            src="/about_us_model.png"
            alt="model image"
          />
        </div>
        <div className="head-sponsors">
          <span>Alpha</span>
          <span>Beta</span>
          <span>Gama</span>
          <span>Theeta</span>
        </div>
      </header>
      <section className="first-section">
        <div className="first-section-heading">
          Grow faster with your Customers
        </div>
        <div className="first-section-content cards">
          <motion.div className="sectoin-rating card"
            variants={rightToLift}
            initial="hidden"
            whileInView="visible"
          >
            <div className="first-section-content-head">
              <FiStar className="first-section-icons"/>
              <h3>Rating & Reviews</h3>
            </div>
            <p className="first-section-text">
              Collect review, Q&A and other content from your customers started
            </p>
          </motion.div>

          <div className="sectoin-sales card">
            <div className="first-section-content-head">
              <FiDollarSign className="first-section-icons" />
              <h3>Sales and Marketing </h3>
            </div>
            <p className="first-section-text">Use your user-generated content in sales and marketing.</p>
          </div>

          <motion.div className="sectoin-customer card"
            variants={liftToRight}
            initial="hidden"
            whileInView="visible"
          >
            <div className="first-section-content-head">
              <FiActivity className="first-section-icons" />
              <h3>Customer Experience</h3>
            </div>
            <p className="first-section-text">
              In the end ,it's all about your customers. Build their trust and
              help
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* main content section */}
      <section className="main-content">
        <div className="main-content-head">
          <h2>How it works</h2>
          <p>it's about you and your family, hving a comfortable 
          payment, exceptional service and a lender</p>
        </div>
        
        {/* card panel one  */}
        <div className="card-panel one section2align">
          <motion.div className="card-panel-card-1 card mid-card-text" 
            variants={rightToLift}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="card-panel-card-1-heading">Create Account</h3>
            <p className="card-panel-card-1-text">Lorem-ipsum.paraAute irure irure duis ea voluptate culpa do consequat in est. Culpa nisi in fugiat eu dolor cillum laboris consectetur ex eiusmod velit. Non laboris laboris dolor ad ut sint irure adipisicing labore tempor amet consectetur ea dolor.</p>
            <motion.button className="accent-btn btn"
              variants={btn}
              whileHover="whileHover"
            >Sign Up</motion.button>
          </motion.div>
          <div className="card-panel-card-1-side-text mid-card-text">
            <h3>Create Account</h3>
            <p>Lorem-ipsumLaboris ipsum cupidatat anim sit. Eiusmod proident dolore enim enim do non ullamco proident dolore et. Culpa velit elit ex aliqua pariatur excepteur occaecat eiusmod officia laborum. Incididunt aliqua minim cupidatat duis non reprehenderit sit ad. Irure anim ut minim eiusmod eiusmod aliquip laboris consectetur reprehenderit.</p>
          </div>
        </div>

        {/* Card panel two */}

        <div className="card-panel two  section2align">
        <div className="card-panel-card-2-side-text mid-card-text">
            <h3>Search for Services</h3>
            <p>Lorem-ipsumLaboris ipsum cupidatat anim sit. Eiusmod proident dolore enim enim do non ullamco proident dolore et. Culpa velit elit ex aliqua pariatur excepteur occaecat eiusmod officia laborum. Incididunt aliqua minim cupidatat duis non reprehenderit sit ad. Irure anim ut minim eiusmod eiusmod aliquip laboris consectetur reprehenderit.</p>
          </div>
          <motion.div className="card-panel-card-2 card"
            variants={liftToRight}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="card-panel-card-2-heading">Search</h3>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <input type={"text"} className="card-panel-card-2-input"/>
            <FiSearch className="search"/> </div>
          </motion.div>
        </div>
          
          {/* card panel three */}

          <div className="card-panel three section2align">
          <motion.div className="card-panel-card-3 card"
            variants={rightToLift}
            initial="hidden"
            whileInView="visible"
            when="beforeChildren"
          >
            <motion.span 
                  initial={{scale:0.5}}
                  whileInView={{y:0,scale:1}} 
                    transition={{duration: 2, type:"spring", stiffness:300}} 
                    >
              <BsFillEmojiHeartEyesFill className="emoji"/>
            </motion.span>  
            <motion.span 
                initial={{scale:0.5}}
                whileInView={{y:0,scale:1}}
                transition={{duration: 2, type:"spring", stiffness:300}} 
                    >
              <BsFillEmojiWinkFill className="emoji"/>
            </motion.span>
            <motion.span 
                initial={{scale:0.5}}
                    // animate={} 
                    // viewport={{ once: true }} 
                    whileInView={{y:0,scale:1}} 

                    transition={{duration: 2, type:"spring", stiffness:300}} >
               <BsFillEmojiKissFill className="emoji"/>
             </motion.span>

          </motion.div>
          <div className="card-panel-card-3-side-text mid-card-text">
            <h3>Sit back and enjoy</h3>
            <p>Lorem-ipsumLaboris ipsum cupidatat anim sit. Eiusmod proident dolore enim enim do non ullamco proident dolore et. Culpa velit elit ex aliqua pariatur excepteur occaecat eiusmod officia laborum. Incididunt aliqua minim cupidatat duis non reprehenderit sit ad. Irure anim ut minim eiusmod eiusmod aliquip laboris consectetur reprehenderit.</p>
          </div>
        </div>
      </section>


      {/* info section  */}
      <section className="infos">
          <div className="aboutus">
            <h2>ABOUT US</h2>
            <p>LoremAliqua et 
            aute minim commodo magna. 
            Dolor laborum occaecat cupidatat </p>
            <div className="btns">
              <motion.button className="accent-btn btn"
                variants={btn}
                whileHover="whileHover"
              >LEARN MORE</motion.button>
              <button className="btn">WATCH VIDEO <FiPlay/></button>
            </div>
          </div>
          <motion.div 
                    initial={{y:-10,scale:0.5}}
                    whileInView={{y:0,scale:1}} 
                    transition={{duration: .6,mass: 10,}}  
                     className="more-infos">
            <div className="info-1 accent-btn info">
              <h3>1020+</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="info-2 info">
            <h3>1020+</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="info-3 info">
            <h3>1020+</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="info-4 info">
            <h3>1020+</h3>
              <p>lorem ipsum</p>
            </div>
          </motion.div>
      </section>

      {/* testamonial or idk what it is called tbh */}
      <section className="testimonial">
        <h2 className="testimonial-head">WHAT OUR CLIENTS SAY</h2>
        <h3>Community development is often linked with community works or community
        planning and may involve stakeholders, foundations</h3>
        <div className="testimonial-content">
        <h1>CAROUSAL HERE</h1>
        </div>
      </section>

      {/* sign up section */}
      <section className="signup-section">
        <h2>Ready to get started?</h2>
        <p>Product on online service or over the internet, 
        Electronic commerce draws on technologies such as mobile commerce application</p>
        <div className="email-input">
          <input placeholder="email" className="signup-input" type={"email"} /><motion.span 
            variants={btn}
              whileHover="whileHover"
          ><button className="signup-btn btn">Sign Up</button></motion.span>
        </div>
      </section>
      <Footer/>
    </AboutUsStyle>
  );
}
