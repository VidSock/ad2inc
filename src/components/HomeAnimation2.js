import React from 'react'
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
// import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from './Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { IoMdFingerPrint } from 'react-icons/io'
// import DownArrow from './DownArrow'
// import { RiArrowDownCircleLine } from 'react-icons/ri'
import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'
import BgImage from './BgImage-tr'


const CustomBox = styled.div`

// caras
// .bgimage-tr{
//   height: 100vh;
//   width:100%;
//   background-color: transparent;
//   background-size: cover;
//   background-position: right 10%;
//   display: flex;
//   align-items: center;
//   z-index:-5;
// }


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

.slidepanel div img {
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
.headline{padding:4px; font-size:70%;}

// .bgimage-tr{
//   height: 100vh;
//   width:100%;
//   background-color: transparent;
//   background-size: cover !important;
//   background-position: right bottom !important;
//   display: flex;
//   align-items: center;
//   z-index:-5;
// }

}


@media (max-width: 70rem) {
// .innerpanel{height:80%; top:5vh;}

}

// .slidepanel > div:last-child{display:; width:50%}
// .slidepanel > div:nth-last-of-type(-n+2){width:50%}







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
          opacity:1;
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

const HomeAnimation2 = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper" style={{marginTop:'0', overflow:'hidden'}}>
    

{/* <DownArrow /> */}
<TouchUp />




<div className="shout" style={{position:'absolute', top:'5vh',}}>

<span style={{position:'absolute', bottom:'35vh', textAlign:'left', paddingLeft:'4vw', fontSize:'4vw', opacity:'1', animation:'poptop 3s forwards', animationDelay:'16s'}}>We grow<br /> business through</span>

<span style={{position:'absolute', bottom:'20vh', textAlign:'left', paddingLeft:'8vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'1s'}}>Advertising</span>

<span style={{position:'absolute', bottom:'20vh', textAlign:'left', paddingLeft:'8vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'4s'}}>Knowledge</span>

<span style={{position:'absolute', bottom:'20vh', textAlign:'left', paddingLeft:'8vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'7s'}}>Creative</span>

<span style={{position:'absolute', bottom:'20vh', textAlign:'left', paddingLeft:'8vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'10s'}}>Insight</span>

<span style={{position:'absolute', bottom:'20vh', textAlign:'left', paddingLeft:'8vw', fontSize:'9vw', animation:'poptop 3s forwards', animationDelay:'13s'}}>Research</span>

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
    
  {/* <img src="https://source.unsplash.com/random/1200x12002" alt="rando" /> */}

      
    <BgImage filename="homebanner-pb.jpg" style={{padding:'40px'}} />
 </div>



  






    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default HomeAnimation2