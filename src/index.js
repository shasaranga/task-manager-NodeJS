const express = require('express');
require('./db/mongoose');
const Task = require('./models/tasks.js');

//routers 
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

// checking which port its running when deployed.
// else for dev its 3000
const port = process.env.PORT || 3000;

// convert data as json.
app.use(express.json());

//using the routers
app.use(userRouter);
app.use(taskRouter);

// starting the server on the port
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});
