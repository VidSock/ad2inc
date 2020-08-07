import React from 'react'
import Layout from '../../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../../components/Image'
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
  height:100vh;
  // min-height: calc(~"100vh - 100px");
}

.accordion > div{
  width:50%;
  // height:100vh;
  flex-grow:1;
  flex-shrink:1;
  overflow:hidden;
  transition:all .5s ease;
  border-left:0px solid ;
  border-right:0px solid;
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
  border:10px solid white !important; 
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

 .gatsby-image-wrapper{position: initial !important; height:0;}

`






const CaseStudyIndex = () => (
  <Layout>
   <CustomBox>


  

  {/* <h1 style={{textAlign:'center', marginTop:'100px', fontSize:'140%'}}>Ad2 Case Studies</h1>

  <section className="outer section section--gradient" style={{padding: '60px 2rem 0 2rem'}}>
   
      <div className="container">
      <p>Thank you for taking the time to view a few samples of our work. We are excited to share just a few examples of what we do.</p> 
      
      <p>Choose by type of work below. If you have any questions about the ads or campaigns shown here, please contact us for additional information. You can email us at CustomerService@Ad2Inc.net or call us to schedule a free consultation at 228-822-9890.</p>

        </div>
        </section> */}




   <div className="acc-wraper" style={{marginTop:''}}>
  <div className="accordion">




    <div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh', position:'absolute', zIndex:'1', animation: 'fade 3s forwards', opacity:'0', }}>
    <h1 style={{fontSize:'100%',}}>
      <Link className="button2" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link>
    </h1>
    </div>
      <Image alt="The Pediatrics Center - Gulfport" filename="case-study-pnb1.jpg" />
    </div>

  

    <div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh', position:'absolute', zIndex:'1', animation: 'fade 3s forwards', opacity:'0', }}>
    <h1 style={{fontSize:'100%',}}>
    <Link className="button2" to="/case-studies/casestudy-pediatric-center/">The Pediatrics Center<br /> View the case study</Link>
    </h1>
    </div>
    <Image alt="The Pediatrics Center - Gulfport" filename="case-study-pediatric-center1.jpg" />
    </div>


    
    <div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh', position:'absolute', zIndex:'1', animation: 'fade 3s forwards', opacity:'0', }}>
    <h1 style={{fontSize:'100%',}}>
    <Link className="button2" to="/case-studies/casestudy-gccfcu/">Gulf Coast Community FCU<br /> View the case study</Link>
    </h1>
    </div>
    <Image alt="Gulf Coast Community Federal Credit Union" filename="casestory-gccgfcu1.jpg" />
    </div>



    <div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh', position:'absolute', zIndex:'1', animation: 'fade 3s forwards', opacity:'0', }}>
    <h1 style={{fontSize:'100%',}}>
    <Link className="button2" to="/case-studies/casestudy-jcedf/">Jackson Co. Economic <br />Development Foundation<br /> View the case study</Link>
    </h1>
    </div>
    <Image alt="Jackson County Economic Development Foundation" filename="case-study-jcedf1.jpg" />
    </div>
   
    
  </div>
</div>

      



</CustomBox>
  </Layout>
)
export default CaseStudyIndex