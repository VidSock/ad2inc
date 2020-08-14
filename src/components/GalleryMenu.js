import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`

.galmenu{
display: flex; justify-content: space-around; align-items: center; margin:0 3%;
background:#222;
padding:4px 4px;
border-radius:10px;
border-top:1px solid #444;
width:auto;
// box-shadow: 1px 2px 3px 0px #554f4f;
text-shadow: 0px 1px 0px black;
}
.galmenu li {width:30%; height:100%; padding:0; color:#fff; margin:0 3px; text-align: center;}



.galmenu .galgrad{display: block; padding:10px; border-radius:6px; border:0px solid #444; font-weight: bold; text-decoration: none; text-shadow: 0px 0px 0px black; height:100%;}

.galmenu .galgrad{
// background: #3a3a3a;
// background: -moz-linear-gradient(top, #3a3a3a 8%, #1b1b1b 12%, #0a0a0a 47%, #010101 50%, #0d0d0d 74%, #3a3a3a 86%, #050505 88%, #3a3a3a 93%, #3a3a3a 96%, #0c0c0c 99%);
// background: -webkit-linear-gradient(top, #3a3a3a 8%,#1b1b1b 12%,#0a0a0a 47%,#010101 50%,#0d0d0d 74%,#3a3a3a 86%,#050505 88%,#3a3a3a 93%,#3a3a3a 96%,#0c0c0c 99%);
// background: linear-gradient(to bottom, #3a3a3a 8%,#1b1b1b 12%,#0a0a0a 47%,#010101 50%,#0d0d0d 74%,#3a3a3a 86%,#050505 88%,#3a3a3a 93%,#3a3a3a 96%,#0c0c0c 99%);
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a3a3a', endColorstr='#0c0c0c',GradientType=0 );
}

.galmenu [aria-current] {
background: #0c0203;
// background: -moz-linear-gradient(top, #0c0203 0%, #de0004 17%, #96000c 76%, #0c0203 100%);
// background: -webkit-linear-gradient(top, #0c0203 0%,#de0004 17%,#96000c 76%,#0c0203 100%);
// background: linear-gradient(to bottom, #0c0203 0%,#de0004 17%,#96000c 76%,#0c0203 100%);
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0c0203', endColorstr='#0c0203',GradientType=0 );
}


@media (max-width: 48rem) {
.galmenu{
display: flex; justify-content: space-around; flex-wrap: wrap; align-items: top; flex-shrink: inherit; flex-basis: 30%;
}
.galmenu li{width:18%; margin:0 0 3px 0;}
.custom-gal li {width:30%; height:100%; padding:0; color:#fff; margin:5px 3px; text-align: center;}

}


`



   
const GalleryMenu = () => (

<CustomBox style={{}}>

<div className="outer intro container" style={{ borderTop:'0px solid #000',}}>
      <div className="container1 content" style={{padding:'10px 0 10px 0',}}>
    
<h2 style={{textAlign:'center', fontSize:'80%', margin:'0', padding:'0 0 5px 0',}}>Browse Our Portfolio:</h2>

<ul id="galmenu" className="galmenu custom-gal" style={{}}>
      
      <li className="galmenu-item interest"><Link to="/portfolio/identity/" className="galgrad" title="Identity">Identity</Link></li>
      
      <li className="galmenu-item interest"><Link to="/portfolio/logos/" className="galgrad" title="Logos">Logos</Link></li>
      
      {/* <li className="galmenu-item interest"><Link to="/portfolio/radio" className="galgrad" title="Radio">Radio</Link></li> */}
      
      <li className="galmenu-item interest"><Link to="/portfolio/tv/" className="galgrad" title="TV">Media</Link></li>
      
	  <li className="galmenu-item interest"><Link to="/portfolio/print/" className="galgrad" title="Print">Print</Link></li>
	  
      <li className="galmenu-item interest"><Link to="/portfolio/web/" className="galgrad" title="Web">Web</Link></li>
      

      
      



      </ul>
      
      
      

</div>
      </div>

</CustomBox>
  
)

export default GalleryMenu