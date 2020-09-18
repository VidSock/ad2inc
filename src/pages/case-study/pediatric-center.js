import React from 'react'
// import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
// import Footer from '../../components/Footer'
import { graphql, useStaticQuery } from 'gatsby'
// import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
// import Image from '../../components/Image'
import styled from "styled-components"
import CaseMenu from '../../components/CaseMenu'
// import { FiCornerRightDown } from 'react-icons/fi'
import BgImage from '../../components/BgImage-lr'
import TouchUp from '../../components/TouchUp'

import Gallery from '../../components/Gallery'


const CustomBox = styled.div`

#casestudies {
  background: #da071c ;
}
@media (max-width: 48rem) {
  div.mobile-txt{max-width:90% !important;}
    }
`
const CaseStudy2 = graphql`
  query CaseStudy2 {
    allFile(filter: { relativeDirectory: { eq: "case2" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid_withWebp
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const CaseStudy_2 = () => {
  const data = useStaticQuery(CaseStudy2)
  return (
	  <CustomBox>
    <Layout>
  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>

<TouchUp />

    <section className="child" style={{padding:'0', height:'', position:'relative'}}>
  
    <div className="contentStart" style={{maxWidth:'', position:'absolute', zIndex:'1' }}>
     <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={200} offset={0} style={{color:''}}>
    
     <h1 style={{margin:'0', padding:'', fontSize:'100%', fontWeight:'bold'}}>Client:<br />The Pediatric Center at Garden Park Medical Center </h1>
     </ScrollAnimation>
  <div className="normal mobile-txt" style={{color: '', maxWidth:'48vw', height:'100vh', margin: '1rem 0', lineHeight:'1.6rem', border: '0px solid red',}}>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={500} offset={100}>
  <h3>Objective:</h3>
  <p>Several pediatricians staffed at The Pediatric Center at Garden Park Medical Center left the Center to open their own clinics, taking many of their patients with them. Ad2 was hired to introduce the new pediatricians and replenish the customer base.</p>
<br />
    </ScrollAnimation>
  </div>
  </div>
  


    </section>

 <BgImage filename="case-art-pediatric.png"> </BgImage>

<section className="child" style={{position:'', height:'', overflow:''}}>

<Gallery photos={data.allFile.edges} />

<br /><br />
<div className="outer">
  <div className="container">
  <h2>Directive:</h2>
  <p>Ad2 produced a :30 television spot to engage and educate the customer on The Pediatric Center and its many amenities and convenient location.</p>

<p>Ad2 designed a full-color brochure to complement the television and introduce the pediatricians and The Pediatric Center at Garden Park to the surrounding community. The brochures were available at the Medical Center and mailed out to expectant mothers and prospective customers.</p>

<p>Ad2 also designed newspaper and magazine ads introducing the pediatricians and The Pediatric Center to the community through the local newspaper and Gulf Coast Woman magazine. Other components of the campaign included full-color advertising in the Yellow Pages.</p>

<h2>Accomplishments:</h2>
<p>After only one week of the campaign launch, The Pediatric Center began receiving new appointments, and the new pediatrician was booked for a month solid prior to her employment.</p>
</div>

<div className="outer">
<div className="container" style={{padding:'2rem 10vw', textAlign:'center', background:'', }}>
  <h3>Ad2 Spotlight</h3>
  <iframe title="Pediatric Center Video" width="100%" height="300" src="https://www.youtube.com/embed/xw8y72VH_LA?controls=1" frameorder="0" style={{border:'4px solid red', padding:'6px', borderRadius:'12px'}}></iframe>
  </div></div>

  
</div>


<CaseMenu />



  </section>
{/* END Panel 1 */}

</div>


    </Layout>
    </CustomBox>  
    )
}

export default CaseStudy_2
