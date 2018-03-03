const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const register = require('./routes/register');
const login = require('./routes/login');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('build'));

app.use('/assets/', express.static('assets'));

app.use('/register', register);
app.use('/login', login);

app.get([
    '/',
  ], (req, res) => {
    res.sendFile(`${__dirname}/src/html/index.html`);
  });
  
  app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
  });
  
  module.exports = app;