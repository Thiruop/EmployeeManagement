import express from 'express';
import router from './Routes/Employee.js';
import { pool } from './Model/db.js';

const app = express();
app.use(express.json());
app.use("/", router);

// Test DB connection before starting server
pool.getConnection((err, connection) => {
  if (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  } else {
    console.log('DB connection successful');
    connection.release();

    const PORT = 3000;
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  }
});