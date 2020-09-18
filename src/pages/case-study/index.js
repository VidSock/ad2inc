import React from 'react'
import Layout from '../../components/Layout-noc'
// import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar2'
import { Link } from 'gatsby'
// import Helmet from 'react-helmet'

// import ScrollAnimation from 'react-animate-on-scroll'
import Curtains from '../../img/curtains.jpg'
// import Ad2Mouse from '../../img/ad2-mouse.png'

import Image from '../../components/Image'
import BgImage from '../../components/BgImage'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'

// import { FiZoomIn } from 'react-icons/fi'

// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`
.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}
.progress{position:absolute; top:80vh; left:100px; border:1px solid yellow; z-index:1;}

.container2 {
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
  // height:100%;
}
section {
	scroll-snap-align: start;
  // border-bottom:20px solid red!important;
  overflow:hidden;
  // height:60vh;
  background:tranparent !important;
  // width:90%;
  // margin:0 auto;
}
.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:60vh;
  display:block;
  background-size:cover;
  min-height:60vh;
  // z-index:3 !important;
}
a.button2{
   display:inline-block;
   padding:.5em 3vw;
   border:0.16em solid #FFFFFF;
  border-radius:6px;
   margin:0 auto;
   box-sizing: border-box;
  box-shadow: 0px 1px 6px 1px black;
   text-decoration:none;
   text-transform:uppercase;
  text-shadow: 1px 4px 1px black;
   font-weight:400;
   color:#FFFFFF;
   text-align:center;
  background:#333;
  filter: brightness(120%);
  opacity:.9;
   transition: all 0.15s;
  }
  a.button2:hover{
   color:#DDDDDD;
   border-color:#FF0000;
  filter: brightness(140%);
  }
  a.button2:active{
   color:#BBBBBB;
   border-color:#BBBBBB;
  }
  @media all and (max-width:30vw){
   a.button2{
    display:block;
    margin:0.4em auto;
   }
  }
.touchup{color:#ccc !important}





.slide-wrapper {
  position: relative;

  background-image: -webkit-gradient(linear, left top, left bottom, from(#fefefe), to(#afafaf));
  background-image: linear-gradient(#fefefe, #afafaf);
  border:.5vw solid #444;
  border-radius:12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:8vh 0;
  width:90%;
  overflow:hidden;
}

.slide-container {
  /* position: absolute; */
  /* top: calc(50% - 300px); */
  width: 90vw;
  height: 100vh;
  max-height:600px;
  border2px solid black;
  border-radius:12px;
}
.slide-container::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 0;
  top: 7.5%;
  left: 2.5%;
  width: 95%;
  height: 95%;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-filter: blur(24px);
          filter: blur(24px);
}

.slide {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  Ad2Mouse
  // cursor: url({Curtains}), auto;
  background-color: #4a4a4a;
  -webkit-perspective: 1500px;
          perspective: 1500px;
}
.slide::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  // background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/life-aquatic-cover.jpg");
  // background-size: cover;
  opacity: 0.4;
  /* -webkit-filter: blur(2px);
          filter: blur(2px); */
}

.slide-text {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 55vw;
  height: 100%;
  box-sizing: border-box;
  // padding: 20px;
  color: white;
  font-weight: lighter;
  cursor:default;
}

.title {
  font-size: 1.35em;
  margin: 10px 0;
}

.rating {
  margin: 5px 0;
}

.summary {
  margin: 10px 0;
  line-height: 1.25em;
}

.fa {
  width: 16px;
  height: 16px;
}

.slice {
  position: absolute;
  z-index: 2;
  left: 100%;
  height: 100%;
  width: 100%;
  background-color:#ED1B2D;
  background-image: url(${Curtains});
  // background-image: url("../../../../img/curtains.jpg");
  background-size: cover;
  box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform-origin: center left;
          transform-origin: center left;
  -webkit-transition: box-shadow 0.8s, -webkit-transform 0.8s;
  transition: box-shadow 0.8s, -webkit-transform 0.8s;
  transition: transform 0.8s, box-shadow 0.8s;
  transition: transform 0.8s, box-shadow 0.8s, -webkit-transform 0.8s;
}
.slice::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 2;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  opacity: 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.6);
  -webkit-transition: opacity 0.6s;
  transition: opacity 0.6s;
}

.slice-1 {
  background-position: 0 0;
}

.slice-2 {
  background-position: 23.3% 0;
}

.slice-3 {
  background-position: 66.6% 0;
}

.slice-4 {
  background-position: 100% 0;
}

.slice-parent {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 25%;
}

