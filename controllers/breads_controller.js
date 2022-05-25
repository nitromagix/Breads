'use strict';

const express = require('express')
const {trace} = require('../helper');
const Bread = require('../models/bread');

const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
   const params = req.params;
   trace('/breads')(params);

   res.render('index', {
      breads: Bread
   })

   // res.send(Bread)
})

breads.get('/:arrayIndex', (req, res) => {
   const params = req.params;
   trace('/breads/')(params);

   res.send(Bread[params.arrayIndex])
})

module.exports = breads