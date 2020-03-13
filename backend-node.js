const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('dist/frontend-angular'));

app.get('/', (req,res) => {
  var options = {
    root: path.join(__dirname, 'dist/frontend-angular')
  }
  return res.sendFile('index.html', options);
});



app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
