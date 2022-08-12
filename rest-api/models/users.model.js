const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: 'Saiful Islam',
        email: 'saiful.islam@gmail.com',
    },
    {
        id: uuidv4(),
        username: 'Rafiqul Islam',
        email: 'rafiqul.islam@gmail.com',
    },
];
module.exports = users;
