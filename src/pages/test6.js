import React from 'react'
import Layout from '../components/Layout-noc'
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

// .container2 {
//   scroll-snap-type: y mandatory;
// }

// .child {
//   scroll-snap-align: start;
// }



.wrapper {
	display: flex;
}



// main {
// 	max-height: 100vh;
// 	overflow-y: scroll;
//   scroll-snap-type: y mandatory;
//   height:100%;
//   min-height:100%;
// }

.container2 {
	max-height: 100vh;
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height:100%;
  min-height:100%;
  scroll-snap-align: start;
  min-height:100vh;
  height:100vh;
  border-bottom:0px solid red !important;
}

section {
	scroll-snap-align: start;
  min-height:100vh;
  height:100vh;
  border-bottom:0px solid red !important;

}

section img{
  display:block;
  height:100vh;
  width:100vw;
  background-size:cover;
  position:fixed;
  top:0;
  z-index:-1;
}


footer{display:none !important;}
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



const Test6 = () => (
  <Layout>
   <CustomBox>
  
<div class="container2" style={{position:'', top:'0', height:'', display:'block'}}>




	
    
<section className="child" style={{position:'', height:''}}>
<ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={false} animatePreScroll={true} delay={300} offset={0}  style={{zIndex:'-5'}}>

<Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg" />
<p>Ut diam urna, sollicitudin in eros quis, cursus sodales quam. Mauris nulla lorem, fringilla sit amet lacus in, sollicitudin posuere nisl. Praesent et molestie nulla. Phasellus scelerisque urna purus, ac porttitor ex maximus sed. Suspendisse dignissim felis quis felis hendrerit, et egestas dolor placerat. Sed auctor elit at ligula accumsan, ac sollicitudin tortor tempor. Pellentesque cursus tellus arcu, eu convallis tortor feugiat eu. Quisque scelerisque justo vitae ornare feugiat. Quisque ultricies nisi eu interdum aliquet. Praesent sagittis commodo rhoncus. Nulla bibendum erat vitae pulvinar consectetur. Sed eget sem vitae erat faucibus interdum a quis urna. Aenean quis imperdiet enim. In nec lacinia urna. Pellentesque finibus lorem ac cursus faucibus.</p>
</ScrollAnimation>
  </section>

{/* END Panel 1 */}




  <section className="child" style={{position:'', height:''}}>

  <ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-4'}}>
<Image className="slider1" alt="Todd Stars" filename="ad2-banner-pnb.jpg"  />

</ScrollAnimation>
</section>

{/* END Panel 2 */}



  <section className="child" style={{position:'', height:''}}>

 <ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-3'}}>
  
<Image className="slider1" alt="Todd Stars" filename="ad2-banner-jcdef.jpg" />

</ScrollAnimation>
</section>

{/* END Panel 3 */}





{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}
</div>
{/* <div className="spacer99"></div> */}
</CustomBox>
  </Layout>
)

export default Test6





