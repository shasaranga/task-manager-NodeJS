//CRUD operations --- read, update, delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://192.168.1.7:27017';
const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, (error, client)=>{
//     if(error){
//         return console.log("Unable to connect to database. " + error);
//     }

//     console.log("MongoDb connected");
// });

// Create a new MongoClient
const client = new MongoClient(connectionURL);
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db(databaseName);

        db.collection('users').insertOne({
           name:"Sathsara Warushawithana",
           age: 27 
        });
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

db.createUser({user: "root", pwd: "1234", roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ] })
