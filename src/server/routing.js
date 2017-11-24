// @prettier

import {
  homePage,
  helloPage
} from './controller'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE
} from '../shared/routes'

import renderApp from './render-app'

export default (app) => {

  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

    app.get(HELLO_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloPage()))
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
