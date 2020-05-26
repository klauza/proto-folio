import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { elementDir } from '../RouteDirections';
import MetaTags from '../../meta-tags';

// redux
import { connect } from 'react-redux';
import { update_Subpage_Id, update_subpage_scroll } from '../../actions/routesActions';


import { AbsoluteWrapper } from '../reusable';
import styled from 'styled-components';

import TheSlider from './TheSlider';

const generalAnimation = config.stiff;

const Wrapper = styled.div`
  min-height: 100vh;
  color: #fff;
  background: #d4d4d4;

`;

const Header = styled.div`
  height: 500px;
  background: black;
  position: relative;

  .heading-h1{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  h1{
    font-family: Verdana;
    font-size: 10em;
    transform: translate(-50%, -50%);
  }
`;


const Tertio = ({ general: {scroll, routes, animationDirection} }) => {
  // meta-tags
  const metaData = {
    title: 'Web Development services - improve your business',
    description: "If you seek for tools to upgrade your business, this is the right place. Have a look what I offer and consider our partnership.",
    keywords: "web development, website, webpage, service, business, google, google maps",
    robots: "home, index",
    canonicalUrl: window.location.origin
  };

  React.useEffect(()=>{
    
    
  }, [])

  return (
    <>
    <MetaTags metaData={metaData} />
    <AbsoluteWrapper>
      <Wrapper>


      <Header>
        <Spring
          config={generalAnimation}
          delay={250}
          from={{ transform: elementDir(animationDirection), opacity: 0  }}
          to={{ transform: "translate(0px, 0px)", opacity: 1}}
        >
          {props => 
            <div className="heading-h1" style={props}>
              <h1>III</h1>
            </div>
          }
        </Spring>
      </Header>

        <TheSlider/>
      </Wrapper>
    </AbsoluteWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  general: state.general
})
export default connect(mapStateToProps, {update_subpage_scroll, update_Subpage_Id})(Tertio)