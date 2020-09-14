const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');

// const users = require('./routes/api/users');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

/*
const db = require('./config/keys').mongoURI;

mongoose
    .connect(
        db, 
        { useNewUrlParser: true}
    )
    .then(() => console.log(`MongoDB successfully connected!`))
    .catch(err => console.log(`Error encountered: ${err}`));
*/

// Routes
// app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Here we are again'));

app.listen(PORT, () => console.log(`Project EJD is online and listening on (local) port ${PORT}.`));