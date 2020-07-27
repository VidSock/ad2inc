import React from 'react'
import Layout from '../components/Layout'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../components/Image'
import styled from "styled-components"
import { MdPlayArrow } from 'react-icons/md'

// import Contact from '../components/Contact-inc'

const CustomBox = styled.div`

.spacer33{height:33vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}


.progress{position:absolute; top:80vh; left:100px; border:1px solid yellow; z-index:1;}

.slide:nth-child(1) {
  -webkit-animation: fade 24s 0s infinite;
  z-index:2;
}

.slide:nth-child(2) {
  -webkit-animation: fade 24s 6s infinite;
  z-index:1;
}

.slide:nth-child(3) {
  -webkit-animation: fade 0s 0s infinite;
  z-index:0;
}


.slider{z-index:-1;}


//  SLIDE




`

const Test2 = () => (
  <Layout>
   <CustomBox>
   <div className="outer">

{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at erat leo. Morbi varius maximus mauris, id vulputate ipsum convallis mollis. Mauris ac elit laoreet, porta magna at, faucibus odio. Vestibulum non dignissim turpis. Nam id porttitor eros. Proin suscipit finibus dui et porttitor. Praesent mollis lectus ut massa malesuada, a scelerisque arcu vestibulum. Praesent eu convallis ex, sit amet vehicula ex. Curabitur lacinia sollicitudin purus, ac blandit ante porttitor vitae. Maecenas rutrum mi non consequat feugiat. Fusce gravida dictum lectus, id scelerisque nibh tristique id. In mauris metus, pretium vel ligula et, maximus rhoncus mi. Maecenas sed accumsan nisl. Praesent et quam vulputate, luctus nunc ut, dictum odio.

Donec non sem consectetur ligula blandit consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel arcu sed neque dapibus pellentesque. Sed eget lectus venenatis, hendrerit nisi sit amet, finibus nulla. Nulla sollicitudin erat lacus, sit amet finibus orci venenatis nec. Vestibulum ullamcorper nisl lectus, in facilisis massa bibendum ac. Nam iaculis augue vitae libero posuere, quis mollis nunc ultricies. Sed ut ex eu metus ultrices sagittis.

Cras congue, lorem vel pretium dictum, massa turpis pulvinar nunc, eu fermentum mauris urna ac ligula. Donec tristique lacus eros, eu varius libero facilisis non. Proin eu lectus sed velit maximus mattis. Etiam sit amet enim ut sapien bibendum dapibus vel eget mi. Suspendisse ultricies velit pellentesque, lacinia dolor vitae, gravida dui. Phasellus laoreet lectus nec feugiat aliquet. Aenean nec urna at lectus imperdiet sagittis. Cras pellentesque euismod magna nec dapibus. Aliquam erat volutpat. Quisque quis ex at elit dignissim rutrum.

Donec mollis, tortor ut elementum interdum, turpis eros vulputate orci, sed blandit ante mauris vel dui. Aenean in venenatis lectus. Praesent aliquam viverra odio, sed blandit elit consectetur id. Phasellus pulvinar molestie nulla, ut feugiat velit facilisis pharetra. Duis at imperdiet libero. Pellentesque sodales tellus a ipsum vestibulum tempus. Aenean suscipit, odio quis semper dictum, lorem nunc fermentum arcu, sed iaculis lorem ligula quis lectus. Integer elit ex, mattis non odio vitae, cursus malesuada leo. Suspendisse bibendum urna nec dapibus dictum. Aliquam tristique tortor pretium, feugiat elit vel, scelerisque nisi. Cras quis dignissim erat. Etiam quis neque et nisi mollis varius. Pellentesque ac mauris sit amet enim rhoncus elementum. Duis fringilla odio et risus accumsan, at sagittis ante maximus. Donec rhoncus pellentesque enim, sed sagittis velit dignissim vel. Pellentesque ac condimentum sapien.

Ut tempor vehicula nisi non auctor. Nam porta lorem id odio gravida, et maximus elit maximus. Donec quis iaculis sapien, id scelerisque lacus. Cras in nulla ut turpis hendrerit gravida et ut dui. Nam a malesuada felis, nec mattis justo. Sed quis vehicula ipsum. Nam vel augue eleifend ipsum convallis molestie.</p> */}

  <div id="slideshow" style={{position:'fixed', top:'0', height:'100vh', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'-1',}}>

      <div className="slide" style={{zIndex:'',}}>

    <h1 style={{position:'absolute', top:'100px', left:'40px', zIndex:'0'}}>Boom</h1>
        <Image className="slider" alt="Todd Stars" filename="home-banner.jpg" style={{position:'fixed', backgroundSize:'', zIndex:'-1', }} />
        
      </div>


      
      <div className="slide" style={{zIndex:'', display:'', height:''}}>
        <Image className="slider" alt="Todd Camp" filename="banner-pnb.jpg" style={{position:'fixed', backgroundSize:'cover', zIndex:'-1', }} />
      <div style={{position:'relative', top:'200px'}}>BOOM</div>
      </div>
      
      <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="banner-jcedf.jpg" style={{position:'fixed', backgroundSize:'cover', zIndex:'-1', }} /></div>
  </div>
          </div>
        













<section className="slideshow" style={{display:'block', height: '100vh;', margin:'0', padding:'0', overFlow:'hidden',}}>



    


  
<h2
  className="normal mobile-txt"
  style={{
    color: '#333',
    fontSize: '1rem',
   position: 'relative',
   textTransform:'uppercase',
   top: '20vh',
   left:'2vw',
    fontWeight:'bold',
    border:'0px solid blue',
  }}
>
   <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={100} offset={100}>Pav &amp; Broome Fine Jewelry</ScrollAnimation>
   
</h2>


<p
  className="normal mobile-txt"
  style={{
    color: '#333',
    fontSize: '.8rem',
   position: 'relative',
   width:'48vw',
   top:'22vh',
   left:'2vw',
  margin: '0 ',
    textAlign: 'left',
    border: '0px solid red',
  }}
>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={400}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.  
  </ScrollAnimation>
</p>


<h3
  className="normal spotlink mobile-txt"
  style={{
    color: '#333',
    fontSize: '1rem',
   position: 'relative',
   textTransform:'uppercase',
   textDecoration:'none',
   top:'28vh',
   left:'2vw',
    textAlign: 'left',
    border: '0px solid red',
    zIndex:'2',
  }}
>
  <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} delay={800}>
  <a href="/" style={{color:'#333', fontSize:'', textDecoration:'underline',}}>See The Work <span style={{fontSize:'140%', position:'relative', right:'5px', top:'5px', color:'#ff0000',}}><MdPlayArrow /></span></a>
  </ScrollAnimation>
</h3>




    {/* <div className="progress">1 of 4</div>
    <Image className="" alt="Banner" filename="home-banner.jpg" />
  </div>

  <div className="slideshow-item item-2">
    <div className="progress">2 of 4</div>
    <Image className="" alt="Banner" filename="banner-pnb.jpg" />
    <a href="#target-1" className="arrow arrow-prev"></a>
    <a href="#target-3" className="arrow arrow-next"></a>
  </div>

  <div className="slideshow-item item-3">
    <div className="progress">3 of 4</div>
    <Image className="" alt="Banner" filename="banner-jcedf.jpg" />
    <a href="#target-2" className="arrow arrow-prev"></a>
    <a href="#target-4" className="arrow arrow-next"></a>
  </div>

  <div className="slideshow-item item-4">
    <div className="progress">4 of 4</div>
    <Image className="" alt="Banner" filename="home-banner.jpg" />
    <a href="#target-3" className="arrow arrow-prev"></a>
    <a href="#target-1" className="arrow arrow-next"></a>
  </div> */}
</section>




<div className="spacer99"></div>











{/* CONTACT PANEL  */}
    {/* <Contact /> */}
{/* END CONTACT PANEL */}

</CustomBox>
  </Layout>
)

export default Test2





