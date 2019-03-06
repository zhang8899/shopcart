
const path = require("path")

const express = require("express")
const app = express()

const db = require('./src/common/db')

app.use(express.static("./src/assets"))

app.get("/api/carts",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    // res.json(require("./src/api/data.json"))
    db.find('carts',{},(err,carts)=>{
        console.log(carts)
        res.json(carts)
    })
})
app.get("/",(req,res)=>{
    
    res.sendFile(path.join("./public/index.html"))
})

app.listen(3000,(err)=>{
    console.log("data server is starting on port 3000")

})
