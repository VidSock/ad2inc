import React, { Component } from 'react'
import { Link } from 'gatsby'
import Image from '../components/Image'
import config from '../../config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'
// import Intro2 from '../components/Intro2'
import styled from "styled-components"

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

// .intro:before{
// 	content: "Todd Leads A Dual-Life";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// animation: poof 1s forwards;
// animation-delay: 1s;
// top:0 !important;
// }

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}




@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .contentStart{display:block !important;}
  .intro:before{font-size:150% !important}
  // .content{flex-direction:column !important;}
  // .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  // .pitch{font-size:250% !important; text-align:center;}
  // .split {display:block !important; width:100% !important; }
  // .split div{max-width:100% !important; with:100% !important; background:tranparent !important;}
  .sidebar{margin:2% 0;}
  .sidebar{max-width:100% !important; width:100% !important; background:tranparent !important;}
  .sidebar .logolink{text-align:center !important;}

}




`

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className='button is-rounded'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button is-rounded'>
        {props.text}
      </span>
    )
  }
}

export default class BlogPage extends Component {
  render () {
    const { pageContext } = this.props
    const { group, index, first, last } = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }

    return (
      <Layout>
        
        <CustomBox>
        <Helmet>
          <title>Blog | Ad2</title>
          <html className="fullhead" />
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
        

{/* <div className='' style={{padding:'0 6% 0 6%', borderRadius:'12px', textAlign:'center',}}>

<h1 className='logotype'>Blog</h1>

</div> */}
{/* <Intro2 /> */}

<section className="section intro split contentStart" style={{display:'flex', position:'relative',}}>
        
        

<div className="content" style={{margin:'0 0 1% 0', padding:'0 0', borderRadius:'12px',}}>

          <PostCard posts={group} />
          
<div className='buttons' style={{display:'flex', marginTop:'1.5rem',}}>

<div style={{marginRight:'1rem',}}><PaginationLink test={first} url={previousUrl} text='previous posts' className="grad" style={{}} /></div>

<div><PaginationLink test={last} url={nextUrl} text='more posts' /></div>
</div>

</div>




<div className="sidebar" style={{padding:'2% 0 0 2%', minWidth:'35%', maxWidth:'35%',}}>
    
    <div style={{position:'sticky', top:'30px', }}>


<div className="container content" style={{margin:'0 0 1rem 0', padding:'2% 0', borderRadius:'10px',}}>
<h3 className="logotype" style={{textAlign:'center', fontSize:'180%',}}>
Blog Sidebar Here
</h3>
</div>




    {/* <a href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <Image className="" alt="Todd Lambert Night photos" filename="twilightscapes-button.jpg" />
    <br />
    Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the Western States like you&apos;ve never seen them before.
    <h5 style={{textAlign:'center',}}>Visit Twilightscapes.com</h5></a>
    
    <br />
    <br />
 
    
    
    <a href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <Image className="" alt="Todd Lambert Night photos" filename="urban-fetish-button.jpg" />
    <br /> */}
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. See places that you wouldn&apos;t dare go into, especially at night.
    
 
    
    </div>
    </div>


</section>


            

          
</CustomBox>
      </Layout>
    )
  }
}
