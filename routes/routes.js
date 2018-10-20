const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers/api');
/* Authentication middle ware will not work with api middle ware.
const { validateBody, schemas } = require('../helpers/validate');
*/
module.exports = {
    api: async(app)=>{
        app.use(bodyParser.json());
        app.get('/api', controllers.api);
        app.post('/api', controllers.update);
        app.get('/api/:name', controllers.apiParms);
        // app.get('/algorithm/:name', validateBody(schemas.ast), controllers.algorithm);
    }
};
