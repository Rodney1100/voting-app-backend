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

// get all cadidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// get one candidate
// db.query(`SELECT * FROM candidates WHERE id =1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

//  Delete a candidate
// db.query(`DELETE FROM candidates Where id=?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

//  create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
const params = [1, "ronald", "firbank", 1];
db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
