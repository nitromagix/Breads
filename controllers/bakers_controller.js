// 

const express = require('express')
const bakers = express.Router()
const Baker = require('../models/baker.js')
const Bakers_Seed = require('../models/baker_seed.js')

const {
   trace,
   stub
} = require('../helper');

// RETRIEVE - SEED

bakers.get('/data/baker_seed', (req, res) => {
   const params = req.params;
   trace('/data/baker_seed (GET)')(params);

   const bakers = Bakers_Seed;
   Baker.insertMany(bakers)
      .then(() => {
         trace('baker seed data imported')('success');
         res.redirect('/breads')
      })
})


// export
module.exports = bakers