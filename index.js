require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

app.get('/employee/', (req, res, next) => {
  connection.query('SELECT * FROM emp', (err, results, fields) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});