.slide-container:hover .slice::after {
  opacity: 0.8;
}
.slide-container:hover .slice-1 {
  -webkit-transform: rotateY(-60deg);
          transform: rotateY(-60deg);
  box-shadow: inset 10px -10px 40px rgba(0, 0, 0, 0.5);
}
.slide-container:hover .slice-2 {
  -webkit-transform: rotateY(120deg);
          transform: rotateY(120deg);
  box-shadow: inset -10px -10px 60px rgba(0, 0, 0, 0.7);
  width:70%;
}
.slide-container:hover .slice-3 {
  -webkit-transform: rotateY(-120deg);
          transform: rotateY(-120deg);
  box-shadow: inset 10px -10px 60px rgba(0, 0, 0, 0.7);
}
.slide-container:hover .slice-4 {
  -webkit-transform: rotateY(120deg);
          transform: rotateY(120deg);
  box-shadow: inset -10px -10px 40px rgba(0, 0, 0, 0.4);
}

.gatsby-image-wrapper{position:relaticv !important;}

// .slide-container .shout{z-index:5;}

// .slide-container:hover .shout{
//   z-index:-1 !important;
//   transition: all 0.6s ease-in-out
// }






`


const CaseStudyCurtainsIndex = () => (
  <Layout>
    

   <CustomBox>
  <Navbar />

  
<div style={{ display:'flex', alignItems:'center', justifyContent:'center',
}}>
  {/* <h1 style={{textAlign:'center', marginTop:'100px', fontSize:'140%'}}>Ad2 Case Studies</h1> */}

  <div class="slide-wrapper">
  
  <div className="slide-container">

<div className="shout txtshadow-3d" style={{position:'absolute', top:'5vh', zIndex:'2'}}>
<span style={{position:'absolute', top:'9vh', left:'2vw', lineHeight:'97%', textAlign:'', fontSize:'5vw', }}>Go Behind The Curtains</span>


<span style={{position:'absolute', width:'300px', top:'49vh', left:'2vw', textAlign:'', fontSize:'2vw', }}>View Case Studies</span>
</div>

<div className="slide">

{/* <div class="slide-text">
        <h2 class="title">Ad2 Stuff</h2>
</div> */}


      <div class="slice slice-1 slice-parent">
        <div class="slice slice-2 slice-child">
          <div class="slice slice-3 slice-child">
            <div class="slice slice-4 slice-child"></div>
          </div>
        </div>
      </div>

      


      {/* <div style={{background:'#222', display:'block', height:'100%', width:'100%'}}>BOOM</div> */}

<div className="container2 slide-text">




 


    
<section className="child" style={{position:'relative', height:'100%', overflow:'hidden',animation: 'fade 3s forwards',}}>



<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>
      {/* <strong style={{fontSize:'130%'}}>Pav &amp; Broome Fine Jewelry</strong><br /> */}
      

  
        <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'100%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1>
      
        
 


<div className="touchup" style={{}}>
      <IoMdFingerPrint style={{fontSize:'500%', }}/>
      </div>

      
    </div>
  </div>
  


<BgImage style={{zIndex:'-1', position:'fixed', animation: 'fade 2s forwards',}} className="slider1" alt="Pav &amp; Broome Fine Jewelry" filename="case-study-pnb.jpg" />




  </section>
{/* END Panel 1 */}




<section className="child" style={{position:'relative', height:'100%', overflow:'hidden',animation: 'fade 3s forwards',}}>


<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

      <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'100%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/pediatric-center/">The Pediatric Center<br /> View the case study</Link></h1>

    </div>
  </div>
  

  
<BgImage style={{zIndex:'0', position:'fixed', animation: 'fade 2s forwards',}} className="slider1" alt="The Pediatrics Center - Gulfport" filename="case-study-pediatric-center.jpg" />




  </section>
{/* END Panel 2 */}





<section className="child" style={{position:'relative', height:'100%', overflow:'hidden',animation: 'fade 3s forwards',}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>
      
      <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'100%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/jcedf/">Jackson County Economic Development Foundation<br /> View the case study</Link></h1>
        
    </div>
  </div>
  

  
<BgImage style={{zIndex:'0', position:'fixed', animation: 'fade 2s forwards',}} className="slider1" alt="Jackson Co. Economic Development" filename="case-study-jcedf.jpg" />

  </section>






  <section className="child" style={{position:'relative', height:'100%', overflow:'hidden',animation: 'fade 3s forwards',}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>
      
      <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'100%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/coastelectric/">Coast Electric Power Association<br /> View the case study</Link></h1>
        
    </div>
  </div>
  

  
<BgImage style={{zIndex:'0', position:'fixed', animation: 'fade 2s forwards',}} className="slider1" alt="Gulf Coast Community Federal Credit Union" filename="case-study-cepa.jpg" />

  </section>







  <section className="child" style={{position:'relative', height:'100%', overflow:'hidden',animation: 'fade 3s forwards',}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>
      

      <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'100%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/hssm/">Humane Society of South Mississippi<br /> View the case study</Link></h1>
        
    </div>
  </div>
  

  
<BgImage style={{zIndex:'0', position:'fixed', animation: 'fade 2s forwards',}} className="slider1" alt="Gulf Coast Community Federal Credit Union" filename="case-study-hssm1.jpg" />

  </section>








{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}


{/* <Footer /> */}


</div>
</div>
      </div>
      </div>
      </div>

      
</CustomBox>
  </Layout>
)
export default CaseStudyCurtainsIndex