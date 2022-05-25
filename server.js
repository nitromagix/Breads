'use strict';

require("dotenv").config();
const express = require('express');
const {trace, stub} = require('./helper');
const breadsController = require('./controllers/breads_controller');

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
   const route = '/';
   res.send(stub('Breads'))
   trace('page served (GET)')(route);
});

app.get('*', (req, res) => {
   const route = '404';
   const params = req.params;
   const query = req.query;
   res.status(404).send(stub(route))
   trace('page served (GET)')(route);
   trace('| Params: ')(params);
   trace('| Query: ')(query);
});

app.use('/breads', breadsController);

app.listen(PORT, () => {
   trace('Server nomming | PORT')(PORT);
});