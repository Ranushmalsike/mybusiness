const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DatabaseOperations = require('./process/prs'); // Import the class

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to /home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Route for /home
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const dbOps = new DatabaseOperations();
// Route for /login
app.get('/login', (req, res) => {
  const { username, password } = req.body;
  dbOps.loginUser(username, password, res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
