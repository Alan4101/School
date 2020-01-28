const path = require('path');
const dotenv = require('dotenv');

const root = path.join.bind(this, __dirname);
dotenv.config({path: root('.env')});

module.export = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: "mongodb://localhost:27017/docsdb",
    SESSION_SECRET: process.env.SESSION_SECRET,
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    PER_PAGE: process.env.PER_PAGE
};