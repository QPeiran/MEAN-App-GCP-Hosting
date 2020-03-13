const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use('/', express.static('dist/frontend-angular'));

app.get('/', (req,res) => {
  var options = {
    root: path.join(__dirname, 'dist/frontend-angular')
  }
  return res.status(200).sendFile('index.html', options);
});

app.get('/text', (req,res) => {
  res.status(200).send('hello world');
});

app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
