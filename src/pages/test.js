import React from 'react'
import Layout from '../components/Layout'
// import Popper from '../components/Popper'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../components/Image'
// import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'
import { FaTimesCircle } from 'react-icons/fa'
import Intro2 from '../components/Intro2'

import styled from "styled-components"


const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }
.container, .outer{background:transparent;}
.spotimg{border-radius:12px;}
.imgbox{animation: zoomIn;
animation-duration: 2s;}

#vidpop {
  display: block;
  text-align:center;
}

label + input[type=checkbox]{
display:none !important;
} 
 
input[type=checkbox]:checked + label div{
  transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
  z-index:7;
} 

input[type=checkbox]:checked + label div label{display:block !important; cursor:pointer;}


#vid-toggle:checked + #vidpop .sub{display:none !important;}

#vid-open{
  position:absolute; bottom:0; display:block; width:100%; height:100%;  z-index:5; cursor:pointer;
  // background:#fff;
}






// #banner-vid:hover{transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;}

// #banner-vid{
//   display: block;
//   &:hover,
//   &:focus {
//     transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
//   }
// }



@media (max-width: 767px) {
  .full-width-image{background-position: center center !important; border:0px solid red !important;}
}

@media (max-width: 400px) {
  .full-width-image{background-position: top center !important; border:0px solid red !important; padding-top:100px !important}
}

@media (min-width: 58rem) {

  .full-width-image h1{font-size:200% !important;}
  .full-width-image h2{font-size:100% !important;}
  .full-width-image h3{font-size:100% !important;}
   .full-width-image p{font-size:102% !important;}

   .full-width-image{background-position: bottom right;}
  
  #hero h1{font-size:350% !important; line-height:95%; margin-bottom:1rem;}
  #hero h3{font-size:100% !important; color:red !important;}
  .special{font-size:100% !important;}
}



`


const Terms = () => (
  <Layout>
    <CustomBox>
    <Intro2  style={{}} />
  <div id="hero" className="outer intro">
  

  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} offset={0}>
        <h2
          className="normal mobile-txt"
          style={{
            color: '#333',
            fontSize: '1rem',
           position: 'relative',
           textTransform:'uppercase',
           top: '20%',
        margin: '0 auto',
        padding: '0 0',
            float: 'none',
            fontWeight:'bold',

            
          }}
        >
           Pav &amp; Broome Fine Jewelry
        </h2>
        </ScrollAnimation>
        
        
        
        
        
         <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={400}>
        <p
          className="normal mobile-txt"
          style={{
            color: '#333',
            fontSize: '.8rem',
           position: 'relative',
           width:'50%',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        marginTop: '1rem',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.  
        </p>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={800}>
        <h3
          className="normal spotlink mobile-txt"
          style={{
            color: '#333',
            fontSize: '1rem',
           position: 'relative',
           textTransform:'uppercase',
           textDecoration:'none',

           
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '1rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          <a href="/" style={{color:'#333', fontSize:'', textDecoration:'none',}}>See The Work <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
        </h3>
        </ScrollAnimation>
        



       

        <div className="split" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'60vw', margin:'-5vh 0 0 30vw', padding:'0', overflow:'',}}>

<ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={200} style={{width:'15vw', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #000', borderRadius:'24px', overflow:'hidden', position:'relative', margin:'0 0', transform:'rotate(10deg)',}}><Image alt="Ad2" filename="home-banner-phone.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Mobile websites</div>
</div>
</ScrollAnimation>

{/* <iframe width="100%" height="300px" src="https://pavandbroome.com"></iframe> */}

 <ScrollAnimation animateIn="rotateIn" animateOnce={false} delay={500} style={{width:'40vw', padding:'0', position:'relative'}}>  

<label id="vid-open" for="vid-toggle"></label>
 <input type="checkbox" id="vid-toggle" style={{width:'100%', display:'flex', justifyItems:'center', justifyContent:'center', textAlign:'center', alignItems:'center'}}/>
 

<label id="vidpop" for="vid-toggle">
<div className="imgbox shadow-3d" id="banner-vid" style={{border:'1px solid #000', borderRadius:'10px', overflow:'hidden', padding:'0', background:'#000', position:'relative', margin:'0 0', transform:'rotate(-10deg)',}}><iframe width="100%" height="280" src="https://www.youtube-nocookie.com/embed/7fyqJT8QDBY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
<div className="sub" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#fff', textAlign:'center', width:'100%',}}>Television spot for PavandBroome.com</div>
<label className="news-close1" htmlFor="vid-toggle" style={{display:'none', fontSize:'24px', color:'#fff', position:'relative', right:'0'}}><FaTimesCircle /></label>
</div>
</label>


</ScrollAnimation>



 </div>
{/* end split */}



  </div>

  
</CustomBox>
  </Layout>
)

export default Terms
