import React from 'react'
import Layout from '../components/Layout-noc'
// import Footer from '../components/Footer'
import { Link } from 'gatsby'
import Image from '../components/Image'
import GalleryMenu from '../components/GalleryMenu'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { FiCornerRightDown } from 'react-icons/fi'

// import Contact from '../components/Contact-inc'

const CustomBox = styled.div`

.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}


/*Heading1*/
h1{
	color: #fff;
	font-size: 44px;
	margin-top: 40px;
	text-align: center;
}
/*Sentence*/
.sentence{
     color: #222;
     font-size: 30px;
     text-align: left;
}
/*Wrapper*/
.wrapper{
    background-color: #f5f5f5;

    margin: 100px auto;
    padding: 40px 40px;
    position: relative;
    width: 90%;
}

/*Vertical Sliding*/
.slidingVertical{
	display: block;
	text-indent: 8px;
}
.slidingVertical span{
	animation: topToBottom 12.5s linear infinite 0s;
	-ms-animation: topToBottom 12.5s linear infinite 0s;
	-webkit-animation: topToBottom 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.slidingVertical span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.slidingVertical span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.slidingVertical span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.slidingVertical span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*topToBottom Animation*/
@-moz-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: translateY(-50px); }
	10% { opacity: 1; -moz-transform: translateY(0px); }
	25% { opacity: 1; -moz-transform: translateY(0px); }
	30% { opacity: 0; -moz-transform: translateY(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-webkit-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: translateY(-50px); }
	10% { opacity: 1; -webkit-transform: translateY(0px); }
	25% { opacity: 1; -webkit-transform: translateY(0px); }
	30% { opacity: 0; -webkit-transform: translateY(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: translateY(-50px); }
	10% { opacity: 1; -ms-transform: translateY(0px); }
	25% { opacity: 1; -ms-transform: translateY(0px); }
	30% { opacity: 0; -ms-transform: translateY(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*Horizontal Sliding*/
.slidingHorizontal{
	display: inline;
	text-indent: 8px;
}
.slidingHorizontal span{
	animation: leftToRight 12.5s linear infinite 0s;
	-ms-animation: leftToRight 12.5s linear infinite 0s;
	-webkit-animation: leftToRight 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.slidingHorizontal span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.slidingHorizontal span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.slidingHorizontal span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.slidingHorizontal span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*leftToRight Animation*/
@-moz-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: translateX(-50px); }
	10% { opacity: 1; -moz-transform: translateX(0px); }
	25% { opacity: 1; -moz-transform: translateX(0px); }
	30% { opacity: 0; -moz-transform: translateX(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-webkit-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: translateX(-50px); }
	10% { opacity: 1; -webkit-transform: translateX(0px); }
	25% { opacity: 1; -webkit-transform: translateX(0px); }
	30% { opacity: 0; -webkit-transform: translateX(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: translateX(-50px); }
	10% { opacity: 1; -ms-transform: translateX(0px); }
	25% { opacity: 1; -ms-transform: translateX(0px); }
	30% { opacity: 0; -ms-transform: translateX(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*FadeIn*/
.fadeIn{
	display: inline;
	text-indent: 8px;
}
.fadeIn span{
	animation: fadeEffect 12.5s linear infinite 0s;
	-ms-animation: fadeEffect 12.5s linear infinite 0s;
	-webkit-animation: fadeEffect 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.fadeIn span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.fadeIn span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.fadeIn span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.fadeIn span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*FadeIn Animation*/
@-moz-keyframes fadeEffect{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: translateY(0px); }
	10% { opacity: 1; -moz-transform: translateY(0px); }
	25% { opacity: 1; -moz-transform: translateY(0px); }
	30% { opacity: 0; -moz-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-webkit-keyframes fadeEffect{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: translateY(0px); }
	10% { opacity: 1; -webkit-transform: translateY(0px); }
	25% { opacity: 1; -webkit-transform: translateY(0px); }
	30% { opacity: 0; -webkit-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes fadeEffect{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: translateY(0px); }
	10% { opacity: 1; -ms-transform: translateY(0px); }
	25% { opacity: 1; -ms-transform: translateY(0px); }
	30% { opacity: 0; -ms-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*Vertical Flip*/
.verticalFlip{
	display: inline;
	text-indent: 8px;
}
.verticalFlip span{
	animation: vertical 12.5s linear infinite 0s;
	-ms-animation: vertical 12.5s linear infinite 0s;
	-webkit-animation: vertical 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.verticalFlip span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.verticalFlip span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.verticalFlip span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.verticalFlip span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*Vertical Flip Animation*/
@-moz-keyframes vertical{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: rotateX(180deg); }
	10% { opacity: 1; -moz-transform: translateY(0px); }
	25% { opacity: 1; -moz-transform: translateY(0px); }
	30% { opacity: 0; -moz-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0;}
}
@-webkit-keyframes vertical{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: rotateX(180deg); }
	10% { opacity: 1; -webkit-transform: translateY(0px); }
	25% { opacity: 1; -webkit-transform: translateY(0px); }
	30% { opacity: 0; -webkit-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes vertical{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: rotateX(180deg); }
	10% { opacity: 1; -ms-transform: translateY(0px); }
	25% { opacity: 1; -ms-transform: translateY(0px); }
	30% { opacity: 0; -ms-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*Horizontal Flip*/
.horizontalFlip{
	display: inline;
	text-indent: 8px;
}
.horizontalFlip span{
	animation: horizontal 12.5s linear infinite 0s;
	-ms-animation: horizontal 12.5s linear infinite 0s;
	-webkit-animation: horizontal 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.horizontalFlip span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.horizontalFlip span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.horizontalFlip span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.horizontalFlip span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*Horizontal Flip Animation*/
@-moz-keyframes horizontal{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: rotateY(180deg); }
	10% { opacity: 1; -moz-transform: translateX(0px); }
	25% { opacity: 1; -moz-transform: translateX(0px); }
	30% { opacity: 0; -moz-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0;}
}
@-webkit-keyframes horizontal{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: rotateY(180deg); }
	10% { opacity: 1; -webkit-transform: translateX(0px); }
	25% { opacity: 1; -webkit-transform: translateX(0px); }
	30% { opacity: 0; -webkit-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes horizontal{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: rotateY(180deg); }
	10% { opacity: 1; -ms-transform: translateX(0px); }
	25% { opacity: 1; -ms-transform: translateX(0px); }
	30% { opacity: 0; -ms-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*AntiClockWise Effect*/
.antiClock{
	display: inline;
	text-indent: 8px;
}
.antiClock span{
	animation: anti 12.5s linear infinite 0s;
	-ms-animation: anti 12.5s linear infinite 0s;
	-webkit-animation: anti 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.antiClock span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.antiClock span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.antiClock span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.antiClock span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*AntiClockWise Effect Animation*/
@-moz-keyframes anti{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: rotateX(180deg); }
	10% { opacity: 1; -moz-transform: translateY(0px); }
	25% { opacity: 1; -moz-transform: translateY(0px); }
	30% { opacity: 0; -moz-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0;}
}
@-webkit-keyframes anti{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: rotate(180deg); }
	10% { opacity: 1; -webkit-transform: translateY(0px); }
	25% { opacity: 1; -webkit-transform: translateY(0px); }
	30% { opacity: 0; -webkit-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes anti{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: rotate(180deg); }
	10% { opacity: 1; -ms-transform: translateY(0px); }
	25% { opacity: 1; -ms-transform: translateY(0px); }
	30% { opacity: 0; -ms-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*ClockWise Effect*/
.clockWise{
	display: inline;
	text-indent: 8px;
}
.clockWise span{
	animation: clock 12.5s linear infinite 0s;
	-ms-animation: clock 12.5s linear infinite 0s;
	-webkit-animation: clock 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.clockWise span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.clockWise span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.clockWise span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.clockWise span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*ClockWise Effect Animation*/
@-moz-keyframes clock{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: rotate(-180deg); }
	10% { opacity: 1; -moz-transform: translateX(0px); }
	25% { opacity: 1; -moz-transform: translateX(0px); }
	30% { opacity: 0; -moz-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0;}
}
@-webkit-keyframes clock{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: rotate(-180deg); }
	10% { opacity: 1; -webkit-transform: translateX(0px); }
	25% { opacity: 1; -webkit-transform: translateX(0px); }
	30% { opacity: 0; -webkit-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes clock{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: rotate(-180deg); }
	10% { opacity: 1; -ms-transform: translateX(0px); }
	25% { opacity: 1; -ms-transform: translateX(0px); }
	30% { opacity: 0; -ms-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*Pop Effect*/
.popEffect{
	display: inline;
	text-indent: 8px;
}
.popEffect span{
	animation: pop 12.5s linear infinite 0s;
	-ms-animation: pop 12.5s linear infinite 0s;
	-webkit-animation: pop 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.popEffect span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.popEffect span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.popEffect span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.popEffect span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*Pop Effect Animation*/
@-moz-keyframes pop{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: rotate(0deg) scale(0.10) skew(0deg) translate(0px); }
	10% { opacity: 1; -moz-transform: translateY(0px); }
	25% { opacity: 1; -moz-transform: translateY(0px); }
	30% { opacity: 0; -moz-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0;}
}
@-webkit-keyframes pop{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: rotate(0deg) scale(0.10) skew(0deg) translate(0px);}
	10% { opacity: 1; -webkit-transform: translateY(0px); }
	25% { opacity: 1; -webkit-transform: translateY(0px); }
	30% { opacity: 0; -webkit-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes pop{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: rotate(0deg) scale(0.10) skew(0deg) translate(0px); }
	10% { opacity: 1; -ms-transform: translateY(0px); }
	25% { opacity: 1; -ms-transform: translateY(0px); }
	30% { opacity: 0; -ms-transform: translateY(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*Push Effect*/
.pushEffect{
	display: inline;
	text-indent: 8px;
}
.pushEffect span{
	animation: push 12.5s linear infinite 0s;
	-ms-animation: push 12.5s linear infinite 0s;
	-webkit-animation: push 12.5s linear infinite 0s;
	color: #00abe9;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.pushEffect span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.pushEffect span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.pushEffect span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.pushEffect span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*Push Effect Animation*/
@-moz-keyframes push{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: rotate(0deg) scale(2) skew(0deg) translate(0px); }
	10% { opacity: 1; -moz-transform: translateX(0px); }
	25% { opacity: 1; -moz-transform: translateX(0px); }
	30% { opacity: 0; -moz-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0;}
}
@-webkit-keyframes push{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform:rotate(0deg) scale(2) skew(0deg) translate(0px);}
		10% { opacity: 1; -webkit-transform: translateX(0px); }
	25% { opacity: 1; -webkit-transform: translateX(0px); }
	30% { opacity: 0; -webkit-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes push{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: rotate(0deg) scale(2) skew(0deg) translate(0px); }
	10% { opacity: 1; -ms-transform: translateX(0px); }
	25% { opacity: 1; -ms-transform: translateX(0px); }
	30% { opacity: 0; -ms-transform: translateX(0px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
/*Footer*/
h3{
	color: #fff;
	font-size: 30px;
	margin-top: 20px;
	text-align: center;
}



`






