const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://pranavgnr:3AwW7s0pRmoL7x6G@mind.f8ysh9p.mongodb.net/"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

module.exports = client;