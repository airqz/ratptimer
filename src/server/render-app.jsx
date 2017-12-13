// @prettier

import React from "react";
import ReactDOMServer from "react-dom/server";
import Helmet from "react-helmet";
import { SheetsRegistry } from "react-jss";
import { StaticRouter } from "react-router";
import Soap from "soap";

import App from "./../shared/app";
import {
  APP_CONTAINER_CLASS,
  JSS_SSR_CLASS,
  STATIC_PATH,
  WDS_PORT,
  isProd
} from "../shared/config";

// var soap = require('soap');
var location = "http://opendata-tr.ratp.fr/wsiv/services/Wsiv?wsdl=";

Soap.createClient(location, function(err, client) {
  console.log(client);
});

const renderApp = (location, routerContext = {}) => {
  const sheets = new SheetsRegistry();

  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={location} context={routerContext}>
      <App />
    </StaticRouter>
  );
  const head = Helmet.rewind();

  return `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        ${head.title}
        ${head.meta}
        <meta name="viewport" content="width=device-width">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script src="${
          isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`
        }/js/bundle.js"></script>
      </body>
    </html>`;
};

export default renderApp;
