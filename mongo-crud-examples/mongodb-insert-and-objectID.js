//CRUD operations --- read, update, delete

const mongodb = require('mongodb');
const {MongoClient,ObjectId} = mongodb;

// Object Id Sample
const id = new ObjectId();
console.log(id);
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.toHexString());

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



        // // INSERT ONE
        // db.collection('users').insertOne({
        //    // _id: id, // we can provide id if we want to using new ObjectId();
        //    name:"Channa Weerakoon",
        //    age: 27 
        // }, (error, result)=>{
        //     if(error){
        //         return console.log("Unable to insert user ---> "+error);
        //     }

        //     console.log(result.acknowledged);
        //     console.log(`Inserted document id - ${result.insertedId}`);
        // });

        // INSERTED MANY
        // db.collection('users').insertMany([
        //     {
        //         name: 'Jen',
        //         age: 28
        //     },
        //     {
        //         name: 'Andreq',
        //         age: 27
        //     },
        //     {
        //         name: 'John',
        //         age: 30
        //     }
        // ], (error, result) => {

        //     if (error) {
        //         return console.log(error);
        //     }

        //     console.log('Inserted Id count: ' + result.insertedCount);

        // });

        // db.collection('tasks').insertMany([
        //     {
        //         description:" Initialize task collection",
        //         completed: true

        //     },
        //     {
        //         description:" Processing task collection creation",
        //         completed: true
        //     },
        //     {
        //         description:" Ending task collection creation",
        //         completed: false
        //     }

        // ], (error,result)=>{
        //     if(error){
        //         return console.log(error);
        //     }

        //     console.log(result.insertedIds);
        // });


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);