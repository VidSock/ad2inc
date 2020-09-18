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
const CaseStudy5 = graphql`
  query CaseStudy5 {
    allFile(filter: { relativeDirectory: { eq: "case5" } }) {
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

const CaseStudy_5 = () => {
  const data = useStaticQuery(CaseStudy5)
  return (
	  <CustomBox>
    <Layout>
  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>

<TouchUp />

    <section className="child" style={{padding:'0', height:'', position:'relative'}}>
  
    <div className="contentStart" style={{maxWidth:'', position:'absolute', zIndex:'1' }}>
     <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={200} offset={0} style={{color:''}}>
    
     <h1 style={{margin:'0', padding:'', fontSize:'100%', fontWeight:'bold'}}>Client:<br />Coast Electric Power Association</h1>
     </ScrollAnimation>
  <div className="normal mobile-txt" style={{color: '', maxWidth:'48vw', height:'100vh', margin: '1rem 0', lineHeight:'1.6rem', border: '0px solid red',}}>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={500} offset={100}>
  <h3>Objective:</h3>
  <p>Coast Electric Power Association was looking to increase attendance at their annual meeting and member engagement through voting, so they decided to do a proxy mailer in conjunction with the annual meeting invitation. Ad2 was contracted to design, print, and mail the proxy mailer while remaining in the confines of the Association’s by-laws.</p>
<br />
    </ScrollAnimation>
  </div>
  </div>
  


    </section>

 <BgImage filename="case-art-coastepa.png"> </BgImage>

<section className="child" style={{position:'', height:'', overflow:''}}>

<Gallery photos={data.allFile.edges} />

<br /><br />
<div className="outer">
  <div className="container">
  <h2>Directive:</h2>

<p>We decided to enlarge the finished size of the piece to make it stand out in the mail. We highlighted the incentives on the outside covers and kept the informational content tucked neatly away on the inside.</p>

<p> We integrated a QR code leading to the Coast Electric web site for more information on the cooperative and its achievements for the year past and goals moving forward and promoted the Facebook page to expand the mode of communication between the Association and its members.</p>





<h2>Accomplishments:</h2>
<p>“On behalf of Ron and I, we wanted to personally thank you again for such a great job with our proxy mailer this year! We really feel like the new design is one of the attributing factors to the success of this year’s mail return. Not only have we exceeded the amount that we needed for a quorum, but this is probably one of the most successful years on record. So again THANK YOU! We look forward to working with you again soon,” Melissa Bryant, Communications Specialist, Coast Electric Power Association.
</p>



</div>

  {/* <div className="outer">
<div className="container1" style={{padding:'2rem 10vw', textAlign:'center', background:'', }}>
  <h3>Ad2 Spotlight</h3>
  <iframe title="Pav &amp; Broome Commercial" width="100%" height="300" src="https://www.youtube.com/embed/gqR2lzlurKI?controls=1" frameorder="0" style={{border:'4px solid red', padding:'6px', borderRadius:'12px'}}></iframe>
  </div></div> */}

  
</div>


<CaseMenu />



  </section>
{/* END Panel 1 */}

</div>


    </Layout>
    </CustomBox>  
    )
}

export default CaseStudy_5
