//

const res = require('express/lib/response')
const mongoose = require('mongoose')

const {
   Schema
} = mongoose

const {trace, dateToMMDDYYYY} = require('../helper')

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
      type: Schema.Types.ObjectId,
      ref: 'Baker'
   }
})

// helper methods 
breadSchema.methods.getBakedBy = function () {
   return `${this.name} was baked with gloves by ${this.baker.name}, who has been with us since ${dateToMMDDYYYY(this.baker.startDate)}`
}

 breadSchema.static('getBreadsBakedBy', function(baker) { return this.find({ baker }); });

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread;