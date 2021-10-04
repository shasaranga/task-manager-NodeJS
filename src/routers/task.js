const express = require('express');
const Task = require('../models/tasks');

const router = express.Router();

// Create new Task - POST
router.post('/tasks', async (req, res) => {

    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

// Get a particular task
router.get('/tasks/:id', async (req, res) => {

    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    }

    catch (error) {
        res.status(500).send(error);
    }
})

//Get All Tasks
router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.send(tasks);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

// PATCH - update a task
router.patch("/tasks/:id", async (req, res) => {

    const _id = req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];

    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' });
    }

    try {

        const updatedTask = await Task.findById(_id);

        updates.forEach(update => updatedTask[update] = req.body[update]);
        await updatedTask.save();

        // //This way its not using the full potential of mongoose as we cant use middleware features
        // const updatedTask = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

        if (!updatedTask) {
            return res.status(404).send();
        }
        res.send(updatedTask);
    }
    catch (error) {
        res.status(400).send(error);
    }

});

// DELETE -  a task by id
router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try{
        const deleteTask = await Task.findByIdAndDelete(_id);
        if(!deleteTask){
            return res.status(404).send();
        }
        res.send(deleteTask);
    }
    catch(error){
        res.status(500).send(error);
    }
});


module.exports = router;
