const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {library}=require("./models/Library")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("welcome to add")
})

app.get("/search",(req,res)=>{
    res.send("welcome to search")
})

app.get("/delete",(req,res)=>{
    res.send("welcome to delete")
})

app.get("/view",(req,re)=>{
    res.send("welcome to view")
})

app.listen(6789,()=>
{
    console.log("server started")
})