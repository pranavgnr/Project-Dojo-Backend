const {client} = require('../connections/connectToDb')

const myDB = client.db("Pranav")
const essays = myDB.collection("Essays")

async function postToEssays(body) {
    try {
        await client.connect();

        try{
            const result = essays.insertOne(body);
        } catch(e) {
            console.log("error")
        }
    } catch(e) {
        console.log(e)
    }
}

module.exports = postToEssays;