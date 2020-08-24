import React from 'react'
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from './Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'
// import DownArrow from './DownArrow'
// import { RiArrowDownCircleLine } from 'react-icons/ri'
// import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'
import BgImage from './BgImage'

// import Img1 from './Img1'
// import Img2 from './Img2'
// import Img3 from './Img3'
// import Img4 from './Img4'


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
// .slidepanel div .gatsby-image-wrapper *{
//   border:3px solid yellow; width:100% !important;
// }


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
  // animation: fadeIn;
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
    // height:auto;
    height:100%;
    position:absolute;
    // top:25vh;
    z-index:0;
    // margin:15vh 0 0 0;
    margin:0;
    padding:0 0 0 0;
  }

 .contentpanel{
     display:block;
    //  border:1px solid #333;
    // border-radius:6px;
     margin:0 auto;
    //  padding:2rem 1rem;
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
    // width:90%;
    // height:84vh;
    width:100%;
    height:100%;
    animation:fade 1.7s forwards;
    padding:2rem 2rem;
    padding-top:15vh;
    }

  

    // .contentpanel > *{opacity:0; animation:fade 3s forwards;}

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
.contentpanel{
  padding:2rem 1rem;
  padding-top:12vh;
}
}
@media (min-width: 48rem) {
.contentpanel{
  padding:2rem 2rem;
  padding-top:18vh;
}
}

@media (min-width: 1024px) {
  .contentpanel{
    padding:2rem 3rem;
    padding-top:18vh;
  }
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

const PortfolioPanels = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper" style={{marginTop:'0', overflow:'hidden'}}>
    

{/* <DownArrow /> */}
{/* <TouchUp /> */}




{/* <div className="shout" style={{position:'absolute', top:'0vh',}}>

<span style={{position:'absolute', top:'29vh', textAlign:'center', fontSize:'18vw', animation:'poptop 4s forwards', animationDelay:'1s'}}>Knowledge</span>

    </div> */}




  <div className="slidepanel">



  
  <div className="outerpanel" style={{borderLeft:'none'}}>
<span className="headline">Branding <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop1 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Branding</strong><br />
          <p style={{ }}>Grow your brand! From logos to websites, brand books to digital and print ads, let Ad2 help your brand come to life.</p>
<br />
        <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/identity/">View Branding </Link></h1>
      
        </div>
    </div>
    <BgImage filename="portfolio-branding.png" />
 </div>



 {/* <div className="outerpanel" style={{borderLeft:'none'}}>
<span className="headline">Logos <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Logos</strong><br />
          <p style={{ }}>We realize that marketing is more than just delivering a clever tag line or designing a pretty ad. But they sure help…</p>

        <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/logos/">View Logos </Link></h1>
      
        </div>
    </div>
    <BgImage filename="portfolio-logos.png" />
 </div> */}



 <div className="outerpanel" style={{borderLeft:'none'}}>
<span className="headline">Print <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop1 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Print</strong><br />
          <p style={{ }}>Drive consumer actions and ROI at scale by coupling targeted media with machine learning and AI.</p>

        <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/print/">View Print </Link></h1>
      
        </div>
    </div>
    <BgImage filename="portfolio-print.png" />
 </div>



 <div className="outerpanel" style={{borderLeft:'none'}}>
<span className="headline">Web <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop1 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Web</strong><br />
          <p style={{ }}>Bring your business to life online with beautiful design and masterful web development.</p>

        <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/web/">View Web </Link></h1>
      
        </div>
    </div>
    <BgImage filename="portfolio-web.png" />
 </div>
    


    
 <div className="outerpanel" style={{borderLeft:'none'}}>
<span className="headline">Media <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop1 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Media</strong><br />
          <p style={{ }}>We realize that marketing is more than just delivering a clever tag line or designing a pretty ad. But they sure help…</p>

        <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/tv/">View Media </Link></h1>
      
        </div>
    </div>
    <BgImage filename="portfolio-media.png" />
 </div>

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default PortfolioPanels