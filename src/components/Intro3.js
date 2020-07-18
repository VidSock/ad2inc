import React from 'react'
import styled from "styled-components"
import Image from '../components/Image'
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`






`



   
const Intro3 = () => (

   


<CustomBox style={{}}>
<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'60px', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  

 
 
 

<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
   
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="BOAT" filename="img_2487.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="CAR" filename="3136.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="BARN" filename="night300.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="CAMP" filename="night303.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
    
   <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="PLANE" filename="night307.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
   
  </div>
</div>



</div>
</div>


</CustomBox>
  
)

export default Intro3