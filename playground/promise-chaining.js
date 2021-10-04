require('../src/db/mongoose');
const User = require('../src/models/user.js');

// 615af6f59f7d978346952b05

User.findByIdAndUpdate('615af396676ad6099c7142b6', {age: 1})
.then(user =>{
    console.log(user);

    return User.countDocuments({age:1});
})
.then(result => {
    console.log(result);
})
.catch(e => {
    console.log(e);
})

