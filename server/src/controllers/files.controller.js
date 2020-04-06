const Files = require('../models/files.model')
const { ErrorHandler } = require("../middlewares/error.handler")
const { BAD_REQUEST, OK, INTERNAL_SERVER_ERROR } = require("../js/http.status")
const saveBuffer = require("save-buffer")
const randomNumber = require("random-number")
const path = require("path")

exports.getFile = async (req, res, next) => {
   try {
      res.sendFile(path.join(__dirname, "../uploads", `${req.params.id}`));
   } catch (error) { next(error) }
}

exports.uploadFile = async (req, res, next) => {
   let file = req.files.file 
   if(!file) return res.status(400).send("File required")
   let splitDot = file.name.split(".")
   let fileExt = splitDot[splitDot.length - 1]
   let name = `${randomNumber() * 100000}${new Date().getTime()}`
   let fileName = `${name}.${fileExt}`
   //save file in upload folder
   await saveBuffer(req.files.file.data, `uploads/${fileName}`);

   let fileURL= `http://localhost:3500/api/file/${fileName}`

   let fileData = {
      userId: "5e88a4244416a92d1c95a037",
      fileName: file.name,
      fileUrl: fileURL,
      uploadFileName: fileName,
      fileType: file.mimetype,
      size: file.size
   }

   let newFile = new Files(fileData)
   let hasError = newFile.validateSync()
   if (hasError) throw new ErrorHandler(BAD_REQUEST, hasError.message)

   try {
      await newFile.save();
   } catch (error) { throw new ErrorHandler(INTERNAL_SERVER_ERROR, error.message) }
   
   return res.status(200).json({
      message: 'File Upload Successfully',
      fileName: fileName,
      fileUrl: fileURL
   })
   // try {
   //    let { city, dateFrom, dateTo, price, _id } = req.body
   //    let trip = new Files({ city, dateFrom, dateTo, price, addedBy: _id })
   //    let hasError = trip.validateSync()
   //    if (hasError) throw new ErrorHandler(BAD_REQUEST, hasError.message)
   //    try {
   //       // Save trip
   //       let newTrip = await trip.save()
   //       res.status(OK).json(newTrip)
   //    }
   //    catch (error) { throw new ErrorHandler(INTERNAL_SERVER_ERROR, error.message) }
   // } catch (error) { next(error) }
}

exports.deleteFile = async (req, res, next) => {
   // try {
   //    let _id = req.params.tripId
   //    console.log("DELETE_TRIP", _id)
   //    let response = await Files.deleteOne({ _id })
   //    if (response.nModified == 0) throw new ErrorHandler(INTERNAL_SERVER_ERROR, "Error deleting trip")
   //    res.status(OK).json(response)
   // } catch (error) {
   //    console.log(error.message)
   //    next(error)
   // }
}