const express = require('express');
require('./db/mongoose');
const User = require('./models/user.js');
const Task = require('./models/tasks.js');

const app = express();

// checking which port its running when deployed.
// else for dev its 3000
const port = process.env.PORT || 3000;

// convert data as json.
app.use(express.json());

// Create new user - POST
app.post('/users', (req, res) => {

    const user = new User(req.body);
    user.save()
        .then((result) => {
            res.status(201).send(result);
        })
        .catch(error => {
            res.status(400).send(error);
        });
});

// Get a particular User
app.get('/users/:id', (req, res) => {

    const _id = req.params.id;
    User.findById(_id)
        .then(result => {
            if (!result) {
                return res.status(404).send();
            }
            res.send(result);

        })
        .catch(error => {
            res.status(500).send(error);
        })
});


// Get All Users
app.get('/users', (req, res) => {

    User.find({}).then(users => {
        res.send(users);
    })
        .catch(error => {
            res.status(500).send(error);
        })
});

// Create new Task - POST
app.post('/tasks', (req, res) => {

    const task = new Task(req.body);

    task.save()
        .then(result => {
            res.status(201).send(result);
        })
        .catch(error => {
            res.status(400).send(error);
        })
});

// Get a particular task
app.get('/tasks/:id', (req, res) => {

    const _id = req.params.id;
    Task.findById(_id)
        .then(result => {
            if(!result){
                return res.status(404).send();
            }

            res.send(result);
        })
        .catch(error => {
            res.status(500).send(error);
        });
})

//Get All Tasks
app.get('/tasks', (req, res) => {
    Task.find({})
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.status(500).send(error);

        });
});

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});
