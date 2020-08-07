/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
import Image from '../components/Image'
// import { Link } from 'gatsby'
// import logo from '../img/ad2inc-logo-round.svg'
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
// import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'
import { FiCornerRightDown } from 'react-icons/fi'
// import { FaTimesCircle } from 'react-icons/fa'
// import Intro3 from '../components/Intro3'

// import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
// import PopNewsletter from '../components/PopNewsletter'
import styled from "styled-components"

const CustomBox = styled.div`
.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}
.progress{position:absolute; top:80vh; left:100px; border:1px solid yellow; z-index:1;}
.slide:nth-child(1) {
  -webkit-animation: fade 24s 0s infinite;
  z-index:2;
}
.slide:nth-child(2) {
  -webkit-animation: fade 24s 6s infinite;
  z-index:1;
}
.slide:nth-child(3) {
  -webkit-animation: fade 0s 0s infinite;
  z-index:0;
}
.slider{z-index:-1;}
//  SLIDE
#vidpop {
  display: block;
  text-align:center;
}
label + input[type=checkbox]{
display:none !important;
} 
 
input[type=checkbox]:checked + label div{
  transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
  z-index:1;
} 
input[type=checkbox]:checked + label div label{display:block !important; cursor:pointer;}
#vid-toggle:checked + #vidpop .sub{display:none !important;}
#vid-open{
  position:absolute; bottom:0; display:block; width:100%; height:100%;  z-index:1; cursor:pointer;
  // background:#fff;
}
// .container2 {
//   scroll-snap-type: y mandatory;
// }
// .child {
//   scroll-snap-align: start;
// }
.wrapper {
	display: flex;
}
// .container {
// 	flex-basis: 100%;
// 	max-height: 100vh;
// 	overflow-y: scroll;
// 	border: 0px solid gray;
// 	scroll-snap-type: y mandatory;
// 	&.proximity {
// 			scroll-snap-type: y proximity;
// 	}
// }
// .container2 {
//   scroll-snap-type: y mandatory;
//   scroll-padding-top: 0;
//   overflow-y: scroll;
// }
// section {
// 	scroll-snap-align: start;
// 	display: flex;
// 	flex-flow: column;
//   // justify-content: center;
//   min-height:100vh;
//   border-bottom:0px solid red !important;
// }
// .container2 {
// 	max-height: 100vh;
// 	overflow-y: scroll;
// 	scroll-snap-type: y mandatory;
// }
section {
	scroll-snap-align: start;
  min-height:100vh;
  border-bottom:0px solid red !important;
  
}
// section img{
//   display:block;
//   height:100vh;
//   width:100vw;
//   background-size:cover;
//   position:fixed;
//   top:0;
//   z-index:-1;
// }
`




const IndexPage1 = () => (
  
  
	

     
     <Layout>
     <CustomBox>
  
     <section className="outer section section--gradient">
      <div className="container" style={{padding: '100px 2rem 0 2rem',}}>
  
  
  <h1>We Grow Business!</h1>

<p>We recognize every business is unique, and we treat each client as the unique partner they are.  We have been creating results-driven marketing for clients across the Southeast for more than 20 years.</p>

<p>Ad2 understands the importance of relevant data as the foundation for effective campaigns. Your message must connect your brand with your audience and effectively communicate  the differentiating benefits of your products, values, and services.</p>
  
   
<blockquote>Your customers must know who you are,

what you can do for them and

why they want to choose you.</blockquote>
  

  <p>At Ad2, we work with each of our clients to develop and implement strategic marketing tactics to increase market share while improving customer retention through enhanced customer relationships and new customer acquisition strategies.</p>
  <div className="spacer33"></div>
  
  <p style={{textAlign:'center'}}><strong>Let’s build your business together.</strong></p>
  
  {/* <div className="spacer33"></div> */}
  </div>
    
    {/* CONTACT PANEL  */}
    <div className="outer" style={{margin:' 0'}}><Contact /></div>
  {/* END CONTACT PANEL */}


</section>
  </CustomBox>
  <Install />
  </Layout>

)



export default IndexPage1

