'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const fetch = require("node-fetch");

app.use('/', express.static('dist/frontend-angular')); ///middle-ware

app.get('/', (req,res) => {
  let options = {
    root: path.join(__dirname, 'dist/frontend-angular')
  }
  return res.status(200).sendFile('index.html', options);
});

app.get('/text', async (req,res) => {

  const api_key = 'dc6zaTOxFJmzC';
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=cat`)
                               .then(res => res.json())
                              //  .then(function (json) {
                              //   console.log(json);
                              // })
  console.log("Response is : " + response);
  res.status(200).send(response);
  //const searchString = `q=${req.query.q}`;
  //console.log(searchString.toString());
});

app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});

module.exports = app;
