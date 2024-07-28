const express = require("express")
const cors = require("cors")
const app = express();
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