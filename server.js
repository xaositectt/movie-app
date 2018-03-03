const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dashboard = require('');


const app = express();
const port = PORT || 8080;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('build'));

app.use('/assets/', express.static('assets'));

app.use('/dashboard', dashboard);
app.use('/movieinfo', movieinfo);
app.use('/addmovie', addmovie);
app.use('/deletemovie', deletemovie);
app.use('/search', search);
app.use('/random', random);
app.use('/categories', categories);
app.use('/categorylist', categorylist);
app.use('/play', play);


app.get([
    '/',
  ], (req, res) => {
    res.sendFile(`${__dirname}html_file/html/index.html`);
  });
  
  app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
  });
  
  module.exports = app;