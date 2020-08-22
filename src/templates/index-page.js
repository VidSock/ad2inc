/* eslint-disable */
import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
// import Image from '../components/Image'
// import { Link } from 'gatsby'
// import logo from '../img/ad2inc-logo-round.svg'
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/LayoutHome'
// import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
// import { IoIosArrowDropdownCircle } from 'react-icons/io'
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'
// import { FaTimesCircle } from 'react-icons/fa'
// import Intro3 from '../components/Intro3'
import HomeAnimation from '../components/HomeAnimation2'
// import BgImage from '../components/BgImage'
// import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'
// import Img1 from '../components/Img1'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
// import PopNewsletter from '../components/PopNewsletter't
import styled from "styled-components"

const CustomBox = styled.div`

// caras



.panel-wrapper{
  margin: 0 ;
  width:100%;
  
}

.slidepanel{
  display:flex;
  flex-wrap:nowrap;
  // width:100vw;
  height:100vh;
  // height: calc(100vh - 88px);
  overflow:hidden;
}

.slidepanel > div{
  // min-width:16vw;
  width:50vw;
  flex-grow:1;
  flex-shrink:1;
  height:100%;
  // overflow:hidden;
  transition:all .5s ease;
  // border-left:1.5px solid ;
  // border-right:1.5px solid ;
  border-radius:0px;
  position:relative;
  align-items: center;
  justify-content: center;
}






.button2{
   display:inline-block;
   padding:.5em 3vw;
   border:0.16em solid #FFFFFF;
  border-radius:6px;
   margin:1rem auto;
   box-sizing: border-box;
  box-shadow: 0px 1px 6px 1px black;
   text-decoration:none;
  text-shadow: 1px 2px 1px black;
   font-weight:400;
   color:#FFFFFF;
  background:#333;
  filter: brightness(120%);
  opacity:.9;
   transition: all 0.15s;
  }
  .button2:hover{
   color:#DDDDDD;
   border-color:#FF0000;
  filter: brightness(140%);
  }

  .button2:active{
   color:#BBBBBB;
   border-color:#BBBBBB;
  }
  @media all and (max-width:30vw){
   .button2{
    display:block;
    margin:0.4em auto;
   }
}

@media (max-width: 48rem) {
.headline{padding:4px; font-size:70%;}
}


//  .gatsby-image-wrapper{position: initial !important;}





 .shout{width:100%; height:100vh; display:flex; flex-direction:column;}
//  .shout span:first-child{}
 .shout span{
    width:100vw;
    height:20vh;
    //  overflow:hidden;
    // animation: poptop 12s forwards;
    // animation-name: poptop;
    // animation-timing-function: ease-out; 
    // animation-delay: 3s;
    // animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running; 
  opacity:0;
  // border:1px solid blue;
  text-shadow: 0 1px 0 #ccc,
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0,0,0,.1),
  0 0 5px rgba(0,0,0,.1),
  0 1px 3px rgba(0,0,0,.3),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.25),
  0 10px 10px rgba(0,0,0,.2),
  0 20px 20px rgba(0,0,0,.15);
    }




    @keyframes poptop {
      0%{
            opacity: 0;
            // transform: translateY(-100vh)
         }
         50%{
          opacity: .8;
          transform: translateY(0)
       }

         100% {
            opacity:0;
            transform: translateY(0)

         }
      
      }


      @keyframes tagline {
        0%{
          opacity: 0;
          // transform: translateY(-100vh)
       }
       50%{
        opacity: .8;
        transform: translateY(0)
     }

       100% {
          opacity:.8;
          transform: translateY(0)

       }
          }


    @keyframes tooltop{
        0% { opacity: 0; transform: scale(1.3) }
        5% { opacity: 0;}
        10% { opacity: .3; -webkit-transform: translateX(0px); }
        25% { opacity: .4; -webkit-transform: translateX(0px); }
        30% { opacity: .5;  transform: scale(.9) translate(1px); }
        80% { opacity: 1; transform: scale(1) translate(0px); }
        100% { opacity: 0; }
    }

    @media (hover: hover) {
      .touchindicator{display: none !important;}
      }

`




const IndexPage = () => (
  
  
	

     
     <Layout>
     <CustomBox>

     
<HomeAnimation />





     <div className="container">
<div className="content" style={{width:'90vw', padding:'2rem 0', maxWidth:'1000px', margin:'auto'}}>
  
<ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0}>
  <h1 style={{textAlign:'center', fontSize:'200%'}}>We Grow Business!</h1>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={300}>
<p>We recognize every business is unique, and we treat each client as the unique partner they are.  We have been creating results-driven marketing for clients across the Southeast for more than 20 years.</p>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={400}>
<p>Ad2 understands the importance of relevant data as the foundation for effective campaigns. Your message must connect your brand with your audience and effectively communicate  the differentiating benefits of your products, values, and services.</p>

<blockquote>Your customers must know who you are,

what you can do for them and

why they want to choose you.</blockquote>
   </ScrollAnimation>


<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={500}>
  <p>At Ad2, we work with each of our clients to develop and implement strategic marketing tactics to increase market share while improving customer retention through enhanced customer relationships and new customer acquisition strategies.</p>
</ScrollAnimation>

  <ScrollAnimation animateIn="tada" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={400}>
  <p style={{textAlign:'center', margin:'.6rem 0 0 0', fontSize:'120%', background:'#222', color:'#fff'}}><strong>Let’s grow your business together.</strong></p>
  </ScrollAnimation>


  </div>

</div>

{/* <div className="container">
<div className="content" style={{width:'90vw', padding:'0 0', maxWidth:'1000px', margin:'auto'}}>
<Contact className="container contactform" />
</div>
</div> */}
  <ScrollAnimation animateIn="pulse" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={400}>
<div className="outer"> <Contact /></div>
</ScrollAnimation>

  </CustomBox>
  </Layout>

)



export default IndexPage

