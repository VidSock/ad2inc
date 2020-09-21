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
import DownArrow from './DownArrow'
// import { RiArrowDownCircleLine } from 'react-icons/ri'
import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'
import BgImage from './BgImage'
import BgImageTR from './BgImage-tr'
import BgImageLL from './BgImage-ll'

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
  // max-height:1000px;
  // height: calc(100vh - 88px);
  overflow:hidden;
}

.slidepanel > div{
  // min-width:16vw;
  width:60vw;
  flex-grow:1;
  flex-shrink:1;
  // height:100%;
  // max-height:1000px;
  // overflow:hidden;
  transition:all .5s ease;
  // border-left:2.5px solid ;
  // border-right:2.5px solid ;
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
  // height:100vh ;
  // max-height:1000px;
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
    // height:100%;
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
    height:100vh;
    animation:fade 1.7s forwards;
    padding:2rem 2rem;
    padding-top:15vh;
    }

  

    // .contentpanel > *{opacity:0; animation:fade 3s forwards;}

    .headline{
      padding:1em;
     margin:0 auto;
    // box-shadow: 0px 1px 6px 1px black;
    text-shadow: 1px 2px 1px black;
    // background: rgba(237,27,45,.7);
    // filter: brightness(120%);
    background: rgba(0,0,0,.7);
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


//  .bgimage-tr{max-height:1000px;}


 .shout{width:100%; height:100vh; display:flex; display:; flex-direction:column;}
//  .shout span:first-child{}
 .shout span{
    width:100vw;
    height:20vh;
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
<TouchUp />




<div className="shout" style={{position:'absolute', top:'0vh',}}>

<span style={{position:'absolute', top:'25vh', textAlign:'left', paddingLeft:'12vw', fontSize:'4vw', opacity:'1', animation:'poptop 2.2s forwards', animationDelay:'15s'}}>We grow your<br /> business through</span>

<span style={{position:'absolute', top:'45vh', textAlign:'left', paddingLeft:'12vw', fontSize:'4vw', opacity:'', animation:'poptop 3s forwards', animationDelay:'16.4s'}}>and of course, LOVE... ˆ)</span>

<span style={{position:'absolute', top:'40vh', textAlign:'left', paddingLeft:'12vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'1s'}}>Advertising</span>

<span style={{position:'absolute', top:'40vh', textAlign:'left', paddingLeft:'12vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'4s'}}>Knowledge</span>

<span style={{position:'absolute', top:'40vh', textAlign:'left', paddingLeft:'12vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'7s'}}>Creative</span>

<span style={{position:'absolute', top:'40vh', textAlign:'left', paddingLeft:'12vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'10s'}}>Insight</span>

<span style={{position:'absolute', top:'40vh', textAlign:'left', paddingLeft:'12vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'13s'}}>Research</span>

{/* <span style={{position:'absolute', top:'59vh', textAlign:'center', fontSize:'19vw', animation:'poptop 5s forwards', animationDelay:'4s'}}>Knowledge</span>

  <span style={{position:'absolute', top:'1vh', textAlign:'right', paddingRight:'6vw', fontSize:'20vw', animation:'poptop 2s forwards', animationDelay:'5s'}}>Data</span>

  <span style={{position:'absolute', top:'8vh', textAlign:'left', fontSize:'25vw', animation:'poptop 4s forwards', animationDelay:'7s'}}>Creative</span>

  <span style={{position:'absolute', top:'38vh', textAlign:'right', paddingRight:'3vw', fontSize:'25vw', animation:'poptop 4s forwards', animationDelay:'9s'}}>Insight</span>

  <span style={{position:'absolute', top:'28vh', textAlign:'left', fontSize:'17vw', paddingRight:'6vw', animation:'poptop 4s forwards', animationDelay:'12s'}}>Research</span>

  <span style={{position:'absolute', top:'6vh', textAlign:'center', fontSize:'16vw', animation:'poptop 4s forwards', animationDelay:'16s'}}>Redefining</span>
  <span style={{position:'absolute', top:'22vh', textAlign:'center', fontSize:'25vw', animation:'poptop 4s forwards', animationDelay:'16s'}}>Agency</span> */}

<div style={{position:'absolute', top:'10vh', textAlign:'center', display:'flex', justifyContent:'center',alignContent:'center', alignItems:'center', fontSize:'25vw', width:'100%'}}>
    {/* <Image filename="ad2inc-logo-round.png" alt="Ad2 Logo" style={{}} /> */}
  <img className="logo" src="../img/ad2logo-script.svg" alt="Ad2Inc Logo" style={{position:'', height:'600px', animation:'poptop 14s forwards', animationDelay:'18s', opacity:'0', margin:'0 auto'}} />
</div>

    </div>




  <div className="slidepanel">






  
  <div className="outerpanel" style={{borderLeft:'none'}}>
<span className="headline shadow-3dp">The Agency <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
        
          <strong style={{fontSize:'130%'}}>Creative / Concept / Design</strong><br />
          <p style={{ }}>We realize that marketing is more than just delivering a clever tag line or designing a pretty ad. But they sure help…</p>

          <p>At Ad2, Inc., we first focus on the goals of the customer to develop a concept and campaign that will effectively deliver the desired message to the target audience.</p>
        
        <p style={{}}>We then challenge our designers with producing creative that is as innovative as it is effective, capturing the interest of the client’s market and stimulating the desired response.</p>
        {/* <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio">View Our Work </Link></h1> */}

<h1><Link to="/portfolio"
  style={{
    '--color-1': '#333',
    '--color-2': '#000',
    background: `
      linear-gradient(
        180deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,
    color: 'white',
    textAlign: 'center',
    fontSize:'1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '14px 0',
    borderRadius: 7,
    width: 'auto',
    maxWidth:'400px',
    margin: '20px auto',
    border: '1px solid #000',
    boxShadow: '1px 3px 4px black'
  }}
>
  View Our Work
</Link></h1>

        </div>
    </div>
    {/* <BgImage filename="istockphoto-1140385944-2048x2048.jpg" /> */}
 </div>







  <div className="outerpanel" style={{borderLeft:'', paddingTop:''}}>
 <span className="headline shadow-3dp">The Work <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
 <div className="innerpanel" style={{}}>

          <div className="contentpanel" style={{}}>
      
          <strong style={{fontSize:'130%'}}>Marketing</strong><br />
          <p style={{ }}>What can we say, it’s our business! With marketing research and analysis, we come full-circle in marketing your brand. That is not only how we like to begin each process, but we continually check the numbers to ensure the most effective marketing approach available. We test and re-test until the message received is the same as the message conveyed to the appropriate audience through the most effective media-loud and clear!</p>
        
        <p style={{}}>Our goal is achieving your goals, and our job is not done until the job is done!</p>

        {/* <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio">View Our Work </Link></h1> */}

        <h1><Link to="/portfolio"
  style={{
    '--color-1': '#333',
    '--color-2': '#000',
    background: `
      linear-gradient(
        180deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,
    color: 'white',
    textAlign: 'center',
    fontSize:'1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '14px 0',
    borderRadius: 7,
    width: 'auto',
    maxWidth:'400px',
    margin: '20px auto',
    border: '1px solid #000',
    boxShadow: '1px 3px 4px black'
  }}
>
  Learn More
</Link></h1>


        </div>
    </div>
    {/* <BgImage filename="istockphoto-1133497978-2048x2048.jpg" /> */}
 </div>

 


 <div className="outerpanel" style={{borderLeft:''}}>
<span className="headline shadow-3dp">The Difference <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
<div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Consulting</strong><br />
          <p style={{ }}>Ad2, Inc. offers consulting services to clients based on each client’s individual needs and goals. </p>
        
        <p style={{}}>From developing marketing plans and strategies to developing your bottom line, Ad2, Inc. has a plan to grow your brand and your business.</p>

<p>For a more in-depth look at the work we’ve done and the goals that we’ve accomplished while working closely together with our customers, we have provided case studies of some of our clients.</p>


         {/* <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/case-study">View Case Studies </Link></h1> */}


         <h1><Link to="/case-study"
  style={{
    '--color-1': '#333',
    '--color-2': '#000',
    background: `
      linear-gradient(
        180deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,
    color: 'white',
    textAlign: 'center',
    fontSize:'1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '14px 0',
    borderRadius: 7,
    width: 'auto',
    maxWidth:'400px',
    margin: '20px auto',
    border: '1px solid #000',
    boxShadow: '1px 3px 4px black'
  }}
>
View Case Studies
</Link></h1>







        </div>
    </div>
    {/* <BgImageLL filename="istockphoto-1078587340-2048x2048.jpg" /> */}
 </div>



 {/* <div className="outerpanel" style={{borderRight:'none'}}>


<span className="headline">Media <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
<div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Media</strong><br />
          <p style={{ }}>Ad2, Inc. recognizes that traditional media ain’t so traditional anymore. With the expansion of online and interactive marketing and the introduction of social media, SMS, and MMS media, there are a variety of media plans available for one budget. The media mix and marketing strategy can vary greatly from customer to customer depending on their goals, target market, and marketing message. Depending upon the customer and the strategy varies with each customer and that customer’s target market.</p>

          <p> Ad2, Inc. is committed to researching new mediums and approaches to traditional media to offer innovative ways for you to reach your audience in the most cost effective manner. Our team works closely with the media to increase the reach and frequency of your advertising without increasing the total ad spend, providing our clients the best CPP available.</p>


        </div>
    </div>
    <BgImage filename="case-study-pnb1.jpg" />
 </div> */}








    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default slidePanelHome1