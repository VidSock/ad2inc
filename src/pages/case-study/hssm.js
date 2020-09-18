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
// import BgImageLR from '../../components/BgImage-lr'
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
const CaseStudy4 = graphql`
  query CaseStudy4 {
    allFile(filter: { relativeDirectory: { eq: "case4" } }) {
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

const CaseStudy_4 = () => {
  const data = useStaticQuery(CaseStudy4)
  return (
	  <CustomBox>
    <Layout>
  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>

<TouchUp />

    <section className="" style={{padding:'0', height:'', position:''}}>
  
  <div className="contentStart" style={{maxWidth:'', position:'absolute', zIndex:'1' }}>
     <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={200} offset={0} style={{color:''}}>
    
     <h1 style={{margin:'0', padding:'', fontSize:'100%', fontWeight:'bold'}}>Client:<br />Humane Society of South Mississippi</h1>
     </ScrollAnimation>
  <div className="normal mobile-txt" style={{color: '', maxWidth:'48vw', height:'100vh', margin: '1rem 0', lineHeight:'1.6rem', border: '0px solid red',}}>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={500} offset={100}>
  <h3>Objective:</h3>
  <p>Ad2 was contracted by the Humane Society of South Mississippi (HSSM) out of sheer
desperation. None of the previous directors had looked beyond caring for the animals to
caring for the long-term success and sustainability of the shelter and its mission. At the
time, the shelter was located next door to the sewerage treatment plant and associated
with the horrible smell. The conditions of the shelter itself weren’t much better. Public
awareness was at an all-time low and public perception was even worse.</p>
<br />
{/* <a href="https://hssm.org/">https://hssm.org/</a> */}
    </ScrollAnimation>
  </div>
  </div>
  


    </section>

 <BgImage filename="case-art-hssm.png"> </BgImage>

<section className="child" style={{position:'', height:'', overflow:''}}>

<Gallery photos={data.allFile.edges} />

<br /><br />
<div className="outer">
  <div className="container">
  <h2>Directive:</h2>
<p>The primary goal of the leadership was to reduce euthanasia of healthy animals. That
meant we needed to:</p>
<ol>
<li>Reduce intake</li>
<li>Increase adoptions</li>
<li>Increase spay/neuter surgeries</li>
</ol>
<p>We knew that before we could even address these issues, we had to increase
awareness of the shelter and its mission, thereby improving public perception and
participation.</p>

<p>Due to the extremely limited budget of HSSM, Ad2 agreed to work on a minimal monthly retainer and work diligently to secure earned and donated media for the Humane Society. We were able to do this across all media, in addition to some paid media, and began an all-out media and advertising blitz, beginning with a rebrand &amp; reintroduction
of the Humane Society.</p>

<p>With the enhanced awareness we were also able to earn grants from ASPCA and HSUS. Ad2, Inc. partnered with local municipalities and utilities companies to include statement stuffers in customers’ bills to get the message out.</p>




<h2>Accomplishments:</h2>
<p>In the first year, the save rate increased from 25% to 41% and then again to 69% and finally to 75% the following year. The bi-annual Rabies &amp; Microchip Clinics had
increased from approximately 100 animals/clinic to over 800 animals served at two different locations. The next year, this number nearly doubled again (1,500 animals
served) with lines at the clinic every day of the 5-day clinic. The executives of Ad2 volunteered at this clinic and were some of the first to respond after Hurricane Katrina.
</p>

<p>After years of success, Ad2 was tasked with a new objective: develop a capital campaign to raise $4 million for a new facility. We were proud to announce that on the
deadline the Humane Society had raised the funds needed to build out and move into the new shelter in 2006.</p>


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

export default CaseStudy_4
