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
import { FaTimesCircle } from 'react-icons/fa'
// import Intro2 from '../Intro2'

// import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
import styled from "styled-components"

const CustomBox = styled.div`
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
	
  <div className="outer intro" style={{}}>
  

  
    <div id="hero"
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '125px',
        position: 'relative',
//         overflowX: 'scroll',
overflow:'hidden',
      }}
    >
    
    
 

    
    

    
    <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{display:'none', position:'absolute', bottom:'0', left:'0', zIndex: '0',}}>
        <div className="scrolldown txtshadow-header" style={{ textAlign: 'left', fontSize: '50px', color: 'black', zIndex: '1'}}> <IoIosArrowDropdownCircle style={{position:'absolute', left:'-0px', bottom:'5px',  zIndex:'1'}} /> </div>
   </ScrollAnimation>
        
        
        
        
<ScrollAnimation animateIn="bounceInRight"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{display:'none', position:'absolute', left:'10%', bottom:'25%', zIndex:'1',}}>
<label style={{display:'flex', justifyContent:'center',}} htmlFor="modal-toggle">
<div className="special txtshadow" style={{padding:'.5rem 2rem', backgroundColor:'#DB2600', color:'#fff', borderRadius:'6px', cursor:'pointer',}}>Get Started</div>
</label>
</ScrollAnimation>
    
    
    {/*  
 <ScrollAnimation animateIn="bounceInDown"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
           position: 'relative',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {heading}
        </h1>
        </ScrollAnimation>
        */}
        
        
         {/* <ScrollAnimation animateIn="bounceInLeft"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subheading}
        </h2>
        </ScrollAnimation> */}
        
        {/* <ScrollAnimation animateIn="bounceInUp"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h3
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subsubheading}
        </h3>
        </ScrollAnimation> */}
        
        
        

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} offset={0}>
        <h2
          className="normal mobile-txt"
          style={{
            color: '#333',
            fontSize: '1rem',
           position: 'relative',
           textTransform:'uppercase',
           top: '20%',
        margin: '0 auto',
        padding: '0 0',
            float: 'none',
            fontWeight:'bold',

            
          }}
        >
           Pav &amp; Broome Fine Jewelry
        </h2>
        </ScrollAnimation>
        
        
        
        
        
         <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={400}>
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
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={800}>
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
          <a href="/" style={{color:'#333', fontSize:'', textDecoration:'none',}}>See The Work <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
        </h3>
        </ScrollAnimation>
        



       

        <div className="split" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'60vw', margin:'-5vh 0 0 30vw', padding:'0', overflow:'',}}>

<ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={200} style={{width:'15vw', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'24px', overflow:'hidden', position:'relative', margin:'0 0', transform:'rotate(10deg)',}}><Image alt="Ad2" filename="home-banner-phone.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Mobile websites</div>
</div>
</ScrollAnimation>

{/* <iframe width="100%" height="300px" src="https://pavandbroome.com"></iframe> */}

 <ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={500} style={{width:'40vw', padding:'0', position:'relative'}}>  

<label id="vid-open" for="vid-toggle"></label>
 <input type="checkbox" id="vid-toggle" style={{width:'100%', display:'flex', justifyItems:'center', justifyContent:'center', textAlign:'center', alignItems:'center'}}/>
 

<label id="vidpop" for="vid-toggle">
<div className="imgbox shadow-3d" id="banner-vid" style={{border:'1px solid #000', borderRadius:'10px', overflow:'hidden', padding:'0', background:'#000', position:'relative', margin:'0 0', transform:'rotate(-10deg)',}}><iframe width="100%" height="280" src="https://www.youtube-nocookie.com/embed/7fyqJT8QDBY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
<div className="sub" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#fff', textAlign:'center', width:'100%',}}>Television spot for PavandBroome.com</div>
<label className="news-close1" htmlFor="vid-toggle" style={{display:'none', fontSize:'24px', color:'#fff', position:'relative', right:'0'}}><FaTimesCircle /></label>
</div>
</label>


</ScrollAnimation>



 </div>
{/* end split */}






       
    </div>
    
    
  
  
  
  
  
  
  
  
  
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<Image className="spotimg" alt="Ad2 Inc Marketing and PR" filename="aboutpic.jpg" /><br />
<h2>The Ad2 Difference</h2>
<p>
With our best-in-class capabilities, high quality work and superior support, we can market your company in the most cost effective way.
Let Ad2 assist you with bringing your vision to a reality.</p>
<br />
<Link className="interest grad-dark" to="/about" style={{color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', width:'200px', padding:'3px .5rem 0 1rem', margin:'0 auto',}}>See For Yourself <span style={{fontSize:'120%', position:'relative', right:'0', top:'0', color:'#ff0000',}}><MdPlayArrow /></span></Link>


</div>
</div>
</ScrollAnimation>






<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div id="desc" className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>

<div style={{width:'60%',}}>
<h2>Main Spotlight</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<div style={{width:'40%', margin:'0 0 0 1rem', }}>
<img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} /></div>

</div>
<Link className="interest grad-dark" to="/" style={{color:'#fff', textDecoration:'none', display:'none', justifyContent:'center', width:'200px', padding:'3px .5rem 0 1rem', margin:'0 auto',}}>More Info <span style={{fontSize:'120%', position:'relative', right:'0', top:'0', color:'#ff0000',}}><MdPlayArrow /></span></Link>
</div>
</ScrollAnimation>







<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>

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
<Link className="special grad" to="/capabilities" style={{color:'#fff', textDecoration:'none', display:'none',  justifyContent:'center', width:'200px',  padding:'3px .5rem 0 1rem', margin:'0 auto',}}>Do it Now! <span style={{fontSize:'120%', position:'relative', right:'0', top:'0', color:'#fff',}}><MdPlayArrow /></span></Link>
</div>
</ScrollAnimation>


  





<ScrollAnimation style={{display:'none'}} animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
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
    
    
    
    
    
    
    

    <ScrollAnimation style={{display:'none'}} animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
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
