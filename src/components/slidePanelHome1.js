import React from 'react'
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from './Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'
import DownArrow from './DownArrow'
import { RiArrowDownCircleLine } from 'react-icons/ri'
import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'
import BgImage from './BgImage'

import Img1 from './Img1'
import Img2 from './Img2'
import Img3 from './Img3'
import Img4 from './Img4'


const CustomBox = styled.div`

// caras



.panel-wrapper{
  margin: 0 ;
  width:100%;
  
}

.slidepanel{
  display:flex;
  flex-wrap:nowrap;
  // width:100vw;
  height:100vh;
  // height: calc(100vh - 88px);
  overflow:hidden;
}

.slidepanel > div{
  // min-width:16vw;
  width:50vw;
  flex-grow:1;
  flex-shrink:1;
  height:100%;
  // overflow:hidden;
  transition:all .5s ease;
  // border-left:1.5px solid ;
  // border-right:1.5px solid ;
  border-radius:0px;
  position:relative;
  align-items: center;
  justify-content: center;
}


.slidepanel > div:hover{
  flex-shrink:0
}

.slidepanel div img, .slidepanel div .gatsby-image-wrapper {
  width:100%;
  height:100vh ;
  object-fit: cover;
  position:fixed;
  z-index:-1;
  padding:0;
  margin:0;
  border:0px solid yellow;
  // background-position:bottom bottom;
  // object-position: 100% 100%;

}
// .slidepanel div  div  img{border:3px solid yellow;}
.slidepanel div .gatsby-image-wrapper *{
  border:3px solid yellow; width:100% !important;
  // position:fixed;
}


// .slidepanel div:hover::before { 
//   content: "Before -"; 
//   background-color: green; 
//   position:absolute;
//   z-index:1;
//   width:200px;
//   margin:0 auto;
// } 

.slidepanel a{
  z-index:0;
  align-items: center;
  justify-content: center;
  // border:1px solid white !important; 
  animation: fadeIn;
}


.slidepanel div:hover a, .slidepanel div:hover .contentpanel{
  display:block;
  }
  .slidepanel div a, .slidepanel div .contentpanel{
  display:none;
  }

  .slidepanel div .headline {display:block; opacity:1;}
  .slidepanel div:hover .headline{display:none;}


  .outerpanel{}
  
  .innerpanel{
    display:flex;
    // alignItems:center;
    // justifyContent:center;
    width:100%;
    height:auto;
    position:absolute;
    // top:25vh;
    z-index:0;
    margin:15vh 0 0 0;
    padding:0 0 0 0;
  }

 .contentpanel{
     display:block;
     border:1px solid #333;
    border-radius:6px;
     margin:0 auto;
     padding:2rem 1rem;
     text-decoration:none;
    text-align:left;
    text-shadow: 1px 2px 1px black;
     font-weight:400;
     color:#FFFFFF;
    cursor:default;
    background: rgba(0,0,0,0.50);
     transition: all 0.15s;
    fontSize:100%;
    opacity:0;
    overflow-y:auto;
    backdrop-filter: blur(10px);
    width:90%;
    height:84vh;
    animation:fade 2s forwards;
    }

  

    .contentpanel > *{opacity:0; animation:fade 3s forwards;}

    .headline{
      padding:1em;
     margin:0 auto;
    box-shadow: 0px 1px 6px 1px black;
    text-shadow: 1px 2px 1px black;
    background: rgba(237,27,45,.7);
    filter: brightness(120%);
    font-size:100%;
    font-weight:0 !important; 
    position:absolute;
    bottom:15vh;
    color:#fff;
    width:100%;
    transition: all .6s ease-out;
    }

.button2{
   display:inline-block;
   padding:.5em 3vw;
   border:0.16em solid #FFFFFF;
  border-radius:6px;
   margin:1rem auto;
   box-sizing: border-box;
  box-shadow: 0px 1px 6px 1px black;
   text-decoration:none;
  text-shadow: 1px 2px 1px black;
   font-weight:400;
   color:#FFFFFF;
  background:#333;
  filter: brightness(120%);
  opacity:.9;
   transition: all 0.15s;
  }
  .button2:hover{
   color:#DDDDDD;
   border-color:#FF0000;
  filter: brightness(140%);
  }

  .button2:active{
   color:#BBBBBB;
   border-color:#BBBBBB;
  }
  @media all and (max-width:30vw){
   .button2{
    display:block;
    margin:0.4em auto;
   }
}

@media (max-width: 48rem) {
// .slidepanel > div{width:70%; border:0px solid red;}
// .slidepanel > div:last-child{display:; width:50%}
.headline{padding:4px; font-size:70%;}
}
@media (max-width: 70rem) {
// .innerpanel{height:80%; top:5vh;}

}

// .slidepanel > div:last-child{display:; width:50%}
// .slidepanel > div:nth-last-of-type(-n+2){width:50%}

 .gatsby-image-wrapper{position: initial !important;}





 .shout{width:100%; height:100vh; display:flex; display:none; flex-direction:column;}
//  .shout span:first-child{}
 .shout span{
    width:100vw;
    height:20vh;
    //  overflow:hidden;
    // animation: poptop 12s forwards;
    // animation-name: poptop;
    // animation-timing-function: ease-out; 
    // animation-delay: 3s;
    // animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running; 
  opacity:0;
  // border:1px solid blue;
  text-shadow: 0 1px 0 #ccc,
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0,0,0,.1),
  0 0 5px rgba(0,0,0,.1),
  0 1px 3px rgba(0,0,0,.3),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.25),
  0 10px 10px rgba(0,0,0,.2),
  0 20px 20px rgba(0,0,0,.15);
    }




    @keyframes poptop {
      0%{
            opacity: 0;
            // transform: translateY(-100vh)
         }
         50%{
          opacity: .8;
          transform: translateY(0)
       }

         100% {
            opacity:0;
            transform: translateY(0)

         }
      
      }


      @keyframes tagline {
        0%{
          opacity: 0;
          // transform: translateY(-100vh)
       }
       50%{
        opacity: .8;
        transform: translateY(0)
     }

       100% {
          opacity:.8;
          transform: translateY(0)

       }
          }


    @keyframes tooltop{
        0% { opacity: 0; transform: scale(1.3) }
        5% { opacity: 0;}
        10% { opacity: .3; -webkit-transform: translateX(0px); }
        25% { opacity: .4; -webkit-transform: translateX(0px); }
        30% { opacity: .5;  transform: scale(.9) translate(1px); }
        80% { opacity: 1; transform: scale(1) translate(0px); }
        100% { opacity: 0; }
    }

    @media (hover: hover) {
      .touchindicator{display: none !important;}
      }

`

