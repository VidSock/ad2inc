import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
// import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'
import { graphql } from 'gatsby'
import { HTMLContent } from '../Content'
// import Contact from '../Contact-inc'
import { FaRegAddressCard } from 'react-icons/fa'
import { GoGear, GoTelescope } from 'react-icons/go'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
// import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.intro:before{
	content: "a pioneer in night photography";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
animation: poof 1s forwards;
animation-delay: 1.2s;
top:0 !important;
}

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}




@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
}




`



const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
      <html className="fullhead" />
    </Helmet>
    
    





<CustomBox>
<div className="intro">
{/* <Intro1 /> */}
{/* <Intro2 /> */}
{/* <Intro3 /> */}
{/* <Intro2 /> */}

<div className="outer">


       
    <ScrollAnimation animateIn="bounceInUp" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <div className="container" style={{marginTop:'',}}>
<div className="content nowrap" style={{padding:'1rem 1rem 1rem 1rem', display:'flex', flexDirection:'row',}}>
<h2 className="pitch1 txtshadow-header" style={{fontSize:'250%', display:'flex', flexDirection:'column',}}>Like this site?</h2>

<div className="nowrap">
<p>Let us build your dream site, custom for you.</p>

<p>An ultra-fast website that uses state-of-the-art technology, is super flexible, and modern designed to work great everywhere.</p>

<h3 className="txtshadow" style={{textAlign:'center',}}>Let Ad2 build your site today!</h3>
</div>
</div>
</div>
</ScrollAnimation>





</div>
    </div>
    
    
    </CustomBox>
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,


}

export default HomePageTemplate
