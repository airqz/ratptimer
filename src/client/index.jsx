/*global window, document*/

import 'babel-polyfill'

/*import Immutable from 'immutable'*/
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Tether from 'tether'

import App from '../shared/app'
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../shared/config'

window.jQuery = $
window.Tether = Tether
require('bootstrap')

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent) => (
  <BrowserRouter>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </BrowserRouter>
)

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
  module.hot.accept('../shared/app', () => {
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR)
jssServerSide.parentNode.removeChild(jssServerSide)
