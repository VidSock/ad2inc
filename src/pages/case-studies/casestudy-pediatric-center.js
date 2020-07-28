import React from 'react'

import Layout from '../../components/Layout-noc'
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

// .intro:before{
// 	content: "Ad2 Portfolio";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px  #000 ;
// }

// .intro:after{
//   content: "logo";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// }

.container2 {
	overflow-y: scroll;
  // scroll-snap-type: y mandatory;
  // height:100vh;
}

section {
	scroll-snap-align: start;
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

const CaseStudy_2 = () => {
  const data = useStaticQuery(CaseStudy2)
  return (
	  <CustomBox>
    <Layout>


    {/* <div className="zoomer" style={{display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:'1', marginTop:'85px'}}>
      <h4 style={{display:'', color:'#fff', fontSize:'100%', textAlign:'center', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'fixed', bottom:'5vh', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
      </div> */}



      
     
      
  




 
      
 

  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>




	
    <div style={{marginTop:'80px'}}><CaseMenu /></div>


<section className="child" style={{position:'', height:'100vh', overflow:'hiden'}}>

<h1 style={{textAlign:'center', borderBottom:'1px dashed', margin:'1rem 20vw 3rem 20vw'}}>Ad2 Case Study - The Pediatric Center</h1>

<div className="" style={{display:'flex', justifyContent:'space-around', alignItems:'', alignContent:'', verticalAlign:'top', flexWrap:'wrap',  width:'', margin:'0 auto', padding:'0 5vw', borderRadius:'', overflow:'',}}>

  
<div className="half" style={{alignContent:'top', width:'', margin:'0', padding:'', order:'1', verticalAlign:'top', alignContent:'top',}}>
<h2>Client:</h2><p style={{margin:'0', padding:'', fontSize:'', fontWeight:'bold'}}>The Pediatric Center at Garden Park Medical Center </p>
<p><a href="https://gardenparkdoctors.com">https://gardenparkdoctors.com</a></p>
</div>


<div className="half" style={{border:'0px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'0', width:'', padding:'0 2rem', overflow:'', order:'2', verticalAlign:'top', alignContent:'top',}}>
<h2>Objective:</h2>
<p>Several pediatricians staffed at The Pediatric Center at Garden Park Medical Center left the Center to open their own clinics, taking many of their patients with them. Ad2 was hired to introduce the new pediatricians and replenish the customer base.</p>
</div>


</div>{/* END SPLIT */}



<div style={{maxHeight:'30vh', overflow:'hidden'}}><Gallery
        photos={data.allFile.edges}
      /></div>
      
<div className="outer">
  <div className="container">


  
 



  
{/* <h2>Objective:</h2>
<p>Several pediatricians staffed at The Pediatric Center at Garden Park Medical Center left the Center to open their own clinics, taking many of their patients with them. Ad2 was hired to introduce the new pediatricians and replenish the customer base.</p> */}

<h2>Directive:</h2>
<p>Ad2 produced a :30 television spot to engage and educate the customer on The Pediatric Center and its many amenities and convenient location.</p>

<p>Ad2 designed a full-color brochure to complement the television and introduce the pediatricians and The Pediatric Center at Garden Park to the surrounding community. The brochures were available at the Medical Center and mailed out to expectant mothers and prospective customers.</p>

<p>Ad2 also designed newspaper and magazine ads introducing the pediatricians and The Pediatric Center to the community through the local newspaper and Gulf Coast Woman magazine. Other components of the campaign included full-color advertising in the Yellow Pages.</p>

<h2>Accomplishments:</h2>
<p>After only one week of the campaign launch, The Pediatric Center began receiving new appointments, and the new pediatrician was booked for a month solid prior to her employment.</p>

</div>


<div className="outer">
<div className="container" style={{padding:'2rem 10vw', textAlign:'center', }}>
  <h3>Ad2 Spotlight</h3>
  <iframe width="100%" height="300" src="https://www.youtube.com/embed/xw8y72VH_LA?controls=0" frameorder="0" style={{border:'4px solid red', padding:'6px', borderRadius:'12px'}}></iframe>
  </div>
  
  </div>
  
</div>





{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={0} offset={0} style={{zIndex:'-5', position:'', top:'0', backgroundColor:'light pink'}}>    

<Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg" />
</ScrollAnimation> */}
  </section>
{/* END Panel 1 */}




  {/* <section className="child" style={{position:'', height:'100vh'}}>
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-4', position:'', top:'0'}}>

</ScrollAnimation>
</section> */}
{/* END Panel 2 */}



  {/* <section className="child" style={{position:'', height:'100vh'}}>
 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-3', position:'', top:'0'}}>

</ScrollAnimation>
</section> */}
{/* END Panel 3 */}





{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}



{/* <div className="spacer99"></div>
<div className="spacer33 mobileshow"></div> */}





{/* <Footer /> */}

</div>




      
       

      
<CaseMenu />
      
    </Layout>
    </CustomBox>  
    )
}

export default CaseStudy_2
