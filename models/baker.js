//

const mongoose = require('mongoose')
const {
   Schema
} = mongoose

const Bread = require('../models/bread');


// schema
const bakerSchema = new Schema({
   name: {
      type: String,
      required: true,
      enum: ['Yeaster', 'Bakerooski', 'Yummy', 'Doughboy', 'Crusty', 'Carbo']
   },
   startDate: {
      type: Date,
      required: true
   },
   bio: String
}, {
   toJSON: {
      virtuals: true
   }
})

bakerSchema.virtual('breads', {
   ref:'Bread',
   localField: '_id',
   foreignField: 'baker'
})


// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker