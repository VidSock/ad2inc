import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
import CookieConsent from "react-cookie-consent";



const Consent = () => (


<CookieConsent
	debug={true}
	location="bottom"
	style={{ background: "#222", zIndex:'0', padding:'1% 3% 1% 3%', }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{ color: "#fff", background: "#666", fontSize: "13px", }}
    
    buttonText="Accept"
	buttonStyle={{ color: "#333", justifyContent:'center', textAlign:'center', background: "#eee", fontSize: "13px", fontWeight:'bold', borderRadius:'5px', padding:'.5rem 1rem', margin:'20px auto 10px auto',  position:'relative', }}

    expires={30}
    cookieName="Hytron.com-site-pref-cookie"
>

    <div style={{padding:'10px 0 0 0', fontSize:'90%', textAlign:'center',}}> We use cookies to optimize our website.{" "}<br />
    <span style={{ fontSize: "75%" }}>
   <a href="/privacy/" style={{color:'#fff',}}>Do Not Sell My Personal Information</a> | <a href="/privacy/" style={{color:'#fff',}}>Privacy Policy</a>
    </span><br /><br /></div>
    
</CookieConsent>


)

export default Consent


