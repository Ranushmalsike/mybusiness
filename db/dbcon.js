const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || '172.24.0.3', // Update this with the actual IP address
  user: 'root', // replace with your MySQL user
  password: 'root', // replace with your MySQL password
  database: 'mybusiness', // replace with your MySQL database
  port: '3306'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the database');
});

module.exports = db;
