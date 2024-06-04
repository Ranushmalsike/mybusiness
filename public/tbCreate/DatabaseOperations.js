const db = require('../../db/dbcon.js'); // Adjust the relative path to dbcon.js

class DatabaseOperations {
  constructor() {}

  async createTable(tableName, columns) {
    return new Promise((resolve, reject) => {
      const query = `CREATE TABLE IF NOT EXISTS \`${tableName}\` (${columns})`;
      db.query(query, (err, results, fields) => {
        if (err) {
          console.error(`Error creating table ${tableName}:`, err);
          reject(err);
        } else {
          console.log(`Table ${tableName} created successfully`);
          resolve(results);
        }
      });
    });
  }
}

module.exports = DatabaseOperations;
