import React from 'react'
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
// import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from './Image'
import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { IoMdFingerPrint } from 'react-icons/io'

import { RiArrowDownCircleLine } from 'react-icons/ri'

// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`

.zoomer{filter: drop-shadow(3px 1px 1rem #ED1B2D);}

`

const DownArrow = () => (

    <CustomBox style={{}}>


<div id="root"></div>

    

<div className="zoomer" style={{display:'flex', alignItems:'center', justifyContent:'center', position:'absolute', width:'100%', height:'100%', zIndex:'0',}}>
<RiArrowDownCircleLine style={{fontSize:'350%', position:'fixed', bottom:'1vh', color:'#eee' }} />
</div>

  



</CustomBox>
  
  )
  
  export default DownArrow