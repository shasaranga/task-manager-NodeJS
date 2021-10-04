const express = require('express');
const User = require('../models/user');


const router = new express.Router();


// Create new user - POST
router.post('/users', async (req, res) => {

    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get a particular User
router.get('/users/:id', async (req, res) => {

    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});


// Get All Users
router.get('/users', async (req, res) => {


    try {

        const users = await User.find({});
        res.send(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

// PATCH - update a user
router.patch('/users/:id', async (req, res) => {

    const _id = req.params.id;

    // making sure the updates are within the requirement.
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        // new: true will return the updated user
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

// Delete a user
router.delete('/users/:id', async (req,res)=> {

    const _id = req.params.id;

    try{
        const deletedUser = await User.findByIdAndDelete(_id);

        if(!deletedUser){
            return res.status(404).send();
        }

        res.send(deletedUser);
    }
    catch(error){
        res.status(500).send(error);

    }

});

module.exports = router;