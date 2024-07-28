const express = require("express")
const cors = require("cors")
const app = express();
const mysql = require('mysql2');

const corsOptions ={
    origin:["http://localhost:5001", "http://localhost:5173"]
}
app.use(cors(corsOptions))

app.get("/api",(req, res) => {
    res.json({fruits: ["apple","banna"]})
})

app.listen(port=5001, ()=> {
    console.log("server started on port", {port})
})
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node_vjezbanje',
    // port: 3306,
    password: 'root',
  });
app.get("/customers",(req, res)=>{
    let sql = "SELECT * FROM node_vjezbanje.customers";
    connection.query(sql, (err, result)=>{
    if (err) throw err;    console.log(result);

    return res.json(result);
})
})


connection.addListener('error', (err) => {
    console.log(err);
  });

