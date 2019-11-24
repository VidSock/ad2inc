
import Layout from '../../components/Layout';

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import GalleryMenu from '../../components/GalleryMenu'
import { FiZoomIn } from 'react-icons/fi'



import Gallery from '../../components/Gallery'


import styled from "styled-components"
const CustomBox = styled.div`

#galleries {
	position:relative;
background: rgb(126,209,234);
background: -moz-radial-gradient(center,ellipse cover,rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%);
background: -webkit-radial-gradient(center,ellipse cover,rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%);
background: radial-gradient(ellipse at center,rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%);
}




@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/

`


const gal2Query = graphql`
  query gal2Query {
    allFile(filter: { relativeDirectory: { eq: "gallery1" } }) {
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

const Gal1Page = () => {
  const data = useStaticQuery(gal2Query)
  return (
	  <CustomBox>
    <Layout>
    


      
      <div style={{paddingTop:'85px', background:'#222',}}></div>
      <GalleryMenu />
  
<ScrollAnimation animateIn="fadeOut" initiallyVisible={true} delay={0} animateOnce={true} animatePreScroll={false} style={{display:'flex',alignItems:'center', justifyContent:'center',}}><h4 style={{color:'#fff', fontSize:'100%', textAlign:'center', display:'flex', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'absolute', bottom:'50px', zIndex:'1', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
  </ScrollAnimation>
      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} delay={700} animateOnce={true} animatePreScroll={true}>
      <div className="container" style={{background:'#111', padding:'0', margin:'0',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
      </ScrollAnimation>

    

      
       <GalleryMenu />

      
      
      
    </Layout>
    </CustomBox>  )
}

export default Gal1Page
