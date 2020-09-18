/* eslint-disable */
import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
import Image from '../components/Image'
// import { Link } from 'gatsby'
// import logo from '../img/ad2inc-logo-round.svg'
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
// import Navbar from '../components/Navbar2'
// import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
// import { IoIosArrowDropdownCircle } from 'react-icons/io'
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'
// import { FaTimesCircle } from 'react-icons/fa'
// import Intro3 from '../components/Intro3'
import SlidePanelHome1 from '../components/slidePanelHome1'

// import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
// import PopNewsletter from '../components/PopNewsletter't
import styled from "styled-components"

const CustomBox = styled.div`


.outer .container{margin-bottom:0 !important;}
.logolink{display:flex; border:0px solid red; clear:both; margin:2rem; justify-content:space-between; max-width:1200px; margin:0 auto;}
.logolink  .gatsby-image-wrapper{max-width:25%; width:20vw; margin:20px; height:100%;}
.logolink img{filter: invert(82%) sepia(85%) saturate(0) hue-rotate(138deg) brightness(128%) contrast(60%);}
.logolink img:hover{filter:none;}
body #logo{display:none !important;}

// #velvet{
//   display:block;
//   height:100vh;
//   width:100vw;
//   position:fixed;
//   z-index:-1;
//   top:0;
//   left:0;
// }



`




const WhatWeDo = () => (
  
  
	

     
     <Layout>
      

     <CustomBox>

  <SlidePanelHome1 />
<br />

<h2 style={{textAlign:'center', fontSize:'140%'}}>Where You’ve Seen Us</h2>
<div className="logolink">
<Image filename="PB-logo.png" />
<Image filename="Coastal-Electric.png" />
<Image filename="GCCFCU.png" />
<Image filename="Burnham-Drugs.png" />
</div>



  <div className="container" style={{ background:''}}>
<div className="content" style={{width:'90vw', padding:'2rem 0', maxWidth:'1000px', margin:'auto',}}>
  




  
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

  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={400}>
  <p style={{textAlign:'center', margin:'.6rem 0 0 0', fontSize:'120%', background:'#222', color:'#fff'}}><strong>Wanna know more?</strong></p>
  </ScrollAnimation>


  </div>
  
</div>
    
  <ScrollAnimation animateIn="pulse" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={400}>
<div className="outer"> <Contact /></div>
</ScrollAnimation>

<div className="spacer33"></div>



<div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">
  
    <div className="wave waveTop" style={{backgroundImage:'url(./wave-top.png)' }}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage:'url(./wave-mid.png)' }}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage:'url(./wave-bot.png)'}}></div>
  </div>
</div>


  </CustomBox>
  </Layout>

)



export default WhatWeDo

