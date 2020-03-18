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

////////////////////////////CloudSQL for MySQL part//////////////////////////
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',  /// <== change to CloudSQL for MySQL expose port
  user: 'Peiran',  /// <== change
  password: '',
  database: 'scanning-database'
});
connection.connect();
var event = {  //<== a dummy event for test
  Barcode: '112A2$$$$$$$$0013010601',
  Production_Batch: 1,
  Recipe_and_P: "A2",
  Timestamp: "6:29:24 AM",
  Date: "3/12/2020",
  Seq_Code: "0001 of 0106",
  Week: 12,
  Team_Leader: "iXUsr_Siti Rahmah Siregar 6092;",
  Replenisher: "Dummy;",
  Pickers: "Dummy;Dummy;Dummy;",
  Notes: "",
  Missing_Products:""
};

var query = connection.query('insert into scanning-database ?', event, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});
/////////////////////////////////////////end here///////
