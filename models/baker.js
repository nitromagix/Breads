//

const mongoose = require('mongoose')
const {
   Schema
} = mongoose



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
})


// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker