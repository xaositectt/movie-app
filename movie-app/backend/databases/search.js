const query = require('./connect');

class Movie {
  searchTitle(title) {
    const queryString = 'SELECT * FROM movies WHERE title=?;';
    return query(queryString, [title]);
  }
}

module.exports = Movie;