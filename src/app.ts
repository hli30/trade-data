import express from 'express';
import { NewsApiTask } from './utils/scheduler/NewsApiTask';
import { connectDb } from './db/connection';
require('dotenv').config();

const app = express();
const port = 3000;

connectDb(app);

// app.get('/', (req, res) => res.send('Hello World!'));

app.use('/', require('./routes'))

//'ready' is emitted once db connects, see ~/db/connection
app.on('ready', ()=> {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    
    // const reutersTask = new NewsApiTask();
    // reutersTask.startRepeatingTask();
});