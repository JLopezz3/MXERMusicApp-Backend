const express = require("express");
const db = require("./db/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3001;
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Creating an account
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO Song.users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

//logging into an account
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Song.users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
        console.log(result);
      } else {
        res.send({ message: "Wrong username/password!" });
        console.log({ message: "Wrong username/password!" });
      }
    }
  );
});

// get all users
app.get("/get", (req, res) => {
  const sql = "SELECT * FROM Song.users where user_id =1;";
  const query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.status(200).json({
      status: "yessire",
      results,
    });
  });
});

//get user=1
//get user
// app.get('/login', async (req, res) =>{
//   const sql = `SELECT * FROM Song.users where username = '${req.body.username}' and password = '${req.body.password}';`;
//   const query = await db.query(sql, (err, results) => {
//       if(err) throw err;
//       console.log(results);
//       res.status(200).json({
//           status:"yessire",
//           results
//       });

//   });
// });

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
