const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers/api');
const { validateBody, schemas } = require('../helpers/validate');

module.exports = {
    api: async(app)=>{
        app.use(bodyParser.json());
        app.get('/api', controllers.api);
        app.post('/api', validateBody(schemas.ast), controllers.update);
    }
};
