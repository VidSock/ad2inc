import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ad2inc-logo-round.svg'
import Headroom from "react-headroom"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { GoArrowUp } from 'react-icons/go';
import { WiDaySunny } from 'react-icons/wi';
// import Image from './Image'
import PopContact from '../components/PopContact'
// import ScrollAnimation from 'react-animate-on-scroll'


const Navbar = class extends React.Component {
  
/* eslint-disable */

  render() {
    return (
	    
          
<Headroom style={{ zIndex: '5', }}>
 
    <header className="header">

    
    <Link to="/" className="logolink" title="Logo - Back To Home">
    
    <img className="logo rollIn" src={logo} alt="Ad2Inc Logo" style={{position:'absolute', height:'300px', animation: 'rollIn 1s',}} />
    {/* <Image alt="Temp Graphic" filename="ad2inc-logo-round.png" /> */}

   </Link>


  
 
 
  

<input className="menu-btn" name="menu-btn" type="checkbox" id="menu-btn" aria-label="Open Mobile Menu" />
<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

            <ul id="menu" className="menu">
            
            
            
            {/* <li>
              <Link className="navbar-item" to="/whatwedo/">
                What We Do
              </Link>
              </li> */}
            
            
            
            <li>
              <Link id="portfolio" className="navbar-item" to="/portfolio/">
               Work
              </Link>
              </li>

              
              {/* <li>
              <Link className="navbar-item" to="/products">
                How We Do It
              </Link>
              </li> */}
              
              
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
            <PopContact />
            
      
      
   </header>
   
    <div className="themer" style={{display:'block'}}><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide">
            
            <input
              type="checkbox" value="None" id="themeSlide" name="themeSlide"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide" style={{color:'#222', textAlign:'center', padding:'0',}}><WiDaySunny /></label></div>
        )}
      </ThemeToggler></div>
      
      
      <a href="#topofpage" title="Back To Top" className="back-to-top "><GoArrowUp /></a>
      
</Headroom>
        
      
      
    )
  }
}

export default Navbar
