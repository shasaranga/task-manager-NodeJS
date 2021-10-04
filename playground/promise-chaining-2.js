require('../src/db/mongoose');
const Task = require('../src/models/tasks.js');

Task.findByIdAndDelete('615b0cc123b5a24389a195d9')
.then(result =>{
    console.log(result);

    return Task.countDocuments({completed:false});

})
.then(count => console.log(count))
.catch(e => console.log(e))