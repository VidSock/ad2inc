import React from 'react'
import Layout from '../components/Layout'
// import Footer from '../components/Footer'
import { Link } from 'gatsby'
import Image from '../components/Image'
import GalleryMenu from '../components/GalleryMenu'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'

// import Contact from '../components/Contact-inc'

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
  // border:0px solid aliceblue;
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


// const gra = function(min, max) {
// 	return Math.random() * (max - min) + min;
// };
// const init = function() {
// 	let items = document.querySelectorAll("section");
// 	for (let i = 0; i < items.length; i++) {
// 		items[i].style.minHeight = gra(120, 205) + "vh";
// 	}


// };
// init();



const Test8 = () => (
  <Layout>
   <CustomBox>
  


   <section className="outer section section--gradient" style={{padding: '60px 2rem 0 2rem'}}>
   <GalleryMenu />
      <div className="container">
      <p>Thank you for taking the time to view a few samples of our work. We are excited to share just a few examples of what we do.</p> 
      
      <p>Choose by type of work below. If you have any questions about the ads or campaigns shown here, please contact us for additional information. You can email us at CustomerService@Ad2Inc.net or call us to schedule a free consultation at 228-822-9890.</p>

        </div>
        </section>




   <div className="acc-wraper" style={{marginTop:''}}>
  <div className="accordion">

  <div>
      {/* <img src="https://image.freepik.com/free-photo/beautiful-green-park_1417-1443.jpg" alt="" /> */}
      <Image style={{zIndex:'-1', position:'fixed'}} className="slider1" alt="Pav &amp; Broome Fine Jewelry" filename="case-study-pnb.jpg" />
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}><Link className="button2" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1>
        </div></div>
    </div>

    <div>
      {/* <img src="https://image.freepik.com/free-photo/waterfall-that-is-layer-thailand_1150-15650.jpg" alt="" /> */}
      <Image style={{zIndex:'-1', position:'fixed'}} className="slider1" alt="The Pediatrics Center - Gulfport" filename="case-study-pediatric-center.jpg" />
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/case-studies/casestudy-pediatric-center/">The Pediatrics Center<br /> View the case study</Link></h1>

    </div>
  </div>
    </div>


    <div>
      <img src="https://image.freepik.com/free-photo/lake-mountains_1204-507.jpg" alt="" />
    </div>

    <div>
      <img src="https://image.freepik.com/free-photo/sunlight-forest_1004-9.jpg" alt="" />
    </div>

    <div>
      <img src="https://image.freepik.com/free-photo/sunrise-bali-jungle_1385-1644.jpg" alt="" />
    </div>

    <div>
      <img src="https://image.freepik.com/free-photo/grass-with-sunlight-countryside-suburban_53876-42989.jpg" alt="" />
    </div>
    
  </div>
</div>



{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}






{/* <Footer /> */}

</CustomBox>
  </Layout>
)

export default Test8





