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



const CaseStudy1 = graphql`
  query CaseStudy1 {
    allFile(filter: { relativeDirectory: { eq: "case1" } }) {
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

const CaseStudy_1 = () => {
  const data = useStaticQuery(CaseStudy1)
  return (
	  <CustomBox>
    <Layout>

  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>


<TouchUp />

	
    {/* <div style={{marginTop:'80px'}}><CaseMenu /></div> */}


    <section className="child" style={{padding:'0', height:'', position:'relative'}}>
  
    <div className="contentStart" style={{maxWidth:'', position:'absolute', zIndex:'1' }}>

     <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={200} offset={0} style={{color:''}}>
    
     <h1 style={{margin:'0', padding:'', fontSize:'100%', fontWeight:'bold'}}>Client:<br />Pav &amp; Broome Fine Jewelry </h1>
     </ScrollAnimation>

  <div className="normal mobile-txt" style={{color: '', maxWidth:'48vw', height:'100vh', margin: '1rem 0', lineHeight:'1.6rem', border: '0px solid red',}}>

  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={500} offset={100}>
  <h3>Objective:</h3>
  <p>Overcome the perception that Pav &amp; Broome Diamond Jewelers had closed or gone out of business and increase first-quarter sales by 10% with no increase in the current budget.</p>
<br /><a href="https://pavandbroome.com">https://pavandbroome.com</a>
    </ScrollAnimation>

  </div>
  </div>
  


    </section>

    
{/* <BgImage filename="case-art-pediatric.png"> </BgImage> */}
<BgImage filename="case-art-pavbroome.png"> </BgImage>


<section className="child" style={{position:'', height:'', overflow:''}}>

<Gallery photos={data.allFile.edges} />

<br /><br />
<div className="outer">



  <div className="container">
<h2>Directive:</h2>
<p>In order to accurately pinpoint the perception by Pav &amp; Broome’s customer base, Ad2 developed a direct mail survey, which included an offer as an incentive for a high rate of response. The survey was mailed out to more than 3,000 customers with a response rate of more than 3%. This gave us a great sampling of the market and provided us with tons of useful information for the marketing plan.</p>

<p>The first step was to shift the existing advertising budget to minimize costs and maximize results. We budgeted for a :60 television commercial, which would then be spliced into :30’s, :15’s and :10’s and later used for holiday and general marketing spots.</p>

<p>The TV spot was meant to tell the story of Pav &amp; Broome Diamond Jewelers and their 30-year history. It was a warm spot that families could relate to and remember why they trusted the local jewelers.</p>
</div>



<div className="container">
<h2>Accomplishments:</h2>
<p>The shift in the existing advertising budget increased the reach of their target market from 47% to 78.4% and increased first-quarter sales by 11.4%.  The television spot created just the kind of emotion we were hoping to stir with people “coming in that hadn’t been in in a while” and some even admitting the commercial “brought a tear to [their] eyes”. We were once again able to maximize their advertising dollars by using the footage shot for this commercial in other later spots.</p>
</div>





  
  <div className="outer">
<div className="container1" style={{padding:'2rem 10vw', textAlign:'center', background:'', }}>
  <h3>Ad2 Spotlight</h3>
  <iframe title="Pav &amp; Broome Commercial" width="100%" height="300" src="https://www.youtube.com/embed/gqR2lzlurKI?controls=1" frameorder="0" style={{border:'4px solid red', padding:'6px', borderRadius:'12px'}}></iframe>
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

export default CaseStudy_1
