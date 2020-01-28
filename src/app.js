const express = require('express');
// const mongoose = require('mongoose');

const config = require('./config');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(config, () => {
   console.log(`App listen on port ${config.PORT}!`)
});

