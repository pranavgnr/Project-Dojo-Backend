const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const postToProjects = require('./handlers/postToProjects');
const postToEssays = require('./handlers/postToEssays');

app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:4200' // Allow requests from this origin
  };
  
app.use(cors(corsOptions));

app.get('', (req,res)=>{
    console.log("Home screen");
})

app.post('/essays', (req,res)=>{
    postToEssays(req.body);
})

app.post('/projects', (req,res)=>{
    postToProjects(req.body);
})

app.listen(3000, () => {
    try {
        console.log("server running on port 3000")
    } catch (e) {
        console.log(e)
    }
})