const express = require("express");
const app = express();
const upload = require("express-fileupload");

// Middlewares
const cors = require('cors')
const { handleError } = require('./middlewares/error.handler')
const bodyParser = require("body-parser")

// Router
const router = require("./routes/index.routes")

app
   .use(cors())
   .use(upload({
      limits: {
         fileSize: 50 * 1024 * 1024
      }
   }))
   .use(express.static(__dirname + "/uploads"))

   // Body parser
   .use(bodyParser.urlencoded({ extended: true, limit: "50mb",parameterLimit: 5000000 }))
   .use(bodyParser.json({type:'application/json',limit:'50mb'}))

   // Router
   .use(router)

   // Global error handler
   .use((err, _, res, __) => { handleError(err, res) })

// Exporting app
module.exports = app