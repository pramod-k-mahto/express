const express=require('express')
require('dotenv').config();

const app=express()
const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{

    res.json({Name:"Pramod"})
})


app.listen(port,()=>{
    console.log("App is listing port 3000")
})