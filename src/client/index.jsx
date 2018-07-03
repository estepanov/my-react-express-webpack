import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import store from './store'
import Routes from './routes'

// Global Styling
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
  }
  #app-root {
    height: 100%;
  }
`

// render inside `app-root` element
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('app-root'))
