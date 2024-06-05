require('dotenv').config(); // Load environment variables from .env file

const DatabaseOperations = require('./DatabaseOperations.js'); // Use the correct relative path

// Instantiate the DatabaseOperations class
const dbOps = new DatabaseOperations();

// IIFE to create the tables
(async () => {
  try {
    await dbOps.createTable('users_of_website', 'id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255)');
    //await dbOps.createTable('products', 'id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price DECIMAL(10,2), description TEXT');
    //await dbOps.createTable('orders', 'id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, product_id INT, quantity INT');
    console.log('Table creation process completed.');
  } catch (error) {
    console.error('Error during table creation:', error);
  }
})();

