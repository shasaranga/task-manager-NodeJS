const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = mongoose.Schema({
    description:{
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
});

taskSchema.pre("save", async function (next){
    const task = this;

    // ending the pre task
    console.log('actions to take before saving a task')
    next();
});

const Tasks = mongoose.model('Tasks',taskSchema);

module.exports = Tasks;