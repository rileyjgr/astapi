const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoConnect =  process.env.MONGODB_URI || "mongodb://localhost:27017/ast";

require('dotenv').config();

const app = express();

mongoose.connect(mongoConnect).then(function(error) {
    if (error) {
        console.log(error);
    }
});

const db = mongoose.connection;
Schema = mongoose.Schema;

const PORT = process.env.PORT || 3000;

db.on("error", console.error.bind(console, "connection error:"));

db.once('open', function() {


    app.use(cors());
    routes.api(app);

    app.listen(PORT);
    console.log('app listening...');

});

