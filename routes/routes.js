const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers/api');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const parseJson = bodyParser.json();

module.exports = {
    api: async(app)=>{
        app.use('/api', urlencodedParser, parseJson, controllers.api);
        app.post('/api', controllers.update);
    }
};
