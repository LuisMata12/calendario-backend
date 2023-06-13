import express from 'express'
import 'dotenv/config'

const app = express();
const PORT = 5000;


app.get('/',(req,res)=>{
    res.status(201).json({
        msg:"Hello word"
    })
})

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server runing in port:${process.env.PORT}`)
})