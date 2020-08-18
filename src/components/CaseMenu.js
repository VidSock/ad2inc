import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`

.galmenu{
display: flex; justify-content: space-between; align-items: flex-start; margin:0 3%;
background:#222;
padding:4px 4px;
border-radius:10px;
border-top:1px solid #444;
width:auto;
// box-shadow: 1px 2px 3px 0px #554f4f;
text-shadow: 0px 1px 0px black;
}
.galmenu li {width:30vw; height:100%; padding:0; color:#fff; margin:0 3px; justify-content:center; font-size:.7rem; font-weight:normal;}



.galmenu .galgrad{display: block; padding:10px; border-radius:3px; border:0px solid #444; text-decoration: none; text-shadow: 0px 0px 0px black; height:100%;}

.galmenu .galgrad{
// background: #3a3a3a;
// background: -moz-linear-gradient(top, #3a3a3a 8%, #1b1b1b 12%, #0a0a0a 47%, #010101 50%, #0d0d0d 74%, #3a3a3a 86%, #050505 88%, #3a3a3a 93%, #3a3a3a 96%, #0c0c0c 99%);
// background: -webkit-linear-gradient(top, #3a3a3a 8%,#1b1b1b 12%,#0a0a0a 47%,#010101 50%,#0d0d0d 74%,#3a3a3a 86%,#050505 88%,#3a3a3a 93%,#3a3a3a 96%,#0c0c0c 99%);
// background: linear-gradient(to bottom, #3a3a3a 8%,#1b1b1b 12%,#0a0a0a 47%,#010101 50%,#0d0d0d 74%,#3a3a3a 86%,#050505 88%,#3a3a3a 93%,#3a3a3a 96%,#0c0c0c 99%);
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3a3a3a', endColorstr='#0c0c0c',GradientType=0 );
}

.galmenu [aria-current] {
background: #ED1B2D;
filter: brightness(90%);
}


@media (max-width: 48rem) {
.galmenu{
display: flex; justify-content: space-between; flex-wrap:; align-items: top; flex-shrink: inherit; flex-basis: 30%;
}
.galmenu li{width:30%; margin:0 0 3px 0; font-size:.7rem !important; border:0px solid blue; height:100%;}
.custom-gal li {width:30%; height:100%; padding:0; color:#fff; margin:5px 3px; text-align: center;}

}


`



   
const CaseMenu = () => (

<CustomBox style={{}}>

<div className="outer intro container np" style={{ borderTop:'0px solid #000',}}>
      <div className="container1 content" style={{padding:'10px 0 10px 0',}}>
    
<h2 style={{textAlign:'center', fontSize:'80%', margin:'1rem 0', padding:'0 0 5px 0',}}>Browse Our Case Studies:</h2>

<ul id="galmenu" className="galmenu custom-gal" style={{}}>
      
      <li className="galmenu-item interest"><Link to="/case-study/pavandbroome/" className="galgrad" title="Pav &amp; Broome Fine Jewelry Gulfport">Pav &amp; Broome Fine Jewelry</Link></li>
      
      <li className="galmenu-item interest"><Link to="/case-study/pediatric-center/" className="galgrad" title="The Pediatric Center Gulfport">The Pediatric Center at Garden Park</Link></li>
      
      <li className="galmenu-item interest"><Link to="/case-study/hssm/" className="galgrad" title="Humane Society of South Mississippi">Humane Society of South Mississippi</Link></li>
      
      <li className="galmenu-item interest"><Link to="/case-study/jcedf/" className="galgrad" title="Jackson Co. Economic Development Foundation - Gautier">Jackson Co. Eco. Dev. Foundation</Link></li>


      <li className="galmenu-item interest"><Link to="/case-study/coastelectric/" className="galgrad" title="Coast Electric Power Association">Coast Electric Power Association</Link></li>

      



      
	  {/* <li className="galmenu-item interest"><Link to="/portfolio/print" className="galgrad" title="Print">Print</Link></li>
	  
      <li className="galmenu-item interest"><Link to="/portfolio/web" className="galgrad" title="Web">Web</Link></li> */}
      

      
      



      </ul>
      
      
      

</div>
      </div>

</CustomBox>
  
)

export default CaseMenu