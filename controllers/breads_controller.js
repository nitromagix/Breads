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
   Bread.find()
      .then(foundBreads => {
         trace('breads')(foundBreads);
         res.render('index', {
            breads: foundBreads,
            title: 'Index Page'
         });
      })

})

// NEW
breads.get('/new', (req, res) => {
   const params = req.params;
   trace('/breads/new (GET)')(params);
   res.render('new')
});

//    trace('/breads/')(params);


// EDIT
breads.get('/:id/edit', (req, res) => {
   const params = req.params;
   trace('/breads/:id/edit (GET)')(params);
   Bread.findById(params.id)
   .then(foundBread => {
      trace('breads')(foundBread);
      res.render('edit', {
         bread: foundBread
      });
   })
   .catch(err => {
      res.send('error404');
   })
   // res.render('edit', {
   //    bread: Bread[req.params.indexArray],
   //    index: req.params.indexArray
   // })
})

// SHOW

// breads.get('/:id', (req, res) => {
//    Bread.findById(req.params.id)
//       .then(foundBread => {
//          res.render('show', {
//             bread: foundBread
//          })
//       })
// })


breads.get('/:id', (req, res) => {
   const params = req.params;
   trace('/breads/:id (GET)')(params);
   Bread.findById(params.id)
      .then(foundBread => {
         trace('breads')(foundBread);
         res.render('show', {
            bread: foundBread
         });
      })
      .catch(err => {
         res.send('error404');
      })
})

// breads.get('*', (req, res) => {

//    res.render('error404')

// })

// CREATE

breads.post('/', (req, res) => {
   if (!req.body.image) {
      req.body.image = undefined
   }
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true
   } else {
      req.body.hasGluten = false
   }
   Bread.create(req.body)
   res.redirect('/breads')
})



breads.post('/', (req, res) => {
   const params = req.params;
   trace('/breads (POST)')(params);
   if (!req.body.image) {
      req.body.image = undefined
   }
   if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true
   } else {
      req.body.hasGluten = false
   }
   Bread.create(req.body)
   res.redirect('/breads')
})

// UPDATE
breads.put('/:id', (req, res) => {
   const params = req.params;
   trace('/breads/:id (PUT)')(params);
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