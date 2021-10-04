const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.1.7:27017/task-manager-api');



const Tasks = mongoose.model('Tasks',{
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
