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

// RETRIEVE - SHOW

bakers.get('/:id', (req, res) => {
   const id = req.params.id;
   trace('/:id (GET)')(id);
   Baker.findById(id)
      .populate('breads')
      .then(foundBaker => {
         res.render('bakerShow', {
            baker: foundBaker
         })
      })
})


// RETRIEVE - TEST

bakers.get('/', async (req, res) => {
   const id = req.params.id;
   trace('/ (TEST)')(id);

   const foundBakers = await Baker
   .find()
   .populate('breads');
   res.send(foundBakers)

   // Baker.find()
   //    .populate('breads')
   //    .then(foundBakers => {
   //       res.send(foundBakers)
   //    })
})

// DELETE

bakers.delete('/:id', async (req, res) => {
   const id = req.params.id;
   trace('/:id (DELETE)')(id);

   const deletedBaker = await Baker.findByIdAndDelete(id)
   res.status(303).redirect('/breads');

   // Baker.findByIdAndDelete(id)
   //    .then(deletedBaker => {
   //       res.status(303).redirect('/breads');
   //    })
})


// export
module.exports = bakers