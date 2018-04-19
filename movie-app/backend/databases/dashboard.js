const query = require('./connect');

class Dashboard {
  getTitles() {
    const queryString = 'SELECT * FROM movies;';
    return query(queryString);
  }
}

module.exports = Dashboard;