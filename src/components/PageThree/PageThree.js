import React from 'react'

import { AbsoluteWrapper } from '../reusable';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  color: #fff;
  background: #d4d4d4;

  h1{
    text-align: center;
    padding-top: 100px;
  }

`;
const PageThree = () => {


  React.useEffect(()=>{
    
    
  }, [])

  return (
    <AbsoluteWrapper>
      <Wrapper>
        <h1>Page three</h1>
      <div>

      </div>
      </Wrapper>
    </AbsoluteWrapper>
  )
}

export default PageThree