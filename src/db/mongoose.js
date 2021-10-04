const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://192.168.1.7:27017/task-manager-api');

// const User = mongoose.model('User',{
//     name: {
//         type: String,
//         required: true,
//         trim: true

//     },
//     email: {
//         type: String,
//         required: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid!');
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value){
//             if(value.toLowerCase() === "password"){
//                 throw new Error('Password cannot contain "password"');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default:0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a postive number');
//             }
//         }
//     }
// });

// const me = new User({
//     name: "John",
//     email: "john@gmail.com",
//     password: "1234567"
// });

// me.save().then((result)=>{
//     console.log(result);
// }).catch(error =>{
//     console.log("Error! ", error);
// });


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

const task1 = new Tasks({
    description: "Learn NodeJS to a Professional Level",

});

task1.save().then(result => {
    console.log(result);
}).catch(error => {
    console.log("Error! ",error);
});