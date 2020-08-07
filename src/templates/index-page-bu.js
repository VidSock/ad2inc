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
  
  <div className="container2">
  
  
 
  
    <ScrollAnimation animateIn="" animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={true} delay={0} offset={0} style={{width:'',}} >
      
  <section className="child" style={{padding:'0'}}>
  
  <div style={{maxWidth:'50vw', padding:'120px 0 0 3rem'}}>
  <h2 className="normal mobile-txt"
    style={{color: '#333',fontSize: '1rem',textTransform:'uppercase',fontWeight:'bold'}}>
     <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={0}>Welcome to Ad2</ScrollAnimation>
  </h2>
  <div className="normal mobile-txt" style={{color: '#333',fontSize: '.8rem', maxWidth:'48vw',margin: '2rem 0', lineHeight:'1.6rem', border: '0px solid red',}}>
  <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. 
    </ScrollAnimation>
  </div>
  <h3
    className="normal spotlink mobile-txt"
    style={{color: '#333',fontSize: '1rem',textTransform:'uppercase',textDecoration:'none', textAlign: 'left',border: '0px solid red',}}>
    <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={800}>
    <a href="/" style={{color:'#333', fontSize:'', textDecoration:'underline',}}>Scroll Down <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><FiCornerRightDown /></span></a>
    </ScrollAnimation>
  </h3>
 
  </div>
  
  
  <div style={{position:'fixed', backgroundSize:'cover', width:'100%', height:'100vh', zIndex:'-5', display:'block', top:'0' }}><Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg"  /></div>
  
  
    </section>
  </ScrollAnimation>
  {/* END Panel 1 */}
  
  
  
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0}>
    <section className="child" style={{}}>
  
    <div style={{maxWidth:'50vw', padding:'0 0 0 3rem', position:'relative', zIndex:'1', border:'0px solid red'}}>
    <h2 className="normal mobile-txt"
    style={{color: '#333',fontSize: '1rem', textTransform:'uppercase',fontWeight:'bold',border:'0px solid blue',}}>
     <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>Pav &amp; Broome Fine Jewelry</ScrollAnimation>
  </h2>
  <div className="normal mobile-txt" style={{color: '#333',fontSize: '.8rem',margin: '2rem 0',textAlign: 'left',border: '0px solid red', lineHeight:'1.6rem',}}>
  <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. 
    </ScrollAnimation>
  </div>
  <h3
    className="normal spotlink mobile-txt"
    style={{color: '#333',fontSize: '1rem',textTransform:'uppercase',textDecoration:'none',textAlign: 'left',border: '0px solid red',}}>
    <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={800}>
    <a href="/" style={{color:'#333', fontSize:'', textDecoration:'underline',}}>View the Work <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
    </ScrollAnimation>
  </h3>
  </div>
  {/* <div className="split" style={{display:'block', width:'', height:'100vh', margin:'0 0 0 0', padding:'0 0 0 0', border:'1px solid blue', overflow:'hidden'}}> */}
  
  <ScrollAnimation animateIn="bounceInRight" animateOnce={true} animatePreScroll={false} delay={200} style={{padding:'0', zIndex:'-1'}}>    
  <div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'24px', overflow:'hidden', position:'absolute', margin:'-30vh 0', width:'180px', height:'', transform:'rotate(10deg)', right:'100px',}}><Image alt="Ad2" filename="home-banner-phone.jpg" style={{}}  />
  <div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Mobile websites</div>
  </div>
  </ScrollAnimation>
  
  
  <ScrollAnimation animateIn="bounceInRight" animateOnce={true} animatePreScroll={false} delay={500} style={{zIndex:'-1'}}>  
  <div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'18px', overflow:'hidden', position:'absolute', margin:'0 0', width:'300px', right:'30vw', transform:'rotate(4deg)',}}>
  <Image alt="Ad2" filename="home-banner-web.jpg" style={{}}  />
  </div>
  </ScrollAnimation>
  
  
  
  {/* </div>
     */}
  <div style={{position:'fixed', backgroundSize:'cover', width:'100%', height:'100vh', zIndex:'-4', display:'block', top:'0' }}><Image className="slider1" alt="Todd Stars" filename="ad2-banner-pnb.jpg"  /></div>
  
  
  </section>
  </ScrollAnimation>
  {/* END Panel 2 */}
  
  
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0}>
    <section className="child" style={{}}>
  
    <div style={{maxWidth:'50vw', padding:'0 0 0 3rem', position:'relative', zIndex:'1',}}>
    <h2 className="normal mobile-txt"
    style={{color: '#333',fontSize: '1rem',position: 'relative',textTransform:'uppercase',fontWeight:'bold',border:'0px solid blue',}}>
     <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>JCEDF</ScrollAnimation>
  </h2>
  <div className="normal mobile-txt" style={{color: '#333',fontSize: '.8rem',maxWidth:'48vw', margin: '2rem 0',textAlign: 'left',border: '0px solid red', lineHeight:'1.6rem',}}>
  <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. 
    </ScrollAnimation>
  </div>
  <h3
    className="normal spotlink mobile-txt"
    style={{color: '#333',fontSize: '1rem',textTransform:'uppercase',textDecoration:'none',textAlign: 'left',border: '0px solid red',}}>
    <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={800}>
    <a href="/" style={{color:'#333', fontSize:'', textDecoration:'underline',}}>View The Work <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
    </ScrollAnimation>
  </h3>
  </div>
  <div style={{position:'fixed', backgroundSize:'cover', width:'100%', height:'100vh', zIndex:'-3', display:'block', top:'0' }}><Image className="slider1" alt="Todd Stars" filename="ad2-banner-jcdef.jpg"  /></div>
  
  
  </section>
  </ScrollAnimation>
  {/* END Panel 3 */}
  
  




{/* <div className="container outer content">
  
  <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
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
</ScrollAnimation> */}





{/* <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div id="desc" className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>
<div style={{width:'60%',}}>
<h2>Main Spotlight</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
<div style={{width:'40%', margin:'0 0 0 1rem', }}>
<img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} /></div>
</div>
</div>
</ScrollAnimation> */}







{/* <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
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
</ScrollAnimation> */}

{/* </div> */}

  
  {/* <div className="spacer66"></div> */}
  
  
  {/* <div className="spacer33"></div> */}
  </div>
    
    {/* CONTACT PANEL  */}
    <div className="outer" style={{margin:' 0'}}> <Contact /></div>
  {/* END CONTACT PANEL */}

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