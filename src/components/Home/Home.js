import React, {useRef} from 'react';
import { AbsoluteWrapper } from '../reusable';
import Swipe from 'react-easy-swipe';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
import ModalForm from '../ModalForm';
import './circularMenu.scss';
import { isMobile } from 'react-device-detect';

const ExternalWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  color: #fff;

  .body-top{
    /* height: 85vh; */
    width: 100%;
    opacity: 1;
    /* position: absolute; */
    background: grey;
    /* transition: all 500ms ease; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 500px;
    align-content: center;
    align-items: center;

    /* pointer-events: none; */
    &__developer{
      /* transition: opacity 1000ms ease; */
    }
    &__SVG{
      /* transition: opacity 1000ms ease; */

    }
  }
`;

const AboutMe = styled.div`
  color: black;
  background: lightcyan;
  display: flex; flex-direction: column;
  height: 100vh;
  .block-1{
    border: 1px solid #fff;
    background: orange;
    width: auto;
    height: 50px;
  }
  .block-2{
    border: 1px solid #fff;
    background: red;
    width: auto;
    height: 50px;
  }

`;

const Home = () => {

  const [open, setOpen] = React.useState(true);
  const [secondOpen, setSecondOpen] = React.useState(false);

  // Modal form
  const [modalDelay, setModalDelay] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  // scrolling
  const [index, setIndex] = React.useState(0);
  const [blockSwipe, setBlockSwipe] = React.useState(false);

  const props = useSpring({ 
    height: open ? "100vh" : "0"
    // config: { duration: 250 } 
  });

  const propsTwo = useSpring({
    transform: secondOpen ? "translateY(50px)" : "translateY(0px)",
    opacity: secondOpen ? "1" : "0"
  })

  const propsOpacity = useSpring({ opacity: open ? "1" : "0" });
  


  const toggleOpen = () => {
    setOpen(!open);

    setTimeout(()=>{
      setSecondOpen(!secondOpen);
    }, 500)
  }

  const openModalForm = () => {
    // setModalDelay(true);
    setModal(!modal);
  }

  // PC SWIPE/mouse-SCROLL
  const handleScroll = (e) => {
    let direction;

    // detect if firefox
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
      direction = -e.deltaY;
    } else{
      direction = e.nativeEvent.wheelDelta;
    }
   
    if(!blockSwipe){
      // next
      if(direction < 0 && open){
        toggleOpen();
        blockFromSwipe(true); 
      }
     // prev
      if(direction > 0 && !open){
        toggleOpen();
        blockFromSwipe(true); 
      }
    } else{
      return;
    }
  }

  // MOBILE SWIPE
  const onSwipeMove = (position, event) => {
    if(!blockSwipe){
      // next
      if(position.y < -75 && open){
        toggleOpen();
        blockFromSwipe(true); 
      }
     // prev
      if(position.y > 75 && !open){
        toggleOpen();
        blockFromSwipe(true); 
      }
    } else{
      return;
    }
  }

  // BLOCK FROM SCROLL
  const blockFromSwipe = () => {
    // block
    setBlockSwipe(true);

    // remove block after 1s
    setTimeout(()=>{
      setBlockSwipe(false);
    }, 1000)
  }

  const fireCircleMenu = () => {
    document.getElementById('circularMenu').classList.toggle('active')
  }
  return (
    <AbsoluteWrapper>

      <ModalForm modalOpen={modal}/>
  
      
      <Swipe onSwipeMove={onSwipeMove}>
        <ExternalWrapper onWheel={(e)=>handleScroll(e)}>

          <div id="circularMenu" className={`circular-menu ${isMobile ? null : 'active'}`}>

            <a className="floating-btn" onClick={fireCircleMenu}>
              <i className="fa fa-plus">X</i>
            </a>

            <menu className="items-wrapper">
              <a href="#" className="menu-item fa fa-facebook">A</a>
              <a href="#" className="menu-item fa fa-twitter">B</a>
              <a href="#" className="menu-item fa fa-google-plus">C</a>
              <a href="#" className="menu-item fa fa-linkedin">D</a>
            </menu>

          </div>

          <Wrapper>
          

            <animated.div className="body-top" style={props}>
              <animated.div className="body-top__developer" style={propsOpacity}>
                  <p>KLAUZA</p>
                  <p>Portfolio</p>
                  <p>Web Developer</p>
              </animated.div>
              <animated.div className="body-top__SVG" style={propsOpacity}>
                SVG
                <span>15vh</span> <button onClick={toggleOpen}>Squash</button>
             
              </animated.div>
            </animated.div>

            

          </Wrapper>

          <Wrapper>

              <AboutMe>
                <animated.div style={propsTwo} className="block-1">I am ready for new challenges</animated.div>
                <animated.div style={propsTwo} className="block-2">My motivation and current goals</animated.div>
                <animated.button style={propsTwo} onClick={openModalForm}>Ask me anything</animated.button>
                <h1>Technology</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita? Ut id unde dicta, inventore voluptatibus dolor ea, suscipit voluptate rem ab aut molestias molestiae.</p>
                <h1>Motivation</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero beatae sed similique, possimus omnis earum necessitatibus voluptatibus eum quas!</p>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae error voluptatum laudantium officiis possimus numquam dolorem esse? Nobis, libero?</p>
              </AboutMe>

          </Wrapper>

        </ExternalWrapper>
      </Swipe>
    </AbsoluteWrapper>
  )
}

export default Home
