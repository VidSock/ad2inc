import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundSlider from "gatsby-image-background-slider"
import Layout from "../components/layout"
// import Image from "../components/image"



const IndexPage = () => (
  <Layout>  
     
    
    <BackgroundSlider    
    query={useStaticQuery(graphql`
        query {
            backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){      
                nodes{
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 4000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        } 
                    }
                }      
            }
        }
    `)} 
    
    initDelay={4} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={28} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["home-banner.jpg", "banner-jcedf.jpg", "banner-pnb.jpg"]} 

      // pass down standard element props
  

    /> 
    
 
  </Layout>
)

export default IndexPage