const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

const config = require('./config');

// zaimportowane pliki routów
// const loginRouter = require('./routes/loginRoutes');

const mongoose = require('mongoose');
mongoose.connect(config.db, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Używanie tych routów
// app.use(loginRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));