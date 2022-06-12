'use strict';

const express = require('express')
const Bread = require('../models/bread');
const Bread_Seed = require('../models/bread_seed')
const breads = express.Router()

const {
   trace
} = require('../helper');
const Baker = require('../models/baker');

// RETRIEVE - INDEX

breads.get('/', async (req, res) => {
   const params = req.params;
   // trace('/breads (GET)')(params);

   const foundBakers = await Baker.find();
   const foundBreads = await Bread.find().limit(20);
   res.render('index', {
      breads: foundBreads,
      bakers: foundBakers,
      title: 'Index'
   });

})

// RETRIVE - DATA SEED

breads.get('/data/seed', async (req, res) => {
   const params = req.params;
   trace('/data/seed (GET)')(params);
   const breads = Bread_Seed;
   await Bread.insertMany(breads);
   res.redirect('/breads');
})


// RETRIEVE - NEW

breads.get('/new', async (req, res) => {
   const params = req.params;
   trace('/breads/new (GET)')(params);
   const foundBakers = await Baker.find();
   res.render('new', {
      bakers: foundBakers
   })
   // Baker.find()
   //    .then(foundBakers => {
   //       res.render('new', {
   //          bakers: foundBakers
   //       })
   //    })


});


// RETRIEVE - EDIT

breads.get('/:id/edit', async (req, res) => {
   const params = req.params;
   const query = req.query;
   const id = params.id;
   trace('/breads/:id/edit (GET)')(id);

   const foundBakers = await Baker.find();
   const foundBread = await Bread.findById(id);
   trace('breads')(foundBread);
   res.render('edit', {
      bread: foundBread,
      bakers: foundBakers
   });

})


// RETRIEVE - SHOW

breads.get('/:id', async (req, res) => {
   const params = req.params;
   const id = params.id;
   trace('/breads/:id (GET)')(id);

   const foundBread = await Bread
      .findById(id)
      .populate('baker');
   const foundBreadsByBaker = await Bread.getBreadsBakedBy(foundBread.Baker);

   res.render('show', {
      bread: foundBread,
      breadsByBaker: foundBreadsByBaker
   });
})

// CREATE

breads.post('/', async (req, res) => {
   const params = req.params;
   trace('/breads (POST)')(params);
   if (!req.body.image) {
      req.body.image = undefined;
   }
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true;
   } else {
      req.body.hasGluten = false;
   }
   const newBread = await Bread.create(req.body);
   res.redirect('/breads');
})


// UPDATE

breads.put('/:id', async (req, res) => {
   const params = req.params;
   const id = params.id;
   const body = req.body;
   trace('/breads/:id (PUT)')(id);
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true
   } else {
      req.body.hasGluten = false
   }
   
   const updatedBread = await Bread.findByIdAndUpdate(id, body,{ new: true });
   console.log(updatedBread)
   res.redirect(`/breads/${id}`)

})



// DELETE

breads.delete('/:id', async (req, res) => {
   const params = req.params;
   const id = params.id;
   trace('/breads/:arrayIndex (DELETE)')(id);

   const deletedBread = await Bread.findByIdAndDelete(id);
   res.status(303).redirect('/breads');

})



module.exports = breads