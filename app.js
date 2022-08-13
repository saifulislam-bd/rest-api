const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.route');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

// home route

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// not found route


app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// server error

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something went wrong' });
});

module.exports = app;
