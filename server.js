'use strict';

require("dotenv").config();
const express = require('express');
const expressReactViews = require('express-react-views').createEngine();
const breadsController = require('./controllers/breads_controller');
const {trace, stub} = require('./helper');

const PORT = process.env.PORT;

const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', expressReactViews)

// ROUTES
app.use('/breads', breadsController);

app.get('/', (req, res) => {
   trace('/')(req.params);

   res.send(stub('Breads'))

});

app.get('*', (req, res) => {
   const route = '404'
   const params = req.params;
   const query = req.query;
   trace('*')(route);
   trace(' | params')(params);
   trace(' | query')(query);
   
   res.status(404).send(stub(route))

});

app.listen(PORT, () => {
   trace('Server nomming | PORT')(PORT);
});