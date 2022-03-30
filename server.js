const express = require("express");
const path = require("path");
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3050, () => console.log("Server running..."));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel'
});

// todas las reservas
app.get('/reservas', (req, res) => {
  const sql = 'SELECT * FROM reservas';

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});

connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});
