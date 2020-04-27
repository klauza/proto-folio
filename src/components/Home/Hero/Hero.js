import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Wrapper } from './HeroCSS';
import { Web } from '../../../Icons';


import { elementDir } from '../../RouteDirections';

const Hero = ({ animationDirection }) => {


  const generalAnimation = config.stiff;

  return (
    <Wrapper>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Email: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
        <Spring
          config={generalAnimation}
          delay={250}
          from={{ transform: elementDir(animationDirection), opacity: 0  }}
          to={{ transform: "translate(0px, 0px)", opacity: 1}}
        >
          {props => 
            <div className="hero__contaier" style={props}>

              <div className="hero__contaier--text">
                <h1>MAIN TITLE</h1>
                <p>Subtext Ut mauris metus, dignissim a nisi eu, egestas sollicitudin metus.</p>
                <p>2nd laneMauris eu malesuada felis.</p>
              </div>

              <div className="hero__contaier--image">
                <div>
                  <Web />
                </div>
              </div>

            </div>
          }
        </Spring>

    </Wrapper>
  )
}

export default React.memo(Hero)
