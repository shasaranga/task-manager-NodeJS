require('../src/db/mongoose');
const User = require('../src/models/user.js');
const Task = require('../src/models/tasks.js');
// 615af6f59f7d978346952b05

// User.findByIdAndUpdate('615af396676ad6099c7142b6', {age: 1})
// .then(user =>{
//     console.log(user);

//     return User.countDocuments({age:1});
// })
// .then(result => {
//     console.log(result);
// })
// .catch(e => {
//     console.log(e);
// })


// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, {age});

//     const count = await User.countDocuments({age});

//     return {
//         previous_user_info: user,
//         count
//     }
// }

// updateAgeAndCount("615af396676ad6099c7142b6", 45)
// .then(result => console.log(result))
// .catch(e => console.log(e));

const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false});
    return count;
}

deleteTaskAndCount("615b3a5b1b579c8329bd705b")
.then(count => console.log(count))
.catch(e => console.log(e));
