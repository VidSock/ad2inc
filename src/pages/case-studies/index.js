import React from 'react'
import Layout from '../../components/Layout-noc'
// import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../../components/Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'

// import Contact from '../../components/Contact-inc'

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
  height:50vh;
}

section {
	scroll-snap-align: start;
  border-bottom:0px solid red !important;
  overflow:hidden;
  height:100vh;
  background:tranparent !important;
  // widtH:90%;
  // margin:0 auto;
}

.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:60vh;
  display:block;
  background-size:cover;
  min-height:60vh;
  // z-index:3 !important;
}




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



const CaseStudyIndex = () => (
  <Layout>
   <CustomBox>
  <Navbar />

  <h1 style={{textAlign:'center', marginTop:'100px', fontSize:'140%'}}>Ad2 Case Studies</h1>
<div className="container2" style={{position:'', height:'', display:'', border:'5px dotted ', margin:'5vh 10vw 0 10vw', borderRadius:'12px'}}>




	
    
<section className="child" style={{position:'relative', height:'60vh', overflow:''}}>

<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100vw', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', padding:'1rem', border:'1px solid', textAlign:'center'}}>
        <h1 style={{fontSize:'100%'}}><Link className="" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1>
    </div>
  </div>


<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={0} offset={0} style={{zIndex:'-5', position:'', top:''}}>    
<Image style={{zIndex:'-5', position:'fixed'}} className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg" />
</ScrollAnimation>



  </section>
{/* END Panel 1 */}




<section className="child" style={{position:'relative', height:'50vh', overflow:''}}>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={0} offset={0} style={{zIndex:'-4', position:'', top:''}}> 
<Image style={{zIndex:'-4', position:'fixed'}} className="slider1" alt="Todd Stars" filename="ad2-banner-pnb.jpg"  />
</ScrollAnimation>
</section>
{/* END Panel 2 */}



<section className="child" style={{position:'relative', height:'50vh', overflow:''}}>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={0} offset={0} style={{zIndex:'-3', position:'', top:''}}> 
<Image style={{zIndex:'-3', position:'fixed'}} className="slider1" alt="Todd Stars" filename="ad2-banner-jcdef.jpg" />
</ScrollAnimation>
</section>
{/* END Panel 3 */}





{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}


{/* <Footer /> */}


</div>


</CustomBox>
  </Layout>
)
export default CaseStudyIndex






