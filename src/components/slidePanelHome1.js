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
// import { IoMdFingerPrint } from 'react-icons/io'
import DownArrow from './DownArrow'
import { RiArrowDownCircleLine } from 'react-icons/ri'
import TouchUp from './TouchUp'
// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`

// caras



.panel-wrapper{
  margin: 0 ;
  width:100%;
  
}

.slidepanel{
  display:flex;
  flex-wrap:nowrap;
  width:100vw;
  height:100vh;
  // height: calc(100vh - 78px);
}

.slidepanel > div{
  min-width:16vw;
  width:50vw;
  flex-grow:1;
  flex-shrink:1;
  overflow:hidden;
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

.slidepanel div img{
  width:100vw;
  height:100vh;
  object-fit: cover;
  position:absolute;
  z-index:-1;
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
    height:100%;
    position:absolute;
    // top:25vh;
    z-index:0;
    margin:80px 0 0 0;
    padding:0 0 0 0;
  }

 .contentpanel{
     display:block;
     border:1px solid #333;
    border-radius:6px;
     margin:0 auto;
     padding:1rem;
     text-decoration:none;
    text-align:left;
    text-shadow: 1px 2px 1px black;
     font-weight:400;
     color:#FFFFFF;
    cursor:default;
    background: rgba(0,0,0,0.50);
     transition: all 0.15s;
    fontSize:100%;
     animation:fade 2s forwards;
    opacity:0;
    overflow-y:auto;
    backdrop-filter: blur(10px);
    width:90%;
    }

  

    .contentpanel > *{opacity:0; animation:fade 3s forwards;}

    .headline{
      padding:1em;
    //  border:0.16em solid #FFFFFF;
    // border-radius:6px;
     margin:0 auto;
    box-shadow: 0px 1px 6px 1px black;
    text-shadow: 1px 2px 1px black;
    background: rgba(237,27,45,.8);
    // filter: brightness(120%);
    transition: all 0.15s;
    font-size:100%;
    font-weight:0 !important; 
    // height:2.5rem;
    position:absolute;
    bottom:15vh;
    color:#fff;
    width:100%;
    }

a.button2{
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

@media (max-width: 48rem) {
.slidepanel > div{width:70%; border:0px solid red;}
.slidepanel > div:last-child{display:; width:50%}
.headline{padding:4px; font-size:70%;}
}
@media (max-width: 70rem) {
.innerpanel{height:80%; top:5vh;}

}

// .slidepanel > div:last-child{display:; width:50%}
// .slidepanel > div:nth-last-of-type(-n+2){width:50%}

 .gatsby-image-wrapper{position: initial !important;}





 .shout{width:100%; height:100vh; overflow:hidden;}
 .shout span:first-child{height:100vh;}
 .shout span{
    width:100vw;
     overflow:hidden;
    // animation: poptop 7s forwards;
    animation-name: poptop;
    animation-duration: 4.5s; 
    animation-timing-function: ease-out; 
    animation-delay: 0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running; 
    }

    transform: translate()


    @keyframes poptop {
      0%{
            opacity: 0;
            transform: translateY(-100vh)
         }
         15% {
            opacity:.1;
         }
         25%{
            opacity: .3;
         }
         90% {
            opacity:.9;
         }
         100% {
            opacity:1;
            transform: translateY(100vh)
         }
      
      }

    @keyframes tooltop{
        0% { opacity: 0; }
        5% { opacity: 0; -webkit-transform:rotate(0deg) scale(2) skew(0deg) translate(0px);}
        10% { opacity: 1; -webkit-transform: translateX(0px); }
        25% { opacity: 1; -webkit-transform: translateX(0px); }
        30% { opacity: 0; -webkit-transform: translateX(0px); }
        80% { opacity: 0; }
        100% { opacity: 0; }
    }

`

const slidePanelHome1 = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper" style={{marginTop:'0', overflow:'hidden'}}>
    

{/* <DownArrow /> */}
<TouchUp />




<div class="shout" style={{position:'absolute', top:'10vh', fontSize:'30vw',}}>
      <span>Agency</span>
      <span>Beautiful.</span>
      <span>Cute.</span>
      <span>Delightful.</span>
      <span>Emotional.</span>
    </div>




  <div className="slidepanel">
  
  <div className="outerpanel" style={{borderLeft:'none'}}>
  {/* <Image alt="Temp Graphic" filename="Ad2-web-temp.jpg" /> */}
  <img src="https://source.unsplash.com/random/1200x12002" alt="rando" />
<span className="headline">Concept</span>
      <div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          
          <strong style={{}}>Concept / Creative / Design</strong><br />
          <p style={{ }}>At Ad2, Inc., we first focus on the goals of the customer to develop a concept and campaign that will effectively deliver the desired message to the target audience. </p>
        
        <p style={{}}>We then challenge our designers with producing creative that is as innovative as it is effective, capturing the interest of the client’s market and stimulating the desired response.</p>
      


        </div>
    </div>
 </div>



  <div className="outerpanel" style={{borderLeft:'', paddingTop:''}}>
  {/* <Image alt="Temp Graphic" filename="Ad2-web-temp.jpg" /> */}
  <img src="https://source.unsplash.com/random/1200x12001" alt="rando" />
 <span className="headline">Marketing</span>
      <div className="innerpanel" style={{}}>

     

          <div className="contentpanel" style={{}}>
          
          

          <strong style={{}}>Marketing</strong><br />
          <p style={{ }}>What can we say, it’s our business! With marketing research and analysis, we come full-circle in marketing your brand. That is not only how we like to begin each process, but we continually check the numbers to ensure the most effective marketing approach available.  </p>
        
        <p style={{}}>We test and re-test until the message received is the same as the message conveyed to the appropriate audience through the most effective media-loud and clear! Our goal is achieving your goals, and our job is not done until the job is done!</p>
       


        </div>
    </div>
 </div>

 


 <div className="outerpanel" style={{borderLeft:''}}>
  {/* <Image alt="Temp Graphic" filename="Ad2-web-temp.jpg" /> */}
  <img src="https://source.unsplash.com/random/1200x12003" alt="rando" />
<span className="headline">Consulting</span>
      <div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{ }}>Consulting</strong><br />
          <p style={{ }}>Ad2, Inc. offers consulting services to clients based on each client’s individual needs and goals. </p>
        
        <p style={{}}>From developing marketing plans and strategies to developing your bottom line, Ad2, Inc. has a plan to grow your brand and your business.</p>
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/identity/">Get Started Now! </Link></h1>


        </div>
    </div>
 </div>


 <div className="outerpanel" style={{borderRight:'none'}}>
  {/* <Image alt="Temp Graphic" filename="Ad2-web-temp.jpg" /> */}
  <img src="https://source.unsplash.com/random/1200x12004" alt="rando" />
<span className="headline">Media</span>
      <div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{ }}>Media Buying</strong><br />
          <p style={{ }}>We're committed to researching new mediums and avenues to offer innovative ways for you to reach your audience. We use grassroots marketing mediums such as social networks, personal networking and Community Action Teams.</p>
        
        <p style={{}}>Our team works closely with the media and focuses on increasing the reach and frequency of your advertising dollar, providing our clients the best CPP available.</p>
        {/* <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/identity/">Get Started Now! </Link></h1> */}


        </div>
    </div>
 </div>






    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default slidePanelHome1