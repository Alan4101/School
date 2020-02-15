const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

require('./db/index');

const app = express();

app.use(express.static(__dirname + '/public'));
// app.get('/', (req, res) => res.render('index'));

app.listen(config.PORT, () => {
   console.log(`App listen on port ${config.PORT}!`)
});

