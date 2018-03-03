'use strict';

class Users {
  selectAllMovies() {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM movies`;
      const selectAll = query(queryString);
      selectAll.then((movies) => {
        if (movies.length > 0) {
          resolve(movies);
        } else {
          resolve(false);
        }
      }).catch((errorMessage) => {
        reject(errorMessage);
      });
    });
  }
}