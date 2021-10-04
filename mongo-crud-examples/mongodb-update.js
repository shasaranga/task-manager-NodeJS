//CRUD operations --- read, update, delete

const mongodb = require('mongodb');
const { MongoClient, ObjectId } = mongodb;

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

    db.collection('users').updateOne({
        _id: new ObjectId('615aa773a31ee9e15969138d')
    },{
        $set:{
            name:"Kasuni"
        },
        $inc:{
            age: 1
        }
    }).then(result =>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    });


    db.collection('tasks').updateMany({
        completed:true
    }, {
        $set: {
            completed:false
        }
    }).then(result =>{
        console.log(result);
    }).catch(error => {
        console.log(error);
    });


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);