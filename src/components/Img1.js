import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "case-study-pnb1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="div"
          className={className}
          fluid={imageData}
          backgroundColor={`transparent`}
        >
          
        
        <Link className="button2" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link>
 


          <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'', position:'absolute', zIndex:'1' }}>

      
        
        </div>

          {/* <div className="innerpanel" style={{}}>
      
      <div className="contentpanel" style={{}}>
      
      
      <strong style={{}}>Concept / Creative / Design</strong><br />
      <p style={{ }}>At Ad2, Inc., we first focus on the goals of the customer to develop a concept and campaign that will effectively deliver the desired message to the target audience. </p>
    
    <p style={{}}>We then challenge our designers with producing creative that is as innovative as it is effective, perfectly capturing the interest of the client’s market.</p>
    <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><Link className="button2" to="/portfolio/">View The Work </Link></h1>
  


    </div>
</div> */}

        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height:100vh;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
  position:fixed;
  z-index:-1;
`

export default StyledBackgroundSection