const slidePanelHome1 = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper" style={{marginTop:'0', overflow:'hidden'}}>
    

{/* <DownArrow /> */}
{/* <TouchUp /> */}




<div className="shout" style={{position:'absolute', top:'0vh',}}>

<span style={{position:'absolute', top:'29vh', textAlign:'center', fontSize:'18vw', animation:'poptop 4s forwards', animationDelay:'1s'}}>Knowledge</span>

  <span style={{position:'absolute', top:'1vh', textAlign:'right', fontSize:'38vw', animation:'poptop 6s forwards', animationDelay:'4s'}}>Data</span>

  <span style={{position:'absolute', top:'12vh', textAlign:'left', fontSize:'25vw', animation:'poptop 8s forwards', animationDelay:'6s'}}>Insight</span>

  <span style={{position:'absolute', top:'32vh', textAlign:'center', fontSize:'17vw', animation:'poptop 8s forwards', animationDelay:'10s'}}>Research</span>

  <span style={{position:'absolute', top:'6vh', textAlign:'center', fontSize:'16vw', animation:'tagline 48s forwards', animationDelay:'14s'}}>Redefining</span>
  <span style={{position:'absolute', top:'22vh', textAlign:'center', fontSize:'25vw', animation:'tagline 48s forwards', animationDelay:'14s'}}>Agency</span>

      
      {/* <span style={{ fontSize:'24vw',}}>Cute</span>
      <span>Delightful</span>
      <span>Emotional</span> */}
    </div>




  <div className="slidepanel">
  
  <div className="outerpanel" style={{borderLeft:'none'}}>
    
  {/* <img src="https://source.unsplash.com/random/1200x12002" alt="rando" /> */}
