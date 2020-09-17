import React from 'react'
import Layout from '../../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
// import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from '../../components/Image'
// import SlidePanelCase from '../../components/SlidePanelCase'
import styled from "styled-components"
import CaseStudyPanels from '../../components/CaseStudyPanels'
// import { MdPlayArrow } from 'react-icons/md'
// import { IoMdFingerPrint } from 'react-icons/io'

// import { FiZoomIn } from 'react-icons/fi'

// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`

.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}



// .container2 {
// 	overflow-y: scroll;
//   scroll-snap-type: y mandatory;
//   height:100vh;
// }

// section {
// 	scroll-snap-align: start;
//   border-bottom:2px solid red !important;
//   overflow:hidden;
//   height:100vh;
// }

// .slider1{
//   position:fixed; 
//   top:0;
//   width:100vw;
//   height:100vh;
//   display:block;
//   background-size:cover;
//   min-height:100vh;
// }




// caras



.acc-wraper{
  margin: 0 ;
  width:100%;
  
}

.accordion{
  display:flex;
  flex-wrap:nowrap;
  overflow:hidden;
  width:100%;
  height:100vh;
}

.accordion > div{
  width:50%;
  flex-grow:1;
  flex-shrink:1;
  overflow:hidden;
  transition:all .5s ease;
  border-left:1.5px solid ;
  border-right:1.5px solid ;
  border-radius:0px;
  position:relative;
  align-items: center;
  justify-content: center;
}

.accordion > div:hover{
  flex-shrink:0
}

.accordion div img{
  width:100vw;
  height:100%;
  object-fit: cover;
  position:absolute;
  z-index:-1;
}

// .accordion a:hover::before { 
//   content: "Before -"; 
//   background-color: green; 
//   position:absolute;
//   z-index:1;
//   width:200px;
//   margin:0 auto;
// } 

.accordian a{
  z-index:0;
  align-items: center;
  justify-content: center;
  border:1px solid white !important; 
  animation: fadeIn;
}


.accordion div:hover a{
  display:block;
  }
  .accordion div a{
  display:none;
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

 .gatsby-image-wrapper{position: initial !important;}



`






const CaseStudyIndex = () => (
  <Layout>
   <CustomBox>


  

   <CaseStudyPanels />

      



</CustomBox>
  </Layout>
)
export default CaseStudyIndex