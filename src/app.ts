import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

const app = express();
const port = 3000;

mongoose.connect(process.env.DEV_DB_URI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));