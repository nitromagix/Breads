const express = require('express')
const {trace, stub} = require('../helper');
const Bread = require('../models/bread');

const breads = express.Router()

// INDEX
breads.get('/:arrayIndex', (req, res) => {
   const name = '/breads';
   res.send(Bread[req.params.arrayIndex])
   trace('page served (GET)')(name);
})

module.exports = breads