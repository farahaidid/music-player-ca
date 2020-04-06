const mongoose = require("mongoose")
const schema = require("./schema/file.schema")

const files = mongoose.model('files', schema)

module.exports = files