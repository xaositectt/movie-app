const express = require('express');
const Dashboard = require('../databases/dashboard');
const query = require('../databases/connect');

const dashboard = new Dashboard;
const router = express.Router();

router.get('/dashboard', (req, res) => {
  const response = dashboard.getTitles();
  response.then(() => {
    if (dashboard.length === 0) {
      res.send({
        state: 'search failed, video not in database',
      });
    }
  }).then((data) => {
    res.send(data);
  });
});