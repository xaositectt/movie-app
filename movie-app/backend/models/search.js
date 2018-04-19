const express = require('express');
const Movie = require('../databases/search');

const movie = new Movie();
const router = express.Router();

router.get('/searchMovies/:title', (req, res) => {
  const movieTitle = req.params.title;
  const response = movie.searchTitle(movieTitle);
  response.then(() => {
    if (movie.length === 0) {
      res.send({
        state: 'search failed, video not in database',
      });
    }
  }).then((data) => {
    res.send(data);
  });
});
