const express = require("express");
const db = require("./db/db");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


//get all users
app.get('/get', (req, res) =>{
  const sql = "SELECT * FROM Song.users where user_id =1;";
  const query = db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.status(200).json({
          status:"yessire",
          results
      });
      
  });
});


//get user=1
//get user
app.get('/login', async (req, res) =>{
  const sql = `SELECT * FROM Song.users where username = '${req.body.username}' and password = '${req.body.password}';`;
  const query = await db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.status(200).json({
          status:"yessire",
          results
      });
      
  });
});
//create user
post.get('/signup', async (req, res) =>{
  const sql = `INSERT INTO Song.users (username, password, puser) VALUES ( '${req.body.username}, '${req.body.password}', 1)  ;`;
  const query2 = await db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.status(200).json({
          status:"yessire",
          results
      });
      
  });
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
