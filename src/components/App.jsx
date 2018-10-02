import React from 'react'
import { hot } from 'react-hot-loader'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

injectGlobal`
   * {
      box-sizing: border-box;
   }
   body {
      margin: 0;
   }
`

const Root = styled.div`
   background: #222;
   color: #fff;
`

class App extends React.Component {
   render() {
      return (
         <Root>Hello World</Root>
      )
   }
}

export default hot(module)(App)
