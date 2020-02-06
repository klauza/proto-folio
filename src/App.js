import React, { useContext } from 'react';
import history from './history';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import Swipe from 'react-easy-swipe';

// pages
import Routes from './Routes';
// nav
import Navbar from './components/Navigation/Navbar';
// footer
import Footer from './components/Footer/Footer';


function App() {
  const { location } = useContext(__RouterContext);

  const [loc1, setLoc1] = React.useState(location.state);
  const [loc2, setLoc2] = React.useState(loc1);

  const [swipePrevent, setSwipePrevent] = React.useState(false);

  const updateState = function(){
    setLoc1(location.state);
    setLoc2(loc1);
  }


  React.useMemo(()=>{
    updateState();
  }, [location])

  
  const onSwipeMove = (position, event) => {
    // console.log(position.x);
    if(!swipePrevent){

      if(position.x < -75){

        if(loc1 === 0){
          blockFromSwipe();
          history.push({
            pathname: '/page-one',
            state: 1
          })
        }
  
        if(loc1 === 1){
          blockFromSwipe();
          history.push({
            pathname: '/page-two',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/page-three',
            state: 3
          })
        }
        
  
        
        
      } else 
      if(position.x > 0){

        if(loc1 === 3){
          blockFromSwipe();
          history.push({
            pathname: '/page-two',
            state: 2
          })
        }

        if(loc1 === 2){
          blockFromSwipe();
          history.push({
            pathname: '/page-one',
            state: 1
          })
        }
        if(loc1 === 1){
          blockFromSwipe();
          history.push({
            pathname: '/',
            state: 0
          })
        }
      }

    }
  }
  
  // BLOCK FROM SWIPE
  const blockFromSwipe = () => {
    // block
    setSwipePrevent(true);

    // remove block after 750ms
    setTimeout(()=>{
      setSwipePrevent(false);
    }, 750)
  }


  // console.log('loc1: ', loc1, 'loc2: ', loc2);


  return (
    <React.Fragment>
   
      <Navbar />

      <Swipe onSwipeMove={onSwipeMove}>
        <Routes loc1={loc1} loc2={loc2} location={location} />
      </Swipe>
      
      <Footer />

    </React.Fragment>
  );
}

export default App;
