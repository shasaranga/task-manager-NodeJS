
const bcrypt = require('bcryptjs');

const myFuntion = async () => {

    const password = 'Red12345';
    const hashedPasword = await bcrypt.hash(password, 8);
    console.log(password);
    console.log(hashedPasword);

    const isMatched = await bcrypt.compare("Red12345", hashedPasword);
    console.log(isMatched);
}

myFuntion();