'use strict';
const movielist = require('../models/dashboard');

const movie = new Movies();
const express = require('express');

const router = express.Router();

router.get('/dsahboard', (req, res) => {
    const response = movie.selectAllMovies();
    response.then((movies) => {
      if (movies) {
        return res.json({ state: true, datas: response.data });
      }
      return res.json({ state: false, error: 'wrong username or password' });
    }).catch(errorMessage => (
      res.json({
        state: false,
        error: errorMessage,
      })
    ));
  });
  
  module.exports = router;