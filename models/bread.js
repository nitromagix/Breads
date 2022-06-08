// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const {
   Schema
} = mongoose

const breadSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   hasGluten: Boolean,
   image: {
      type: String,
      default: 'https://placekitten.com/g/200/300'
   },
   baker: {
      type: String,
      enum: ['Yeaster', 'Bakerooski', 'Yummy', 'Doughboy', 'Crusty', 'Carbo']
   }
})


const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread;

