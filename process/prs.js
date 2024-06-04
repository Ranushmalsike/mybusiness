const db = require('../db/dbcon.js'); // Adjust the path as necessary to your db.js

class DatabaseOperations {
    constructor() {}
  
    async loginUser(username, password, res) {
      try {
        const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
        const [rows] = await db.execute(query, [username, password]);
  
        if (rows.length > 0) {
          // Login successful
          res.redirect('/admin-panel.html'); // Redirect to admin panel
        } else {
          // Login failed
          res.status(401).send('Invalid username or password'); // Send error status and message
        }
      } catch (err) {
        res.status(500).send('Database error'); // Send database error status and message
      }
    }
  
    // Add more methods for other database operations
  }
  
  module.exports = DatabaseOperations;
