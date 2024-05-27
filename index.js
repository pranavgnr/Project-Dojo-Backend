const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const postToProjects = require('./handlers/postToProjects');

app.use(bodyParser.json());
app.use(cors);

app.get('', (req,res)=>{
    console.log("Home screen")
})

app.post('/essays', (req,res)=>{
    postToEssays(req.body);
})

app.post('/projects', (req,res)=>{
    postToProjects(req.body);
})
