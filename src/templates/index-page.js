import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
import Image from '../components/Image'
import { Link } from 'gatsby'
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'

// import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
import styled from "styled-components"

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.spotimg{border-radius:12px;}

.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
//   border:20px solid red !important;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 300%;
    left: -100%;
  }
}

@media (max-width: 767px) {
  .fullscreen-bg {
    background: url('../img/videoframe.jpg') center center / cover no-repeat;
  }

  .fullscreen-bg__video {
    display: none;
  }
}

@media (min-width: 58rem) {

  .full-width-image h1{font-size:200% !important;}
  .full-width-image h2{font-size:200% !important;}
  .full-width-image h3{font-size:100% !important;}
   .full-width-image p{font-size:102% !important;}
  
  #hero h1{font-size:350% !important; line-height:95%; margin-bottom:1rem;}
  #hero h3{font-size:380% !important; color:red !important;}
  .special{font-size:100% !important;}
}



`





export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subsubheading,
  
  image2,
  i2Heading,
  i2Subheading,
  i2Subsubheading,
  i2Subsubheading2,
  
  image3,
  i3Heading,
 i3Subheading,
  i3Subsubheading,
  i3Subsubheading2,
  



  
}) => (
	
	<>
     
    
	<CustomBox>
	
  <div className="outer intro" style={{}}>
  

  
    <div id="hero"
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '125px',
        position: 'relative',
//         overflowX: 'scroll',
      }}
    >
    
    
 

    
    

    
    <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={false} style={{position:'absolute', bottom:'0', left:'0', zIndex: '0',}}>
        <div className="scrolldown txtshadow-header" style={{ textAlign: 'left', fontSize: '50px', color: 'red', zIndex: '1'}}> <IoIosArrowDropdownCircle style={{position:'absolute', left:'-0px', bottom:'5px',  zIndex:'1'}} /> </div>
   </ScrollAnimation>
        
        
        
        
<ScrollAnimation animateIn="bounceInRight"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{display:'none', position:'absolute', left:'10%', bottom:'25%', zIndex:'1',}}>
<label style={{display:'flex', justifyContent:'center',}} htmlFor="modal-toggle">
<div className="special txtshadow" style={{padding:'.5rem 2rem', backgroundColor:'#DB2600', color:'#fff', borderRadius:'6px', cursor:'pointer',}}>Get Started</div>
</label>
</ScrollAnimation>
    
    
    
 <ScrollAnimation animateIn="bounceInDown"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
/*
            fontSize: '3.5rem',
*/
            color: '#fff',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {heading}
        </h1>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subheading}
        </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInUp"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h3
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subsubheading}
        </h3>
        </ScrollAnimation>
        
        
        
        
        
       
    </div>
    
    
  
  
  
  
  
  
  
  
  
  <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<Image className="spotimg" alt="Ad2 Inc Marketing and PR" filename="aboutpic.jpg" /><br />
<h2>The Ad2 Difference</h2>
<p>
With our best-in-class capabilities, high quality work and superior support, we can market your company in the most cost effective way.
Let Ad2 assist you with bringing your vision to a reality.</p>
<br />
<Link className="interest grad-dark" to="/portfolio" style={{color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', width:'200px', padding:'3px .5rem 0 1rem', margin:'0 auto',}}>See For Yourself <span style={{fontSize:'120%', position:'relative', right:'0', top:'0', color:'#ff0000',}}><MdPlayArrow /></span></Link>


</div>
</div>
</ScrollAnimation>






<ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div id="desc" className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>

<div style={{width:'60%',}}>
<h2>Main Spotlight</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<div style={{width:'40%', margin:'0 0 0 1rem', }}>
<img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} /></div>

</div>
<Link className="interest grad-dark" to="/about" style={{color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', width:'200px', padding:'3px .5rem 0 1rem', margin:'0 auto',}}>More Info <span style={{fontSize:'120%', position:'relative', right:'0', top:'0', color:'#ff0000',}}><MdPlayArrow /></span></Link>
</div>
</ScrollAnimation>







<ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>

<div className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>

<div style={{width:'40%', margin:'0 1rem 0 0', }}>
<img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} />
</div>

<div style={{width:'60%',}}>
<h2>Secondary Spotlight</h2>
<p>In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
</p>
</div>

</div>
<Link className="special grad" to="/capabilities" style={{color:'#fff', textDecoration:'none', display:'flex',  justifyContent:'center', width:'200px',  padding:'3px .5rem 0 1rem', margin:'0 auto',}}>Do it Now! <span style={{fontSize:'120%', position:'relative', right:'0', top:'0', color:'#fff',}}><MdPlayArrow /></span></Link>
</div>
</ScrollAnimation>


  





<ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<h2 style={{textAlign: 'center', margin: '1rem 0 2rem 0',}}>Some of our recent work:</h2>
    
        <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2
        })`,
        backgroundPosition: `bottom center`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height:'100vh',
        paddingTop: '55px',
        paddingLeft:'30px',
        overflowX: 'scroll',
      }}
    >
    

     <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
        <h2
          className="normal mobile-txt"
          style={{
            color: '#333',
            fontSize: '1.4rem',
           position: 'relative',
           textTransform:'uppercase',
           top: '20%',
//         right: '5%',
//         left: '5%',
        margin: '0 auto',
        padding: '0 0',
/*
            backgroundImage: 'linear-gradient(#372d26 15.89%, #160e0e 80.13%)',
            border: '0px solid red',
            borderRadius: '8px',
*/
            float: 'none',
//             width: '90vw',
//             textAlign: 'center',
            
          }}
        >
           Jackson County Economic <br />Development Foundation
        </h2>
        </ScrollAnimation>
        
        
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <p
          className="normal mobile-txt"
          style={{
            color: '#333',
            fontSize: '.8rem',
           position: 'relative',
           width:'50%',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        marginTop: '1rem',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.  
        </p>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h3
          className="normal spotlink mobile-txt"
          style={{
            color: '#333',
            fontSize: '1rem',
           position: 'relative',
           textTransform:'uppercase',
           textDecoration:'none',

           
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '1rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          <a href="https://google.com" style={{color:'#333', textDecoration:'none',}}>See The Work <span style={{fontSize:'150%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
        </h3>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
	          display:'none',
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '2rem auto 0 auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subsubheading2}
        </h2>
        </ScrollAnimation>

        
        

    </div>
</ScrollAnimation>
    
    
    
    
    
    
    

    <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image3.childImageSharp ? image3.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom center`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height:'100vh',
        paddingTop: '55px',
        paddingLeft: '30px',
        overflowX: 'scroll',
      }}
    >
    <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
        <h2
          className="normal mobile-txt"
          style={{
            color: '#333',
            fontSize: '1.4rem',
           position: 'relative',
           textTransform:'uppercase',
           top: '20%',
//         right: '5%',
//         left: '5%',
        margin: '0 auto',
        padding: '0 0',
/*
            backgroundImage: 'linear-gradient(#372d26 15.89%, #160e0e 80.13%)',
            border: '0px solid red',
            borderRadius: '8px',
*/
            float: 'none',
//             width: '90vw',
//             textAlign: 'center',
            
          }}
        >
           Pav &amp; Broome Fine Jewelry
        </h2>
        </ScrollAnimation>
        
        
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <p
          className="normal mobile-txt"
          style={{
            color: '#333',
            fontSize: '.8rem',
           position: 'relative',
           width:'50%',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        marginTop: '1rem',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.  
        </p>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h3
          className="normal spotlink mobile-txt"
          style={{
            color: '#333',
            fontSize: '1rem',
           position: 'relative',
           textTransform:'uppercase',
           textDecoration:'none',

           
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '1rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          <a href="https://google.com" style={{color:'#333', textDecoration:'none',}}>See The Work <span style={{fontSize:'150%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
        </h3>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
	          display:'none',
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '2rem auto 0 auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subsubheading2}
        </h2>
        </ScrollAnimation>
        
        

        
     
       
       
    </div>
    </ScrollAnimation>
    
    
    
    
    <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <Contact />
</ScrollAnimation>



    
       
    
  </div>
  </CustomBox>
  <Install />
</>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subsubheading: PropTypes.string,
  
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i2Heading: PropTypes.string,
  i2Subheading: PropTypes.string,
  i2Subsubheading: PropTypes.string,
  i2Subsubheading2: PropTypes.string,

  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i3Heading: PropTypes.string,
  i3Subheading: PropTypes.string,
  i3Subsubheading: PropTypes.string,
  i3Subsubheading2: PropTypes.string,
}



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
	  
	  
	  
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        subsubheading={frontmatter.subsubheading}

        image2={frontmatter.image2}
        i2Heading={frontmatter.i2Heading}
        i2Subheading={frontmatter.i2Subheading}
        i2Subsubheading={frontmatter.i2Subsubheading}
        i2Subsubheading2={frontmatter.i2Subsubheading2}

        image3={frontmatter.image3}
       i3Heading={frontmatter.i3Heading}
        i3Subheading={frontmatter.i3Subheading}
        i3Subsubheading={frontmatter.i3Subsubheading}
        i3Subsubheading2={frontmatter.i3Subsubheading2}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        subsubheading
        image2 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i2Heading
		i2Subheading
		i2Subsubheading
		i2Subsubheading2
		
		 image3 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i3Heading
		i3Subheading
		i3Subsubheading
		i3Subsubheading2
		
      }
    }
  }
`
