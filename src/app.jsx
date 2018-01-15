import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Navigation from './components/Navigation';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    background-color: blanchedalmond;
  }
`;
/* eslint-enable no-unused-expressions */

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
`;

const Span = styled.span`
  background-color: lemonchiffon;
  border-radius: 51px;
  color: burlywood;
  padding: 5px;
`;

const App = () => (
  <AppContainer className="App">
    <Navigation />
    <div>
      <h1>It Works!</h1>
      <p>
        This React project just works including <Span>module</Span> local styles.
      </p>
      <p>Enjoy!</p>
    </div>
  </AppContainer>
);

export default App;
