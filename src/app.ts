import express from 'express';
import mongoose from 'mongoose';
import { fetchHeadlines } from './services/reuters.service';
import { saveHeadlines } from './services/headline.service';
require('dotenv').config();

const app = express();
const port = 3001;

mongoose.connect(process.env.DEV_DB_URI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});

// TODO: refactor into a scheduled task
const fetchData = async () => {
    await fetchHeadlines()
        .then(res => {
            return saveHeadlines(res);
        })
        .then(res => {
            console.log('data saved');
        })
        .catch(err => {
            console.log(err);
        });
};

// const fetchData = async () => {
//     try {
//         let headlines = await fetchHeadlines()
//         await saveHeadlines(headlines)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// fetchData();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));