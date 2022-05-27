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
   trace('/breads')(params);

   res.render('index', {
      breads: Bread
   });
})

// NEW
breads.get('/new', (req, res) => {
   res.render('new')
});

// SHOW
breads.get('/:arrayIndex', (req, res) => {
   //    trace('/breads/')(params);
   if (Bread[req.params.arrayIndex]) {
      res.render('show', {
         bread: Bread[req.params.arrayIndex],
      })
   } else {
      res.render('error404', {
         arrayIndex: req.params.arrayIndex
      }, );
   }
});

// CREATE

// CREATE
breads.post('/', (req, res) => {
   if (!req.body.image) {
     req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
   }
   if(req.body.hasGluten === 'on') {
     req.body.hasGluten = true
   } else {
     req.body.hasGluten = false
   }
   Bread.push(req.body)
   res.redirect('/breads')
 })


module.exports = breads