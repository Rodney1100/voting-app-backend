const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3301;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

// default reponse for any other not found
app.use((req, res) => {
  res.status(404).end();
});
//  conecting to sql
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "1100",
    database: "election",
  },
  console.log("connected to election database")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
