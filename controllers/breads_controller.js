const express = require('express')
const {trace, stub} = require('../helper');
const Bread = require('../models/bread');

const breads = express.Router()

breads.get('/:arrayIndex', (req, res) => {
   const route = '/breads/';
   const params = req.params;
   res.send(Bread[params.arrayIndex])
   trace('page served (GET)')(route);
   trace('| Params: ')(params);
})

module.exports = breads