const express = require("express")
const port = 3000
const app = express()
app.get("/",(req,res)=>{
  res.send("Hello")
})
app.get("/admin",(req,res)=>{
  res.send("This is admin panel")
})
app.listen(port,()=>{
  console.log(`App is listening at ${port}`)
})
