const express = require('express');
const cors = require('cors');
const db = require('./dbconfig/dbConfig')
const environment = require('./config/environment');

environment.configEnv();
var app = express()
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req,res) =>{
    res.json({
        Project: "Puma",
        Service: "Alocate-Service"
    })
})

app.listen(3002)
