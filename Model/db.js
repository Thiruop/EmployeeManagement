import mysql from 'mysql2';

// Create a connection pool for better performance
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '2000',
  database: 'employeemanagement',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

