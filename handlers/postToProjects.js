const client = require('../connections/connectToDb')

const myDB = client.db("Pranav")
console.log(client)
const projects = myDB.collection("Projects")

async function postToProjects(body) {
    try {
        await client.connect();

        try{
            const result = projects.insertOne(body);
        } catch(e) {
            console.log("error")
        }
    } catch(e) {
        console.log(e)
    }
}

module.exports = postToProjects;