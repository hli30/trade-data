import express from 'express';
import { ReutersTask } from './utils/scheduler/ReutersTask';
import { connectDb } from './db/connection';
require('dotenv').config();

const app = express();
const port = 3000;

connectDb(app);

app.get('/', (req, res) => res.send('Hello World!'));

app.on('ready', ()=> {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    
    const reutersTask = new ReutersTask();
    reutersTask.startRepeatingTask();
});