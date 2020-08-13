import React from 'react'
import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import SlidePanelHome1 from '../components/slidePanelHome1'
// import GalleryMenu from '../../components/GalleryMenu'
// import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from '../components/Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { IoMdFingerPrint } from 'react-icons/io'

// import { FiZoomIn } from 'react-icons/fi'

// import Img1 from '../components/Img1'
// import Img2 from '../components/Img2'
// import Img3 from '../components/Img3'
// import Img4 from '../components/Img4'

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
  width:40vw;
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
    alignItems:center;
    justifyContent:center;
    width:100%;
    height:50vh;
    position:absolute;
    top:12vh;
    z-index:1;
    padding:80px 2em 1em 2em;
  }

 .contentpanel{
     display:inline-block;
     padding:1em 1em 1em 1em;
     border:0.16em solid #FFFFFF;
    border-radius:6px;
     margin:0 auto;
     box-sizing: border-box;
    box-shadow: 0px 1px 6px 1px black;
     text-decoration:none;
    text-align:left;
    text-shadow: 1px 2px 1px black;
     font-weight:400;
     color:#FFFFFF;
    cursor:default;
    background: rgba(0,0,0,0.75);
    filter: brightness(120%);
     transition: all 0.15s;
    fontSize:100%;
     animation:fade 2s forwards;
    opacity:0;
    overflow:scroll;
    }

  

    .contentpanel > *{opacity:0; animation:fade 3s forwards;}

    .headline{
      padding:1em;
    //  border:0.16em solid #FFFFFF;
    // border-radius:6px;
     margin:0 auto;
    box-shadow: 0px 1px 6px 1px black;
    text-shadow: 1px 2px 1px black;
    background: rgba(237,27,45,0.75);
    filter: brightness(120%);
    transition: all 0.15s;
    font-size:100%;
    font-weight:0 !important; 
    // height:2.5rem;
    position:absolute;
    bottom:1vh;
    max-width:20vw;
    color:#fff;
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

`






const TestBg = () => (
  <Layout>
   <CustomBox>
<>







{/* <Img1 />
<Img2 />
<Img3 />
<Img4 /> */}

{/* <SlidePanelHome1 /> */}
<section className="outer section section--gradient" style={{padding: '0px 2rem 0 2rem'}}>
   
   <div className="container">
   <h1 style={{textAlign:'center', marginTop:'10px', fontSize:'140%'}}>More Services</h1>
   <p>Ad2, Inc. offers creative development and campaign management services, as well as brand consulting and other marketing communications services, such as marketing research, strategic planning, direct and interactive marketing.</p> 
   


     </div>
     </section>
</>

     






    


    

    
    
 


</CustomBox>
  </Layout>
)
export default TestBg