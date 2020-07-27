import React from 'react'
import Layout from '../components/Layout'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../components/Image'
import styled from "styled-components"
import { MdPlayArrow } from 'react-icons/md'
import { FiCornerRightDown } from 'react-icons/fi'

// import Contact from '../components/Contact-inc'

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


`

const Test3 = () => (
  <Layout>
   <CustomBox>
  
  
<div id="panel" style={{position:'relative', height:'100vh', width:'', overflow:'hidden'}}>

<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={0} offset={0}>

<div style={{position:'fixed', backgroundSize:'cover', width:'100%', height:'100vh', zIndex:'-5', display:'block', top:'0' }}><Image className="slider1" alt="Todd Stars" filename="home-banner.jpg"  /></div>


<h2 className="normal mobile-txt"
  style={{color: '#333',fontSize: '1rem',position: 'relative',textTransform:'uppercase',top: '20vh',left:'2vw',fontWeight:'bold',border:'0px solid blue',}}>
   <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>Welcome to Ad2</ScrollAnimation>
</h2>


<p className="normal mobile-txt" style={{color: '#333',fontSize: '.8rem',position: 'relative',width:'48vw',top:'22vh',left:'2vw',margin: '0 ',textAlign: 'left',border: '0px solid red',}}>
<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. 
  </ScrollAnimation>
</p>


<h3
  className="normal spotlink mobile-txt"
  style={{color: '#333',fontSize: '1rem',position: 'relative',textTransform:'uppercase',textDecoration:'none',top:'28vh',left:'2vw',textAlign: 'left',border: '0px solid red',}}>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={800}>
  <a href="/" style={{color:'#333', fontSize:'', textDecoration:'underline',}}>Scroll Down <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><FiCornerRightDown /></span></a>
  </ScrollAnimation>
</h3>




</ScrollAnimation>
  </div>

{/*  */}





<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0}>
  <div style={{position:'relative', height:'100vh', width:''}}>

<div style={{position:'fixed', backgroundSize:'cover', width:'100%', height:'100vh', zIndex:'-4', display:'block', top:'0' }}><Image className="slider1" alt="Todd Stars" filename="banner-pnb.jpg"  /></div>


<h2 className="normal mobile-txt"
  style={{color: '#333',fontSize: '1rem',position: 'relative',textTransform:'uppercase',top: '20vh',left:'2vw',fontWeight:'bold',border:'0px solid blue',}}>
   <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>Pav &amp; Broome Fine Jewelry</ScrollAnimation>
</h2>


<p className="normal mobile-txt" style={{color: '#333',fontSize: '.8rem',position: 'relative',width:'48vw',top:'22vh',left:'2vw',margin: '0 ',textAlign: 'left',border: '0px solid red',}}>
<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. 
  </ScrollAnimation>
</p>


<h3
  className="normal spotlink mobile-txt"
  style={{color: '#333',fontSize: '1rem',position: 'relative',textTransform:'uppercase',textDecoration:'none',top:'28vh',left:'2vw',textAlign: 'left',border: '0px solid red',}}>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={800}>
  <a href="/" style={{color:'#333', fontSize:'', textDecoration:'underline',}}>See More <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
  </ScrollAnimation>
</h3>




{/*  */}


<div className="split" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'auto', margin:'0 0 0 0', padding:'0 0 0 0', overflow:'',}}>

<ScrollAnimation animateIn="rotateIn" animateOnce={false} animatePreScroll={true} delay={200} style={{width:'18vw', padding:'0', position:'absolute', top:'15vh', right:'5vw'}}>    
<div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'24px', overflow:'hidden', position:'relative', margin:'0 0', transform:'rotate(10deg)',}}><Image alt="Ad2" filename="home-banner-phone.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Mobile websites</div>
</div>
</ScrollAnimation>


<ScrollAnimation animateIn="rotateIn" animateOnce={false}a nimatePreScroll={true} delay={500} style={{width:'34vw', padding:'0', position:'absolute', top:'34vh', left:'10vw',}}>  
<div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'18px', overflow:'hidden', position:'relative', margin:'0 0', transform:'rotate(4deg)',}}>
{/* <iframe width="100%" height="300px" src="https://pavandbroome.com"></iframe> */}
<Image alt="Ad2" filename="home-banner-web.jpg" style={{}}  />
</div>
</ScrollAnimation>



{/* <ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={500} style={{width:'40vw', padding:'0', position:'absolute', top:'20vh', right:'20vw'}}>  
<label id="vid-open" htmlFor="vid-toggle"></label>
<input type="checkbox" id="vid-toggle" style={{width:'100%', display:'flex', justifyItems:'center', justifyContent:'center', textAlign:'center', alignItems:'center'}}/>

<label id="vidpop" htmlFor="vid-toggle">
<div className="imgbox shadow-3d" id="banner-vid" style={{border:'1px solid #000', borderRadius:'10px', overflow:'hidden', padding:'0', background:'#000', position:'relative', margin:'0 0', transform:'rotate(-10deg)',}}>

<iframe width="100%" height="280" src="https://www.youtube.com/embed/7fyqJT8QDBY" frameBorder="0" allowFullScreen></iframe>

<div className="sub" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#fff', textAlign:'center', width:'100%',}}>Television spot for PavandBroome.com</div>
<label className="news-close1" htmlFor="vid-toggle" style={{display:'none', fontSize:'24px', color:'#fff', position:'relative', right:'0'}}><FaTimesCircle /></label>
</div>
</label>
</ScrollAnimation> */}



</div>








{/* bottom of panel */}
  </div>
  </ScrollAnimation>








  <div className="outer" style={{display:'block', height:'100vh', width:'100vw', overflow:'', position:'relative'}}>


{/* <section className="slideshow" style={{display:'none', height: '100vh;', margin:'0', padding:'0', overFlow:'hidden',}}>
    <div className="progress">1 of 4</div>
    <Image className="" alt="Banner" filename="home-banner.jpg" />
  </div>

  <div className="slideshow-item item-2">
    <div className="progress">2 of 4</div>
    <Image className="" alt="Banner" filename="banner-pnb.jpg" />
    <a href="#target-1" className="arrow arrow-prev"></a>
    <a href="#target-3" className="arrow arrow-next"></a>
  </div>

  <div className="slideshow-item item-3">
    <div className="progress">3 of 4</div>
    <Image className="" alt="Banner" filename="banner-jcedf.jpg" />
    <a href="#target-2" className="arrow arrow-prev"></a>
    <a href="#target-4" className="arrow arrow-next"></a>
  </div>

  <div className="slideshow-item item-4">
    <div className="progress">4 of 4</div>
    <Image className="" alt="Banner" filename="home-banner.jpg" />
    <a href="#target-3" className="arrow arrow-prev"></a>
    <a href="#target-1" className="arrow arrow-next"></a>
  </div>
</section> */}














{/* <div className="spacer66">block spacer</div> */}

{/* CONTACT PANEL  */}
    {/* <Contact /> */}
{/* END CONTACT PANEL */}
</div>
</CustomBox>
  </Layout>
)

export default Test3





