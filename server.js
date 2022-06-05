// Aram's repo: https://github.com/aram-devdocs/breadCrud 

'use strict';

// DEPENDENCIES

require("dotenv").config();
const express = require('express');
const expressReactViews = require('express-react-views').createEngine();
const breadsController = require('./controllers/breads_controller');
const mongoose = require('mongoose');
const {
   trace,
   stub
} = require('./helper');
const methodOverride = require('method-override');

const PORT = process.env.PORT;

const app = express();


// MIDDLEWARE

mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   },
   () => trace('connected to mongo')(process.env.MONGO_URI)
)


app.use(express.static('./public'))
app.use(express.urlencoded({
   extended: true
}))
app.use(methodOverride('_method'))
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
   trace('Server listening')(`Port: ${PORT}`);
});