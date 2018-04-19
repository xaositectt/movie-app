'use strict';

require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({
  user: 'root',
  database: 'movie_app',
  password: 'almafa',
  host: 'localhost',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Connection established');
  }
});

function query(qString, post = null) {
  return new Promise((resolve, reject) => {
    conn.query(qString, post, (err, rows) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(rows);
      }
    });
  });
}

module.exports = query;
