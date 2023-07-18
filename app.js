import express from 'express'
import 'dotenv/config'

import auth from './routes/auth.js'
import dbConnection from './database/config.js';

const app = express();

// Git testing
console.log('test git')

// base de datos
dbConnection();

// carpeta publica
app.use(express.static('public'));

//lectura del body
app.use(express.json());

// rutas de login y jwt
app.use('/api/auth',auth);


app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server runing in port:${process.env.PORT}`)
})