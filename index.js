const express = require('express');
const db = require("./db/db");
// const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const PORT = 8080;


// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}))
// const cors = require("cors");
// app.use(cors());

// app.get("/", (req, res) => {
//     res.json({
//         yo: "guys",
//         welcome: "back",
//         du: "ma"
//     });
// });
// app.get("/", async (req, res) => {
    

// app.post("https://mxer-app.herokuapp.com/api/insert", (req, res) => {

//     const songName = req.body.sonyName
//     const songRating = req.body.songRating

//     const sqlInsert = "INSERT INTO heroku_fcf45fc874be4c6.song (song_id, song_name, song_rating) VALUES (2, 'bcd', 4)";
//     db.query(sqlInsert, (err, result) => {
//         console.log(err);
//     })
// })

// app.get("https://mxer-app.herokuapp.com/api/get", (req, res) => {
//     const sqlSelect = "SELECT * FROM heroku_fcf45fc874be4c6.song";
//     db.query(sqlSelect, (err, results) => {
//         res.send(result);
//     })
// })

// app.post("https://mxer-app.herokuapp.com/api/insert", (req, res) => {

//     const songName = req.body.sonyName
//     const songRating = req.body.songRating

//     const sqlInsert = "INSERT INTO heroku_fcf45fc874be4c6.song (song_name, song_rating) VALUES (?,?)";
//     db.query(sqlInsert, [songName, songReview], (err, result) => {
//         console.log(err);
//     })
// })

// // app.get("https://mxer-app.herokuapp.com/api/v1/get", async (req, res) => {
    
// //     try{
// //     const get = await db.query("SELECT * FROM heroku_fcf45fc874be4c6.song where song_id=1;");
    
// //     res.status(200).json({
// //         status: "success",
// //         data:{
// //             get: get.rows[0],
// //         },
    
// //     });
// //     } catch(err) {
// //         console.log(err);

// //     }
   
// // });



app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
})