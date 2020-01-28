const mongoose = require('mongoose');

const config = require('../config');

mongoose.Promise = global.Promise;
// mongoose.set('debag', config.IS_PRODUCTION);

mongoose.connection
    .on('error', console.error.bind(console, 'MongoDB connection error:'))
    .on('close', ()=> console.log('Database connection closed.'))
    .once('open', ()=>{
        const info = mongoose.connections[0];
        console.log(`Conected to ${info.host}:${info.port}/${info.name}`);
    });

mongoose.connect(config.MONGO_URL, {useNewUrlParser: true});