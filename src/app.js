const express = require('express');
require('./db/index');

const app = express();

const config = require('./config');

app.use(express.static(__dirname + '/public'));
// app.get('/', (req, res) => res.render('index'));

app.listen(config.PORT, () => {
   console.log(`App listen on port ${config.PORT}!`)
});

