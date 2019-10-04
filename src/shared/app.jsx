// @prettier

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import HelloPage from './component/page/hello'
import HomePage from './component/page/home'
import Nav from './component/nav'
import Footer from './component/footer'
import { APP_NAME } from './config'
import RenderApod from './component/renderApod'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE
} from './routes'

const App = () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <RenderApod />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
    </Switch>
    <Footer />
  </div>
)

export default App
