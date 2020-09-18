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
const CaseStudy3 = graphql`
  query CaseStudy3 {
    allFile(filter: { relativeDirectory: { eq: "case3" } }) {
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

const CaseStudy_3 = () => {
  const data = useStaticQuery(CaseStudy3)
  return (
	  <CustomBox>
    <Layout>
  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>

<TouchUp />

    <section className="child" style={{padding:'0', height:'', position:'relative'}}>
  
    <div className="contentStart" style={{maxWidth:'', position:'absolute', zIndex:'1' }}>
     <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={200} offset={0} style={{color:''}}>
    
     <h1 style={{margin:'0', padding:'', fontSize:'100%', fontWeight:'bold'}}>Client:<br />Jackson County Economic Development Foundation </h1>
     </ScrollAnimation>
  <div className="normal mobile-txt" style={{color: '', maxWidth:'48vw', height:'100vh', margin: '1rem 0', lineHeight:'1.6rem', border: '0px solid red',}}>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={500} offset={100}>
  <h3>Objective:</h3>
  <p>Ask yourself: How many of your marketing or promotional pieces have pulled this kind of response for you? Do your customers and/or prospects save your pieces as keepsakes? </p>
<br />
    </ScrollAnimation>
  </div>
  </div>
  


    </section>

 <BgImage filename="case-art-jcedf.png"> </BgImage>

<section className="child" style={{position:'', height:'', overflow:''}}>

<Gallery photos={data.allFile.edges} />

<br /><br />
<div className="outer">
  <div className="container">
<h2>Directive:</h2>
<p>We don’t always get ’em, but we always love it when we do. You know what I’m talking about: that perfect project. The client has a need with very little restriction or requirement and gives you total creative liberty to create something great. They’ve got total confidence in your ability and the budget to do something fun, something that will really stand out and make a lasting impression.</p>

<p>Well, that’s what we got to do with the Jackson County Economic Development Foundation‘s Annual Investor Dinner invitations. The Foundation wanted the invitation to have an obvious tie to Jackson County. We had done the coastline in previous invitations and wanted to show off the cultured side of Jackson County, show there is more to our home than steel and tech.</p>

<p>We thought in the opposite direction: the Walter Anderson Museum and its very distinctive art-namely, the pelican-would be a perfect representation of Jackson County. We designed an invitation around the Walter Anderson interpretation of one of Jackson County’s most popular birds and ran with it. Walter Anderson’s art lends itself to so much creativity and use. We wanted to expand on the texture that was already in the art, so we embossed the lines in the art and had it wrap the length of the invitation.</p>
</div>

<div className="container">
<h2>Accomplishments:</h2>
<p>The customer loved the look as did several of the recipients who made comments about it. We have received calls to design invitations for other events and customers based on the outcome of this one invitation, and more importantly, it gave the Foundation the look, representation, and results that they were looking for.</p>

<p>Amber Mansholt, Communications and Marketing Projects Manager at JCEDF, writes, “I have had a 62% acceptance rate for our event, and I swear it’s all because of the invitation!  We usually get about 150 attendees; right now we are at 282!! INSANE”. The final numbers for the event were 306, more than 200% of previous dinners, which was considered a huge success by all invested.</p>

<p>The overall feel of the invitation creates the perception of the event in the mind of the recipient and the decision of whether to attend is made based on your desire to be a part of the event. Many of the recipients liked the invitation so much they have kept it even after the event.</p>
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

export default CaseStudy_3
