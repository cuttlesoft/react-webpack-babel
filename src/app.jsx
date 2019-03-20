import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { Box, Heading, Text } from 'rebass'

import Navigation from './components/Navigation'
import colors from './colors'
import theme from './theme'

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
    margin: 0;
  }
`
/* eslint-enable no-unused-expressions */

const AppContainer = styled.div`
  background-color: ${theme.background.lighten(0.8)};
  border: solid 4px ${theme.background};
  width: 80vw;
  margin: 10px auto;
  padding: 10px;
}
`

const Span = styled.span`
  background-color: ${theme.primary};
  border-radius: 51px;
  color: ${theme.primaryText};
  padding: 5px;
`

const App = () => (
  <ThemeProvider theme={colors}>
    <AppContainer>
      <Navigation />

      <Box>
        <Heading>It Works!</Heading>

        <Text>
          This React project just works including <Span>module</Span> local
          styles.
        </Text>

        <Text>Enjoy!</Text>
      </Box>
    </AppContainer>
  </ThemeProvider>
)

export default App
