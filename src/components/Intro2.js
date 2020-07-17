import React from 'react'
import styled from "styled-components"
import Image from '../components/Image'
import Newsletter from '../components/PopNewsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`


@media (max-width: 48em) {
	.image-wrap h1, .image-wrap h2, .image-wrap h3  {font-size:300% !important; border:0px solid red !important;}
	.image-wrap .news-btn{ margin-top:1rem;}
	.image-wrap .innerpanel{font-size:70% !important;}
}

@media (min-width: 58em) {
	.textbox{padding-top:80px !important;}
}


`



   
const Intro2 = () => (

   


<CustomBox style={{}}>


<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'60px', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  

 <div className="textbox" style={{position:'absolute', top:'60px', left:'0', width:'100vw', height:'100vh', overflow:'hidden', padding:'0 0 0 0', border:'0px solid red', zIndex:'1',}}>
  
  

   

  
  
  <ScrollAnimation animateIn="bounceInDown" delay={3400} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', paddingTop:'0', right:'10%',}}>
        <h1
          className="boom normal txtshadow-header hit-the-floor"
          style={{
            color: '#fff',
            fontSize: '4rem',
           position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
            textAlign: 'right', 
            float: 'none',
          }}
        >
          Follow me
        </h1>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInRight" delay={3500} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'-10px', right:'10%',}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'3rem',
           color: 'white',
           position: 'relative',
            textAlign: 'right', 
          }}
        >
          into the
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={3450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'-25px', right:'10%',}}>
        <h3
          className="boom"
          style={{
           fontSize:'6rem',
           color: 'white',
           position: 'relative',
//            top: '230px',
            textAlign: 'right',
            textTransform: 'uppercase', 
          }}
        >
          Night
        </h3>
        </ScrollAnimation>


        
<ScrollAnimation animateIn="bounceInRight" delay={3900} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'-40px', right:'12%', float:'right', display:'inlineBlock', justifyContent:'', alignItems:'center', margin:'0 auto', padding:'0 0 0 0',  textAlign:'center',}}>
   <Newsletter />      
</ScrollAnimation>




        
        </div>
        
        
        

<div className="" style={{position:'absolute', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'',}}>
<ScrollAnimation animateIn="fadeIn">
<div className="image-wrap" style={{position:'relative', overflow:'hidden',}}>

  
   
   
    <div className=" kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="home-banner.jpg" style={{backgroundSize:'cover', zIndex:'', width:'100vh' }} /></div>
    

    

    

    

   

</div>
</ScrollAnimation>
        </div>
        
        
        
    

</div>
</div>



</CustomBox>
  
)

export default Intro2