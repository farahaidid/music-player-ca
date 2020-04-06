const mongoose = require('mongoose')

const { ObjectId } = require('mongoose').SchemaTypes

const schema = new mongoose.Schema({
   userId: {
      type: String,
      required: true
   },
   fileName: {
      type: String,
      required: true
   },
   uploadFileName: {
      type: String,
      required: true
   },
   uploadedAt: {
      type: Date,
      default: Date.now()
   },
   size: {
      type: Number,
      required: true
   }
})

module.exports = schema