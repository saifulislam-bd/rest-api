/* eslint-disable no-param-reassign */
const { v4: uuidv4 } = require('uuid');
let users = require('../models/users.model');

// GET USers
const getAllUSers = (req, res) => {
    res.status(200).json({ users });
};

// Create User
const createUSer = (req, res) => {
    const newUSer = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    };
    users.push(newUSer);

    res.status(201).json(users);
};

// Update User
const updateUSer = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    users
        .filter((user) => user.id === userId)
        // eslint-disable-next-line array-callback-return
        .map((selectedUser) => {
            // eslint-disable-next-line no-param-reassign
            selectedUser.username = username;
            selectedUser.email = email;
        });

    res.status(200).json(users);
};
// Delete User
const deleteUSer = (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id !== userId);
    res.status(200).json(users);
};

module.exports = {
    getAllUSers,
    createUSer,
    updateUSer,
    deleteUSer,
};
