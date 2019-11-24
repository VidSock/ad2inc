
import Layout from '../../components/Layout';

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import GalleryMenu from '../../components/GalleryMenu'
import { FiZoomIn } from 'react-icons/fi'



import Gallery from '../../components/Gallery'


import styled from "styled-components"
const CustomBox = styled.div`

#portfolio {
	position:relative;
background: #0c0203;
background: -moz-linear-gradient(top, #0c0203 0%, #de0004 17%, #96000c 76%, #0c0203 100%);
background: -webkit-linear-gradient(top, #0c0203 0%,#de0004 17%,#96000c 76%,#0c0203 100%);
background: linear-gradient(to bottom, #0c0203 0%,#de0004 17%,#96000c 76%,#0c0203 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0c0203', endColorstr='#0c0203',GradientType=0 );
}

.intro:before{
	content: "Web";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

.zoomer{animation: zoomer 1.5s forwards;
    animation-delay: 4.4s;}
    
@keyframes zoomer {
0% {
	display: none;
	}
	
100% {
	height:0;
    filter: blur(60px);
    opacity: 0;   	
	}
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


const gal7Query = graphql`
  query gal7Query {
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
  const data = useStaticQuery(gal7Query)
  return (
	  <CustomBox>
    <Layout>
    


      
     <div className="zoomer" style={{paddingTop:'85px', display:'flex',alignItems:'center', justifyContent:'center',}}>
      <h4 style={{display:'flex', color:'#fff', fontSize:'100%', textAlign:'center', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'fixed', bottom:'50px', zIndex:'1', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
      </div>
      <GalleryMenu />
  




 
      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} delay={700} animateOnce={true} animatePreScroll={true}>
      <div className="container" style={{ padding:'0', margin:'0',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
      </ScrollAnimation>

    

      
       <GalleryMenu />

    

      
       <GalleryMenu />

      
      
      
    </Layout>
    </CustomBox>  )
}

export default Gal1Page
