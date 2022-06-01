'use strict';

const express = require('express')
const {
   trace
} = require('../helper');
const Bread = require('../models/bread');
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
   const params = req.params;
   trace('/breads (GET)')(params);

   res.render('index', {
      breads: Bread
   });
})

// NEW
breads.get('/new', (req, res) => {
   const params = req.params;
   trace('/breads/new (GET)')(params);
   res.render('new')
});

//    trace('/breads/')(params);


// EDIT
breads.get('/:indexArray/edit', (req, res) => {
   const params = req.params;
   trace('/breads/:indexArray/edit (GET)')(params);
   res.render('edit', {
      bread: Bread[req.params.indexArray],
      index: req.params.indexArray
   })
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
   const params = req.params;
   trace('/breads/:indexArray (GET)')(params);
   if (Bread[req.params.arrayIndex]) {
      res.render('show', {
         bread: Bread[req.params.arrayIndex],
         index: req.params.arrayIndex,
      })
   } else {
      res.render('show')
   }
})

// breads.get('*', (req, res) => {

//    res.render('error404')

// })

// CREATE
breads.post('/', (req, res) => {
   const params = req.params;
   trace('/breads (POST)')(params);
   if (!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
   }
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true
   } else {
      req.body.hasGluten = false
   }
   Bread.push(req.body)
   res.redirect('/breads')
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
   const params = req.params;
   trace('/breads/:arrayIndex (PUT)')(params);
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true
   } else {
      req.body.hasGluten = false
   }
   Bread[req.params.arrayIndex] = req.body
   res.redirect(`/breads/${req.params.arrayIndex}`)
})


// DELETE
breads.delete('/:indexArray', (req, res) => {
   const params = req.params;
   trace('/breads/:arrayIndex (DELETE)')(params);
   Bread.splice(req.params.indexArray, 1)
   res.status(303).redirect('/breads')
})



module.exports = breads