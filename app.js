const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DatabaseOperations = require('./process/prs'); // Import the class
const db = require('./db/dbcon.js'); // Import the database connection

const app = express();

// Define the port
const port = process.env.PORT || 3000; // Use PORT environment variable or default to 3000

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for /home
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for createtable page
app.get('/tblcreate', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tbCreate/createTabe.js'));
});

const dbOps = new DatabaseOperations();
// Route for /login
app.get('/adminpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'adminpg.html'));
  // const { username, password } = req.body;
  // dbOps.loginUser(username, password, res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
