//

const mongoose = require('mongoose')
const {
   Schema
} = mongoose

const Bread = require('../models/bread');

const { trace } = require('../helper');

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

// virtuals

bakerSchema.virtual('breads', {
   ref:'Bread',
   localField: '_id',
   foreignField: 'baker'
})

// hooks 

bakerSchema.post('findOneAndDelete', async function() {
   // const deletedBakerId = this._conditions._id;
   // trace(`deleted baker ${deletedBakerId}`)('OK');
   await Bread.deleteMany({ baker: this._conditions._id });
   // trace('deleted associated breads')('OK');

 })


// bakerSchema.post('findOneAndDelete', function() {
//    Bread.deleteMany({ baker: this._conditions._id })
//        .then(deleteStatus => {
//            console.log(deleteStatus)
//        })
//  })

 

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker