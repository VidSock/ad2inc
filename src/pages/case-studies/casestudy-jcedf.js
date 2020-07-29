import React from 'react'
// import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
// import Footer from '../../components/Footer'
import { graphql, useStaticQuery } from 'gatsby'
// import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from '../../components/Image'
import styled from "styled-components"
import CaseMenu from '../../components/CaseMenu'
// import { FiZoomIn } from 'react-icons/fi'



import Gallery from '../../components/Gallery'


const CustomBox = styled.div`

#casestudies {
  background: #da071c ;
}



.container2 {
	// overflow-y: scroll;
  // scroll-snap-type: y mandatory;
  // height:100vh;
}

section {
	// scroll-snap-align: start;
  border-bottom:0px solid red !important;
 
  // height:100vh;
}

.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:100vh;
  display:block;
  background-size:cover;
  min-height:100vh;
}


@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}

.gatsby-image-wrapper{transform: scale(1.25);}

	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
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
              ...GatsbyImageSharpFluid
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


    {/* <div className="zoomer" style={{display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:'1', marginTop:'85px'}}>
      <h4 style={{display:'', color:'#fff', fontSize:'100%', textAlign:'center', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'fixed', bottom:'5vh', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
      </div> */}



      
     
      
  




 
      
 

  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>




	
    <div style={{marginTop:'80px'}}><CaseMenu /></div>


<section className="child" style={{position:'', height:'', overflow:''}}>

<h1 style={{textAlign:'center', borderBottom:'1px dashed', margin:'1rem 20vw 3rem 20vw'}}>Ad2 Case Study - JCEDF</h1>

<div className="" style={{display:'flex', justifyContent:'space-around', alignItems:'', alignContent:'', verticalAlign:'top', flexWrap:'wrap',  width:'', margin:'0 auto', padding:'0 5vw', borderRadius:'', overflow:'',}}>

  
<div className="half" style={{width:'', margin:'0', padding:'', order:'1', verticalAlign:'top', alignContent:'top',}}>
<h2>Client:</h2><p style={{margin:'0', padding:'', fontSize:'', fontWeight:'bold'}}> Jackson County Economic Development Foundation </p>
<p><a href="https://jcedf.org/">https://jcedf.org/</a></p>
</div>


<div className="half" style={{border:'0px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'0', width:'', padding:'0 2rem', overflow:'', order:'2', verticalAlign:'top', alignContent:'top',}}>
<h2>Objective:</h2>
<p>Ask yourself: How many of your marketing or promotional pieces have pulled this kind of response for you? Do your customers and/or prospects save your pieces as keepsakes? If you are looking to upgrade your brand, give us a call at 228.822.9890 or email us today. We will be glad to schedule a free, no-obligation, consultationgatsby</p>
</div>


</div>{/* END SPLIT */}



<div style={{maxHeight:'40vh', overflow:'hidden'}}><Gallery
        photos={data.allFile.edges}
      /></div>
      
<div className="outer">
  <div className="container">


  
 



  


<h2>Directive:</h2>
<p>We don’t always get ’em, but we always love it when we do. You know what I’m talking about: that perfect project. The client has a need with very little restriction or requirement and gives you total creative liberty to create something great. They’ve got total confidence in your ability and the budget to do something fun, something that will really stand out and make a lasting impression.</p>

<p>Well, that’s what we got to do with the Jackson County Economic Development Foundation‘s Annual Investor Dinner invitations. The Foundation wanted the invitation to have an obvious tie to Jackson County. We had done the coastline in previous invitations and wanted to show off the cultured side of Jackson County, show there is more to our home than steel and tech.</p>

<p>We thought in the opposite direction: the Walter Anderson Museum and its very distinctive art-namely, the pelican-would be a perfect representation of Jackson County. We designed an invitation around the Walter Anderson interpretation of one of Jackson County’s most popular birds and ran with it. Walter Anderson’s art lends itself to so much creativity and use. We wanted to expand on the texture that was already in the art, so we embossed the lines in the art and had it wrap the length of the invitation.</p>



<h2>Accomplishments:</h2>
<p>The customer loved the look as did several of the recipients who made comments about it. We have received calls to design invitations for other events and customers based on the outcome of this one invitation, and more importantly, it gave the Foundation the look, representation, and results that they were looking for.</p>

<p>Amber Mansholt, Communications and Marketing Projects Manager at JCEDF, writes, “I have had a 62% acceptance rate for our event, and I swear it’s all because of the invitation!  We usually get about 150 attendees; right now we are at 282!! INSANE”. The final numbers for the event were 306, more than 200% of previous dinners, which was considered a huge success by all invested.</p>

<p>The overall feel of the invitation creates the perception of the event in the mind of the recipient and the decision of whether to attend is made based on your desire to be a part of the event. Many of the recipients liked the invitation so much they have kept it even after the event.</p>

</div>

{/* <div className="outer">
<div className="container" style={{padding:'2rem 10vw', textAlign:'center', background:'', }}>
  <h3>Ad2 Spotlight</h3>
  <iframe title="Pav &amp; Broome Commercial" width="100%" height="300" src="https://www.youtube.com/embed/gqR2lzlurKI?controls=1" frameorder="0" style={{border:'4px solid red', padding:'6px', borderRadius:'12px'}}></iframe>
  </div></div> */}
  
</div>





<CaseMenu />
  </section>
{/* END Panel 1 */}




  





{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}



{/* <div className="spacer99"></div> */}
{/* <div className="spacer66"></div> */}






</div>





    

      
       


      
      
    </Layout>
    </CustomBox>  
    )
}

export default CaseStudy_3