const Test9 = () => (
  <Layout>
   <CustomBox>
  


   <section className="outer section section--gradient" style={{padding: '60px 2rem 0 2rem'}}>
   <body>
<header>
  <h1>Rotating words using CSS Animations</h1>
</header>
<section className="wrapper">
  
  <h2 className="sentence">Janie is a lovely girl and she is very
    <div className="slidingVertical">
      <span>Amazing.</span>
      <span>Beautiful.</span>
      <span>Cute.</span>
      <span>Delightful.</span>
      <span>Emotional.</span>
    </div>
  </h2>
  
  <h2 className="sentence">Amanda looks very
    <div className="slidingHorizontal">
      <span>Cool.</span>
      <span>Elegant.</span>
      <span>Beautiful.</span>
      <span>Different.</span>
      <span>Intelligent.</span>
    </div>
  </h2>
  
  <h2 className="sentence">Five good examples of Adjectives are
    <div className="fadeIn">
      <span>Handsome.</span>
      <span>Clean.</span>
      <span>Elegant.</span>
      <span>Magnificent.</span>
      <span>Adorable.</span>
    </div>
  </h2>
  
  <h2 className="sentence">Vertical Animation seems very
    <div className="verticalFlip">
      <span>Nice.</span>
      <span>Effective.</span>
      <span>Horrible.</span>
      <span>Magnificent.</span>
      <span>Adorable.</span>
    </div>
  </h2>
  
  <h2 className="sentence">Horizontal Animation looks very
    <div className="horizontalFlip">
      <span>Dirty.</span>
      <span>Funny.</span>
      <span>Amazing.</span>
      <span>Boring.</span>
      <span>Brilliant.</span>
    </div>
  </h2>
  
  <h2 className="sentence">Maybe this Pen is not so
    <div className="antiClock">
      <span>Amazing.</span>
      <span>Magnificent.</span>
      <span>Adorable.</span>
      <span>Clean.</span>
      <span>Elegant.</span>
    </div>
  </h2>
  
  <h2 className="sentence">5 Best Browsers are
    <div className="clockWise">
      <span>Chrome.</span>
      <span>Safari.</span>
      <span>Firefox.</span>
      <span>Opera.</span>
      <span>IE.</span>
    </div>
  </h2>
  
  <h2 className="sentence">Pop Effect looks very
    <div className="popEffect">
      <span>Handsome.</span>
      <span>Clean.</span>
      <span>Elegant.</span>
      <span>Magnificent.</span>
      <span>Adorable.</span>
    </div>
  </h2>
  
  <h2 className="sentence">Push Effect is not
    <div className="pushEffect">
      <span>Boring.</span>
      <span>Funny.</span>
      <span>Brilliant.</span>
      <span>Dirty.</span>
      <span>Amazing.</span>
    </div>
  </h2>
 
</section>


</body>

   </section>

</CustomBox>
  </Layout>
)

export default Test9





