const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');

const config = require('./config');

// zaimportowane pliki routów
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
mongoose.connect(config.db, {useNewUrlParser: true}, { useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(
   path.join(__dirname, 'public')
));

// Używanie tych routów
app.use(authRouter);
app.use(userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));