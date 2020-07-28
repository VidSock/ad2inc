import React from 'react'
import Layout from '../components/Layout-noc'
import Footer from '../components/Footer'
// import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../components/Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'

// import Contact from '../components/Contact-inc'

const CustomBox = styled.div`

.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}


.progress{position:absolute; top:80vh; left:100px; border:1px solid yellow; z-index:1;}

.slide:nth-child(1) {
  -webkit-animation: fade 24s 0s infinite;
  z-index:2;
}

.slide:nth-child(2) {
  -webkit-animation: fade 24s 6s infinite;
  z-index:1;
}

.slide:nth-child(3) {
  -webkit-animation: fade 0s 0s infinite;
  z-index:0;
}


.slider{z-index:-1;}


//  SLIDE



#vidpop {
  display: block;
  text-align:center;
}

label + input[type=checkbox]{
display:none !important;
} 
 
input[type=checkbox]:checked + label div{
  transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
  z-index:1;
} 

input[type=checkbox]:checked + label div label{display:block !important; cursor:pointer;}


#vid-toggle:checked + #vidpop .sub{display:none !important;}

#vid-open{
  position:absolute; bottom:0; display:block; width:100%; height:100%;  z-index:1; cursor:pointer;
  // background:#fff;
}



.container2 {
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height:100vh;
}

section {
	scroll-snap-align: start;
  border-bottom:2px solid red !important;
  overflow:hidden;
  height:100vh;
}

.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:100vh;
  display:block;
  background-size:cover;
  min-height:100vh;
}




`





const Test6 = () => (
  <Layout>
   <CustomBox>
  
<div className="container2" style={{position:'', top:'', height:'', display:'', overflowY:'scroll'}}>




	
{/*  Panel 1 */}
<section className="child" style={{position:'relative', height:'100vh', overflow:''}}>

<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={0} offset={0} style={{zIndex:'-5', position:'', top:'0'}}> 
<Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg"  />
</ScrollAnimation>
  </section>
{/*  Panel 1 */}



{/*  Panel 2 */}
<section className="child" style={{position:'relative', height:'100vh'}}>
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-4', position:'', top:'0'}}>
<Image className="slider1" alt="Todd Stars" filename="ad2-banner-pnb.jpg"  />
</ScrollAnimation>
</section>
{/*  Panel 2 */}


{/*  Panel 3 */}
<section className="child" style={{position:'relative', height:'100vh'}}>
 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-3', position:'', top:'0'}}>
<Image className="slider1" alt="Todd Stars" filename="ad2-banner-jcdef.jpg" />
</ScrollAnimation>
</section>
{/* Panel 3 */}





{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}


<Footer />


</div>


</CustomBox>
  </Layout>
)

export default Test6





