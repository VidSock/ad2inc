import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
import CookieConsent from "react-cookie-consent";



const Consent = () => (


<CookieConsent
	debug={false}
	location="none"
	style={{position:'absolute', bottom:'0', background: "#222", zIndex:'1', padding:'0% 3% 0% 3%', opacity:'.8', overflow:'hidden', width:'100vw' }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{ color: "#fff", background: "#666", fontSize: "13px", }}
    
    buttonText="Accept"
    buttonStyle={{ color: "#333", justifyContent:'center', textAlign:'center', background: "#eee", fontSize: "13px", fontWeight:'bold', borderRadius:'5px', padding:'.5rem 1rem', margin:'10px auto 10px auto', top:'10px',  position:'relative', zIndex:'2'}}
delay={5}
    expires={30}
    cookieName="Ad2inc.net-site-pref-cookie"
>

    <div style={{padding:'0 0 0 0', fontSize:'90%', textAlign:'center',}}> We use cookies to optimize our website.<br />
    <span style={{ fontSize: "75%" }}>
   <a href="/privacy/" style={{color:'#fff',}}>Do Not Sell My Personal Information</a> | <a href="/privacy/" style={{color:'#fff',}}>Privacy Policy</a>
    </span><br /><br /></div>
    
</CookieConsent>


)

export default Consent


