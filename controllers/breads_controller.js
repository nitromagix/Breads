'use strict';

const express = require('express')
const Bread = require('../models/bread');
const Seed = require('../models/bread_seed')
const breads = express.Router()

const {
   trace
} = require('../helper');

// RETRIEVE - INDEX

breads.get('/', (req, res) => {
   const params = req.params;
   // trace('/breads (GET)')(params);

   Bread.find()
      .then(foundBreads => {
         // trace('breads')(foundBreads);
         res.render('index', {
            breads: foundBreads,
            title: 'Bread'
         });
      })

})

// RETRIVE - DATA SEED

breads.get('/data/bread_seed', (req, res) => {
   const params = req.params;
   trace('/data/bread_seed (GET)')(params);
   const breads = Seed;
   Bread.insertMany(breads)
      .then(createdBreads => {
         res.redirect('/breads')
      })
})


// RETRIEVE - NEW

breads.get('/new', (req, res) => {
   const params = req.params;
   trace('/breads/new (GET)')(params);
   res.render('new')
});


// RETRIEVE - EDIT

breads.get('/:id/edit', (req, res) => {
   const params = req.params;
   const query = req.query;
   const id = params.id;
   const error = query.error
   trace('/breads/:id/edit (GET)')(id);
   Bread.findById(id)
      .then(foundBread => {
         trace('breads')(foundBread);
         res.render('edit', {
            bread: foundBread,
            error
         });
      })
      .catch(err => {
         res.send('error404');
      })
})


// RETRIEVE - SHOW

breads.get('/:id', (req, res) => {
   const params = req.params;
   const id = params.id;
   trace('/breads/:id (GET)')(id);

   // let breadsByBaker;
   // Bread.getBreadsBakedBy('Bakerooski').then((breadsBy) =>{
   //    breadsByBaker = breadsBy;
   // })

   Bread.findById(id)
      .then(foundBread => {
         // trace('breads')(foundBread);
         Bread.getBreadsBakedBy(foundBread.baker)
         .then((breadsBy) =>{
            res.render('show', {
               bread: foundBread,
               breadsByBaker: breadsBy
            });
         })
      })
      .catch(err => {
         res.send('error404');
      })
})

// CREATE

breads.post('/', (req, res) => {
   const params = req.params;
   trace('/breads (POST)')(params);
   if (!req.body.image) { req.body.image = undefined }
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true
   } else {
      req.body.hasGluten = false
   }
   Bread.create(req.body)
      .then(bread => {
         // throw new Error('Could not update bread');
         res.redirect('/breads')
      })
      .catch(err => {
         res.redirect(`/breads`,)
      });
})


// UPDATE

breads.put('/:id', (req, res) => {
   const params = req.params;
   const id = params.id;
   const body = req.body;
   trace('/breads/:id (PUT)')(id);
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true
   } else {
      req.body.hasGluten = false
   }

   Bread.findByIdAndUpdate(id, body, {
         new: true
      })
      .then(updatedBread => {
         console.log(updatedBread)
         res.redirect(`/breads/${id}`)
      });

})



// DELETE

breads.delete('/:id', (req, res) => {
   const params = req.params;
   const id = params.id;
   trace('/breads/:arrayIndex (DELETE)')(id);
   Bread.findByIdAndDelete(id)
      .then(deletedBread => {
         res.status(303).redirect('/breads')
      })
})



module.exports = breads