import React from 'react'
import { Helmet } from 'react-helmet'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// import Contact from '../components/Contact'
import 'typeface-pt-sans';
import "../css/index.scss";
// import ScrollAnimation from 'react-animate-on-scroll';
import config from '../../config'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      
      
     {/* <Navbar /> */}
      <main>{children}</main>
      

      <div className="fadeIn">
      {/* <Footer /> */}
      </div>
    </div>
  )
}

export default TemplateWrapper





