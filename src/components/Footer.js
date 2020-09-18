import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'

import Consent from '../components/Consent'





const Footer = class extends React.Component {
  render() {
    return (

      <> 
      <ScrollAnimation animateIn="fadeIn" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={100}>
      <Consent />
  </ScrollAnimation>

  <canvas id="canvas"></canvas> 
  
      <footer className="footer" style={{position:'relative', bottom:'0', width:'100vw'}}>
        <div className="content">
          


        
 
 


<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>

  <li stye={{margin:'5px 8px 0 0'}}><span>We&apos;re <br />Social: </span></li>
<li>&nbsp;&nbsp;&nbsp;</li>
<li><a className="social"  href="http://www.facebook.com/Ad2Inc" alt="Facebook" title="Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>
{/* <li><a className="social" href="https://linkedin.com" alt="LinkIn" title="LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></li> */}
<li><a className="social" href="https://twitter.com/Ad2Inc" alt="Twitter" title="Twitter"><FaTwitterSquare /><span>Twitter</span></a></li>
{/* <li><a className="social" href="https://instagram.com" alt="Instagram" title="Instagram"><FaInstagram /><span>Instagram</span></a></li> */}


<li><a className="social" href="https://www.youtube.com/channel/UCxvvY1iCEHnjQnl1ejKwcwQ" alt="YouTube" title="YouTube"><FaYoutubeSquare /><span>YouTube</span></a></li>
</ul>





<div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: ''}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>



<div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: ''}}>Copyright &copy; {(new Date().getFullYear())} Ad2Inc.</div>
        </div>
        
      </footer>
     

      </>
      
    )
  }
}

export default Footer

