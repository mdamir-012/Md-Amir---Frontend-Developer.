const express= require("express");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("matrix labs api working")
})

app.listen(8000,()=>{
    console.log(`server is running on 8000`)
})