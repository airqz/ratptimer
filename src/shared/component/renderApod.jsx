// @prettier

import React from "react";
import Request from "request";

Request(
  "https://api.nasa.gov/planetary/apod?api_key=nlLS7e7dUtu3PbfESDJoFmlsiFgYRVEO0hpxXSrk",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }

    let date = body.date;
    let explanation = body.explanation;
    let hdurl = body.hdurl;
    let media_type = body.media_type;
    let service_version = body.service_version;
    let title = body.title;
    let url = body.url;

    //console.log(body);
    //console.log(body.explanation);
  }
);



const renderApod = () => (
  <div className="">
    <hr />

    <img src="url" />
  </div>
);

export default renderApod;
