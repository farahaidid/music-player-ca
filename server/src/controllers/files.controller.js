const Files = require('../models/files.model')
const { ErrorHandler } = require("../middlewares/error.handler")
const { BAD_REQUEST, OK, INTERNAL_SERVER_ERROR } = require("../js/http.status")

exports.getFiles = async (req, res, next) => {
   // try {
   //    let id = req.params.id || req.body._id
   //    let trips = await Files.find({ addedBy: id })
   //    res.status(OK).json(trips)
   // } catch (error) { next(error) }
}

exports.uploadFile = async (req, res, next) => {

   console.log("req", req.file);
   
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

exports.deleteFiles = async (req, res, next) => {
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