import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ad2inc-logo-round.svg'
import Headroom from "react-headroom"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { GoArrowUp } from 'react-icons/go';
// import PopContact from '../components/PopContact'
import ScrollAnimation from 'react-animate-on-scroll'


const Navbar = class extends React.Component {
  


  render() {
    return (
	    
          
<Headroom style={{ zIndex: '5', }}>
 
    <header className="header">

    <ScrollAnimation animateIn="backInDown"  delay={0} initiallyVisible={false} animateOnce={true} animatePreScroll={true}  offset={0}>
    <Link to="/" className="logolink" title="Logo - Back To Home">
    <img className="logo" src={logo} alt="Ad2Inc Logo" style={{position:'absolute', height:'200', animation: 'bounceInDown 1s'}} />
   </Link>
  </ScrollAnimation>
  
<input className="menu-btn" type="checkbox" id="menu-btn" />
<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

            <ul id="menu" className="menu">
            
            
            
            <li>
              <Link className="navbar-item" to="#">
                Services
              </Link>
              </li>
            
            
            
            <li>
              <Link id="portfolio" className="navbar-item" to="/portfolio">
               Portfolio
              </Link>
              </li>

              
              {/* <li>
              <Link className="navbar-item" to="/products">
                How We Do It
              </Link>
              </li> */}
              
              
              <li>
              <Link className="navbar-item" to="#">
                Case Studies
              </Link>
              </li>
              
              
               <li>
              <Link className="navbar-item" to="/capabilities">
                About Us
              </Link>
              </li>
              
              

              <li>
             
             <label className="modal-btn" htmlFor="modal-toggle" style={{textShadow: '1px 2px 0px black',}}>Contact Us</label> 
              </li>
              
              
            </ul>
            
            
      
      
   </header>
   
    <div className="themer" style={{display:'none'}}><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide">
            <input
              type="checkbox" value="None" id="themeSlide" name="check"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide" style={{color:'#222', textAlign:'center', padding:'0',}}>Theme</label></div>
        )}
      </ThemeToggler></div>
      
      
      <a href="#topofpage" title="Back To Top" className="back-to-top "><GoArrowUp /></a>
      
</Headroom>
        
      
      
    )
  }
}

export default Navbar
