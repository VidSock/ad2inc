import React from 'react'
import Layout from '../components/Layout'
// import Footer from '../components/Footer'
// import { Link } from 'gatsby'
// import Image from '../components/Image'
// import GalleryMenu from '../components/GalleryMenu'
// import ScrollAnimation from 'react-animate-on-scroll'
import Hero from '../components/BgImage'
// import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'

// import Contact from '../components/Contact-inc'
import { Link } from 'gatsby'

import styled from 'styled-components'
const CustomBox = styled.div`
.header1 {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    // background-color: #FC466B;
    position: fixed;
    height: 60px!important;
    overflow: hidden;
    z-index: 10;
}
#sidebarMenu {
    height: 100%;
    position: fixed;
    right: 0;
    width: 250px;
    margin-top: 60px;
    transform: translateX(250px);
    transition: transform 250ms ease-in-out;
    background: linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%);
}
.sidebarMenuInner{
    margin:0;
    padding:0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li{
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li span{
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.50);
}
.sidebarMenuInner li a{
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}

input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    right: 15px;
    height: 42px;
    width: 42px;
}
.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 5px;
    width: 100%;
    background-color: #fff;
}
.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.9);
}
.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.9);
}
.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.9);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.9);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.9);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -14px;
}

`


function test10(props) {
	return (

  <Layout>
<CustomBox>
  


  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>

  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      <li>Todd Lambert <span>Web Developer</span></li>
      <li>
      <Link id="portfolio" className="navbar-item" to="/portfolio/">Work</Link>
       </li>
       <li>
              <Link id="casestudies" className="navbar-item" to="/case-study/">
                Case Studies
              </Link>
      </li>

      <li>
              <Link className="navbar-item" to="/about/">
                About
              </Link>
      </li>

      <li>
              <Link className="navbar-item" to="/blog/">
                Blog
              </Link>
      </li>

      <li>
             <label className="modal-btn" htmlFor="modal-toggle" style={{textShadow: '1px 2px 0px black',}}>Contact</label> 
      </li>

    </ul>
  </div>

  

   <Hero filename="ad2-banner-pnb.jpg" />
   

   </CustomBox>
  </Layout>
)
	}

export default test10





