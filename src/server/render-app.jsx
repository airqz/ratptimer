
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import { StaticRouter } from 'react-router'

import App from './../shared/app'
import { APP_CONTAINER_CLASS, JSS_SSR_CLASS, STATIC_PATH, WDS_PORT, isProd } from '../shared/config'

const renderApp = (location) => {

  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>)

  return (
    `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        ${head.title}
        ${head.meta}
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}

export default renderApp
