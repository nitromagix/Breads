// require mongoose 
const res = require('express/lib/response')
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
      default: '/images/default_bread.jpg'
   },
   baker: {
      type: String,
      enum: ['Yeaster', 'Bakerooski', 'Yummy', 'Doughboy', 'Crusty', 'Carbo']
   }
})

// helper methods 
breadSchema.methods.getBakedBy = function () {
   return `${this.name} was baked with gloves by ${this.baker}`
}

 breadSchema.static('getBreadsBakedBy', function(baker) { return this.find({ baker }); });

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread;