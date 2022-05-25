'use strict';

require("dotenv").config();
const express = require('express');
const {trace, stub} = require('./helper');

const PORT = process.env.PORT;
const app = express();

const breadsController = require('./controllers/breads_controller');
app.use('/breads', breadsController);

app.get('/', (req, res) => {
   const name = '/';
   res.send(stub('Breads'))
   trace('page served (GET)')(name);
});

app.get('*', (req, res) => {
   const name = '404';
   const params = req.params;
   const query = req.query;
   res.status(404).send(stub(name))
   trace('page served (GET)')(name);
   trace('| Params: ')(params);
   trace('| Query: ')(query);
});

app.listen(PORT, () => {
   trace('Server nomming | PORT')(PORT);
});