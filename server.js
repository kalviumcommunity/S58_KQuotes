const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send({"ping":"pong"});
});

app.listen(8080,()=>{
    console.log("Running...")
})