<span className="headline">Concept <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{}}>
          
          
          <strong style={{}}>Concept / Creative / Design</strong><br />
          <p style={{ }}>At Ad2, Inc., we first focus on the goals of the customer to develop a concept and campaign that will effectively deliver the desired message to the target audience. </p>
        
        <p style={{}}>We then challenge our designers with producing creative that is as innovative as it is effective, perfectly capturing the interest of the client’s market.</p>
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/">View Our Work </Link></h1>
      


        </div>
    </div>
    {/* <Img1 /> */}
    <BgImage filename="homebanner-pb.jpg" />
    {/* <img src="./img/homebanner-pb.jpg" alt="rando" /> */}
    {/* <Image alt="Temp Graphic" filename="homebanner-pb.jpg" /> */}
    {/* <BackgroundImg /> */}
 </div>



  <div className="outerpanel" style={{borderLeft:'', paddingTop:''}}>
  {/* <img src="https://source.unsplash.com/random/1200x12001" alt="rando" /> */}
 <span className="headline">Marketing <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
 <div className="innerpanel" style={{}}>

     

          <div className="contentpanel" style={{}}>
          
          

          <strong style={{}}>Marketing</strong><br />
          <p style={{ }}>What can we say, it’s our business! With marketing research and analysis, we come full-circle in marketing your brand. That is not only how we like to begin each process, but we continually check the numbers to ensure the most effective marketing approach available.  </p>
        
        <p style={{}}>Our goal is achieving your goals, and our job is not done until the job is done!</p>
       
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/capabilities/">Learn More </Link></h1>


        </div>
    </div>
    <BgImage filename="Market-Photo.jpg" />
    {/* <Img2 /> */}
    {/* <Image alt="Temp Graphic" filename="homebanner-pb.jpg" /> */}
    {/* <BackgroundImg /> */}
 </div>

 


 <div className="outerpanel" style={{borderLeft:''}}>
  {/* <img src="https://source.unsplash.com/random/1200x12003" alt="rando" /> */}
<span className="headline">Consulting <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
<div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{ }}>Consulting</strong><br />
          <p style={{ }}>Ad2, Inc. offers consulting services to clients based on each client’s individual needs and goals. </p>
        
        <p style={{}}>From developing marketing plans and strategies to developing your bottom line, Ad2, Inc. has a plan to grow your brand and your business.</p>
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><label className="modal-btn0 button2" htmlFor="modal-toggle" style={{ textAlign:'center', cursor:'pointer',}}>Get Started!</label> </h1>



        </div>
    </div>
    <Img3 />
    {/* <Image alt="Temp Graphic" filename="homebanner-pb.jpg" /> */}
    {/* <BackgroundImg /> */}
 </div>



 <div className="outerpanel" style={{borderRight:'none'}}>

  {/* <img src="https://source.unsplash.com/random/1200x12004" alt="rando" /> */}
<span className="headline">Media <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
<div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{ }}>Media Buying</strong><br />
          <p style={{ }}>We're committed to researching new mediums and avenues to offer innovative ways for you to reach your audience. We use grassroots marketing mediums such as social networks, personal networking and Community Action Teams.</p>
        
        <p style={{}}>Our team works closely with the media and focuses on increasing the reach and frequency of your advertising dollar.</p>
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/tv/">View Our Work </Link></h1>


        </div>
    </div>
    
    <BgImage filename="photo-1596047795961-69357dee9c3c.jpg" />
    {/* <Img4 /> */}
    {/* <img src="./img/photo-1596047795961-69357dee9c3c.jpg" alt="rando" /> */}
    {/* <BackgroundImg /> */}
 </div>






    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default slidePanelHome1