const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || '172.18.0.2', // Update this with the actual IP address
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


/**
 * sudo docker inspect mybusiness-db-1 | grep IPAddress

[sudo] password for rrm: 
            "SecondaryIPAddresses": null,
            "IPAddress": "",
                    "IPAddress": "172.24.0.2",
 */