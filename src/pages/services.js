import React from 'react'
import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../components/Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { IoMdFingerPrint } from 'react-icons/io'

// import { FiZoomIn } from 'react-icons/fi'

// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`

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
  height:50vh;
  // min-height: calc(~"100vh - 100px");
}

.accordion > div{
  width:50%;
  flex-grow:1;
  flex-shrink:1;
  overflow:hidden;
  transition:all .5s ease;
  border-left:1.5px solid #222;
  border-right:1.5px solid #222;
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
  height:100vh;
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






const ServicesIndex = () => (
  <Layout>
   <CustomBox>


  

  

  <section className="outer section section--gradient" style={{padding: '0px 2rem 0 2rem'}}>
   
      <div className="container">
      <h1 style={{textAlign:'center', marginTop:'100px', fontSize:'140%'}}>Services</h1>
      <p>Ad2, Inc. offers creative development and campaign management services, as well as brand consulting and other marketing communications services, such as marketing research, strategic planning, direct and interactive marketing.</p> 
      
  

        </div>
        </section>




   <div className="acc-wraper" style={{marginTop:''}}>
  <div className="accordion">

  <div style={{borderLeft:'none'}}>
      {/* <Image style={{zIndex:'-1', position:'fixed'}} className="slider1" alt="Pav &amp; Broome Fine Jewelry" filename="case-study-pnb.jpg" /> */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}><Link className="button2" to="/portfolio/identity/">Identity</Link></h1>
        </div></div>
    </div>

    <div>
      {/* <Image style={{zIndex:'-1', position:'fixed'}} className="slider1" alt="The Pediatrics Center - Gulfport" filename="case-study-pediatric-center.jpg" /> */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/portfolio/logos/">Logos</Link></h1>

    </div>
  </div>
    </div>


    <div>
      {/* <Image style={{zIndex:'-1', position:'fixed'}} className="slider1" alt="Gulf Coast Community Federal Credit Union" filename="casestory-gccgfcu.jpg" /> */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/portfolio/print/">Print</Link></h1>

    </div>
  </div>
    </div>

    <div style={{borderRight:'none'}}>
      {/* <Image style={{zIndex:'-1', position:'fixed'}} className="slider1" alt="Jackson County Economic Development Foundation" filename="case-study-jcedf.jpg" /> */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/portfolio/radio/">Radio</Link></h1>

    </div>
  </div>
    </div>

    <div>
      {/* <img src="https://image.freepik.com/free-photo/sunrise-bali-jungle_1385-1644.jpg" alt="" /> */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/portfolio/tv/">Television</Link></h1>

    </div>
  </div>
    </div>

    <div>
      {/* <img src="https://image.freepik.com/free-photo/sunrise-bali-jungle_1385-1644.jpg" alt="" /> */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/portfolio/web/">Web</Link></h1>

    </div>
  </div>
    </div>
    
  </div>
</div>

      

<br /><br /><br /><br /><br /><br /><br />

</CustomBox>
  </Layout>
)
export default ServicesIndex