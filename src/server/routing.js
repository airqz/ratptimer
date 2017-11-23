
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

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

}
