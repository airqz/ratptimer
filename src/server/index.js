// @prettier

import compression from "compression";
import express from "express";
import { Server } from "http";
import favicon from "serve-favicon";

import routing from "./routing";
import { WEB_PORT, STATIC_PATH, isProd } from "../shared/config";

const app = express();
const http = Server(app);
//console.log(app)

app.use(compression());
app.use(favicon("public/img/favicon.ico"));
app.use(STATIC_PATH, express.static("dist"));
app.use(STATIC_PATH, express.static("public"));

routing(app);

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server running on port ${String(WEB_PORT)} ${
      isProd
        ? "(production)"
        : '(development).\nKeep "yarn dev:wds" running in an other terminal'
    }.`
  );
});
