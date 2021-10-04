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

        // Searching by name 
        db.collection('users').findOne({ name: "Sathsara Warushawithana" }, (error, result) => {

            if (error) {
                return console.log(error);
            }
            console.log(result);
        });


        // Searching by Id
        db.collection('users').findOne({ _id: new ObjectId("615aa773a31ee9e15969138d") }, (error, result) => {

            if (error) {
                return console.log(error);
            }
            console.log(result);
        });


        // Searching all available 
        db.collection('users').find({ age: 27 }).toArray((error, users) => {
            console.log(users);
        });


        // Get Count 
        db.collection('users').find({ age: 27 }).count((error, count) => {
            console.log(count);
        });


        db.collection('tasks').findOne({_id:new ObjectId("615aab77995d7e49a787880f")},(error, result)=>{


            if(error){
                return console.log(error);
            }

            console.log(result);

        });

        db.collection('tasks').find({completed: false}).toArray((error,tasks)=>{

            if(error){
                return console.log(error);
            }
            console.log(tasks);
        });


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);