const express = require('express');
require('./db/mongoose');
const User = require('./models/user.js');

const app = express();

// checking which port its running when deployed.
// else for dev its 3000
const port = process.env.PORT || 3000;

// convert data as json.
app.use(express.json());

// Create new user - POST
app.post('/users',(req, res)=>{
    
    const user = new User(req.body);
    user.save()
    .then((result)=>{
        res.send(result);
    })
    .catch(error => {
        res.status(400).send(error);
    });


});

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});
