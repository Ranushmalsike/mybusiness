const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DatabaseOperations = require('./process/prs.js'); // Import the class
const db = require('./db/dbcon.js'); // Import the database connection
// const { insertUser } = require('./process/prs.js'); // database operations

const app = express();

// Define the port
const port = process.env.PORT || 3000; // Use PORT environment variable or default to 3000

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

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

// Use class method for inserting user
app.post('/submit', (req, res) => {
  const { Business } = req.body;
  dbOps.insertUser(Business, (err, result) => {
    if (err) {
      return res.status(500).send('Error inserting data');
    }
    // res.send('Data inserted successfully');
    res.redirect('/adminpg?message=success');
  });
});


// Route to render A_page.html with data
app.get('/addBusiness', async (req, res) => {
  try {
    const data = await dbOps.getDataOfBusiness(); // Fetch data from the database
    res.render('./public/pages/tables.html', { data }); // Render A_page.ejs with the fetched data
  } catch (err) {
    console.error('Error in /addBusiness route:', err);
    res.status(500).send('Error fetching data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
