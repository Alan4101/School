const mongoose = require('mongoose');
const express = require('express');

const config = require('../config');

mongoose.Promise = global.Promise();
mongoose.set('debag', config.IS_p);

mongoose.connection
    .on('error', error => console.log(error))
    .on('close', ()=> console.log('Database connection closed.'))
    .once('open', ()=>{
        const info = mongoose.connections[0];
        console.log(`Conected to ${info.host}:${info.port}/${info.name}`);
    });
mongoose.connect(config.MONGO_URL, {useNewUrlParser: true});