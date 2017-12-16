// @prettier

import React from "react";
import ReactDOMServer from "react-dom/server";
import Helmet from "react-helmet";
import { SheetsRegistry } from "react-jss";
import { StaticRouter } from "react-router";
//import Soap from "soap";
import Request from "request";
import xml2js from "xml2js";

import App from "./../shared/app";
import {
  APP_CONTAINER_CLASS,
  JSS_SSR_CLASS,
  STATIC_PATH,
  WDS_PORT,
  isProd
} from "../shared/config";

/*
Request('http://opendata-tr.ratp.fr/wsiv/services/Wsiv?wsdl=', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

// var soap = require('soap');
/*
var location = "http://opendata-tr.ratp.fr/wsiv/services/Wsiv?wsdl=";

Soap.createClient(location, function(err, client) {
  console.log(client);
});
*/

let xml = `<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xsd="http://wsiv.ratp.fr/xsd"
  xmlns:wsiv="http://wsiv.ratp.fr"
>
  <soapenv:Header />
  <soapenv:Body>
    <wsiv:getMissionsNext>
      <wsiv:station>
        <xsd:line>
          <xsd:id>M13</xsd:id>
        </xsd:line>
        <xsd:name>La Fourche</xsd:name>
      </wsiv:station>
      <wsiv:direction>
        <xsd:sens>*</xsd:sens>
      </wsiv:direction>
    </wsiv:getMissionsNext>
  </soapenv:Body>
</soapenv:Envelope>`;

var options = {
  url: "http://opendata-tr.ratp.fr/wsiv/services/Wsiv?wsdl=",
  method: "POST",
  body: xml,
  headers: {
    "Content-Type": "text/xml;charset=utf-8",
    //'Accept-Encoding': 'gzip,deflate',
    "Content-Length": xml.length,
    SOAPAction: "urn:getMissionsNext"
  }
};

let callback = (error, response, body) => {
  //console.log(error);
  //console.log(response.statusCode);

  if (!error && response.statusCode == 200) {
    console.log('Raw result', body);

    /*
    var parser = new xml2js.Parser({
      explicitArray: false,
      xmlns: true,
      trim: true,
      ignoreAttrs: true
    });
    parser.parseString(body, (err, result) => {
      console.log("JSON result", JSON.stringify(result));
    });
    */
  }
};
Request(options, callback);

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
