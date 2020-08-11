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
import Layout from '../components/Layout'
// import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
// import ScrollAnimation from 'react-animate-on-scroll'
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


`




const IndexPage = () => (
  
  
	

     
     <Layout>
     <CustomBox>
  
  <SlidePanelHome1 />
     <section className="outer section homecontent" style={{background:'', marginTop:'auto', marginBottom:'0 !important',}}>
      <div className="container" style={{padding: '100px 2rem 2ren 2rem', margin:'0 !important', maxWidth:'1000px'}}>
  
  
  <h1 style={{textAlign:'center', fontSize:'200%'}}>We Grow Business!</h1>

<p>We recognize every business is unique, and we treat each client as the unique partner they are.  We have been creating results-driven marketing for clients across the Southeast for more than 20 years.</p>

<p>Ad2 understands the importance of relevant data as the foundation for effective campaigns. Your message must connect your brand with your audience and effectively communicate  the differentiating benefits of your products, values, and services.</p>
  
   
<blockquote>Your customers must know who you are,

what you can do for them and

why they want to choose you.</blockquote>
  

  <p>At Ad2, we work with each of our clients to develop and implement strategic marketing tactics to increase market share while improving customer retention through enhanced customer relationships and new customer acquisition strategies.</p>
  {/* <div className="spacer33"></div> */}
  
  <p style={{textAlign:'center', fontSize:'120%', background:'#333', color:'#fff'}}><strong>Let’s build your business together.</strong></p>
  
  {/* <div className="spacer33"></div> */}
  </div>
    
    {/* CONTACT PANEL  */}
   <Contact />
  {/* END CONTACT PANEL */}
<br />

</section>
  </CustomBox>
  </Layout>

)



export default IndexPage

