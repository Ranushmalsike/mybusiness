require('dotenv').config(); // Load environment variables from .env file

const DatabaseOperations = require('./DatabaseOperations.js'); // Use the correct relative path

// Instantiate the DatabaseOperations class
const dbOps = new DatabaseOperations();

// IIFE to create the table
(async () => {
  try {
    await dbOps.createTable('users_of_website', 'id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255)');
    console.log('Table creation process completed.');
  } catch (error) {
    console.error('Error during table creation:', error);
  }
})();
