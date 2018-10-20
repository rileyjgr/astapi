const express = require('express');
const path = require('path');
const routes = require('./routes/routes');


require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

routes.api(app);

app.listen(PORT);
console.log('app listening...');



