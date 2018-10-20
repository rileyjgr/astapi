const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers/api');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const parseJson = bodyParser.json();
const { validateBody, schemas } = require('../helpers/validate');

module.exports = {
    api: async(app)=>{
        app.use('/api', urlencodedParser, parseJson, controllers.api);
        app.post('/api', validateBody(schemas.ast), controllers.update);
    }
};
