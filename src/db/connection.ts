import mongoose from 'mongoose';
import express from 'express';

export const connectDb = (app:express.Application) => {
    mongoose.connect(process.env.DEV_DB_URI, {useNewUrlParser: true});
    
    let db = mongoose.connection;
    db.on('error', function() {
        console.error.bind(console, 'connection error:')
        process.exit(1);
    });
    db.once('open', function() {
        console.log('db connected');
        app.emit('ready');
    });
};