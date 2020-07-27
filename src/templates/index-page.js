import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
import Image from '../components/Image'
import { Link } from 'gatsby'
import logo from '../img/ad2inc-logo-round.svg'
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'
import { FaTimesCircle } from 'react-icons/fa'
// import Intro3 from '../components/Intro3'

// import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
import styled from "styled-components"

const CustomBox = styled.div`


// .slide {
//     position:absolute;
// }

// .slide:nth-child(1) {
//     -webkit-animation: fade 24s 0s infinite;
//     z-index:40;
// }

// .slide:nth-child(2) {
//     -webkit-animation: fade 24s 6s infinite;
//     z-index:30;
// }

// /*
// .slide:nth-child(3) {
//     -webkit-animation: fade 24s 12s infinite;
//     z-index:20;
// }

// .slide:nth-child(4) {
//     -webkit-animation: fade 24s 18s infinite; 
//     z-index:10;
// }
// */

// @-webkit-keyframes fade {
//     0%{
//       opacity: 1;
//    }
//    15% {
//       opacity:1;
//    }
//    25%{
//       opacity: 0;
//    }
//    90% {
//       opacity:0;
//    }
//    100% {
//       opacity:1;
//    }
// }







*, *:before, *:after { box-sizing: border-box; }
.container, .outer{background:transparent;}
.spotimg{border-radius:12px;}
.imgbox{animation: zoomIn;
animation-duration: 2s;}

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






// #banner-vid:hover{transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;}

// #banner-vid{
//   display: block;
//   &:hover,
//   &:focus {
//     transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
//   }
// }



@media (max-width: 767px) {
  .full-width-image{background-position: center center !important; border:0px solid red !important;}
}

@media (max-width: 400px) {
  .full-width-image{background-position: top center !important; border:0px solid red !important; padding-top:100px !important}
}

@media (min-width: 58rem) {

  .full-width-image h1{font-size:200% !important;}
  .full-width-image h2{font-size:100% !important;}
  .full-width-image h3{font-size:100% !important;}
   .full-width-image p{font-size:102% !important;}

   .full-width-image{background-position: bottom right;}
  
  #hero h1{font-size:350% !important; line-height:95%; margin-bottom:1rem;}
  #hero h3{font-size:100% !important; color:red !important;}
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
	
  


  
  
<div className="intro outer">




{/* --------------------------------- */}
















<div className="image-wrap" style={{height:'100vh', position:'relative', paddingTop:'0', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400',display:'block',
  height:'100vh',
  border:'0px solid red', }}>





<div className="bob" style={{position:'absolute', top:'0', height:'100vh', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'0',}}>

<ScrollAnimation animateIn="fadeIn" animationOut="fadeOut" offset={0}>
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Stars" filename="home-banner.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    {/* <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Camp" filename="3136.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="todd-friends.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div> */}

  </div>
</div>
</ScrollAnimation>

</div>



<div style={{position:'relative', padding:'0 0 0 2rem'}}>
<h2
  className="normal mobile-txt"
  style={{
    color: '#333',
    fontSize: '1rem',
   position: 'relative',
   textTransform:'uppercase',
   top: '18vh',
margin: '0 auto',
padding: '0 0',
    float: 'none',
    fontWeight:'bold',
  }}
>
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={400}>
   Pav &amp; Broome Fine Jewelry
   </ScrollAnimation>
</h2>

<p
  className="normal mobile-txt"
  style={{
    color: '#333',
    fontSize: '.8rem',
   position: 'relative',
   width:'48vw',
   top:'22vh',
  margin: '0 ',
    textAlign: 'left',
    border: '0px solid red',
  }}
>
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={400}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.  
  </ScrollAnimation>
</p>


<h3
  className="normal spotlink mobile-txt"
  style={{
    color: '#333',
    fontSize: '1rem',
   position: 'relative',
   textTransform:'uppercase',
   textDecoration:'none',
   top:'25vh',
    margin: '0',
    textAlign: 'left',
    border: '0px solid red',
  }}
>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={800}>
  <a href="/" style={{color:'#333', fontSize:'', textDecoration:'none',}}>See The Work <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
  </ScrollAnimation>
</h3>
</div>


<div className="split" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'100vw', margin:'0 0 0 0', padding:'0 0 0 10vw', overflow:'',}}>

<ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={200} style={{width:'18vw', padding:'0', position:'absolute', top:'15vh', right:'5vw'}}>    
<div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'24px', overflow:'hidden', position:'relative', margin:'0 0', transform:'rotate(10deg)',}}><Image alt="Ad2" filename="home-banner-phone.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Mobile websites</div>
</div>
</ScrollAnimation>


<ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={500} style={{width:'34vw', padding:'0', position:'absolute', top:'34vh', left:'10vw',}}>  
<div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'18px', overflow:'hidden', position:'relative', margin:'0 0', transform:'rotate(4deg)',}}>
{/* <iframe width="100%" height="300px" src="https://pavandbroome.com"></iframe> */}
<Image alt="Ad2" filename="home-banner-web.jpg" style={{}}  />
</div>
</ScrollAnimation>



<ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={500} style={{width:'40vw', padding:'0', position:'absolute', top:'20vh', right:'20vw'}}>  
<label id="vid-open" htmlFor="vid-toggle"></label>
<input type="checkbox" id="vid-toggle" style={{width:'100%', display:'flex', justifyItems:'center', justifyContent:'center', textAlign:'center', alignItems:'center'}}/>

<label id="vidpop" htmlFor="vid-toggle">
<div className="imgbox shadow-3d" id="banner-vid" style={{border:'1px solid #000', borderRadius:'10px', overflow:'hidden', padding:'0', background:'#000', position:'relative', margin:'0 0', transform:'rotate(-10deg)',}}>

<iframe width="100%" height="280" src="https://www.youtube.com/embed/7fyqJT8QDBY" frameBorder="0" allowFullScreen></iframe>

<div className="sub" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#fff', textAlign:'center', width:'100%',}}>Television spot for PavandBroome.com</div>
<label className="news-close1" htmlFor="vid-toggle" style={{display:'none', fontSize:'24px', color:'#fff', position:'relative', right:'0'}}><FaTimesCircle /></label>
</div>
</label>
</ScrollAnimation>



</div>






        
        



        
        





        
 </div>       
    
{/* ABOVE IS FIRST SECTION */}
 





























{/* <div style={{
  display:'block',
  height:'100vh',
  border:'1px solid red',
}}></div> */}
    
    

  
  
 


  






    
    
    
    
    
    
    


    
    
{/* CONTACT PANEL  */}


<ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>



    <Contact />


</ScrollAnimation>

{/* END CONTACT PANEL */}
    
       

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
