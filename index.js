'use strict';

require("dotenv").config();
const express = require('express');
const {trace, stub} = require('./helper');

const app = express();

app.get('/', (req, res) => {
   const name = '/';
   res.send(stub(name))
   trace('page served (GET)')(name);
});

app.get('*', (req, res) => {
   const name = '404';
   const params = req.params;
   const query = req.query;
   res.status(404).send(stub(name))
   trace('page served (GET)')(name);
   trace('| Params: ')(params);
   trace('| Queries: ')(query);
});

app.listen(3333, () => {
   trace('Server listening | PORT')(process.env.PORT);
});