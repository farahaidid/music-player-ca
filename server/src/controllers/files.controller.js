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

exports.getFiles = async (req, res, next) => {
   try {
      let id = req.params.id || req.body.id;
      let files = await Files.find({userId: id});
      res.status(OK).json(files)
   } catch(error) {next(error)}
}

exports.uploadFile = async (req, res, next) => {
   let file = req.files.file;

   if(!file) return res.status(400).send("File required")
   let splitDot = file.name.split(".")
   let fileExt = splitDot[splitDot.length - 1]
   let name = `${randomNumber() * 100000}${new Date().getTime()}`
   let fileName = `${name}.${fileExt}`
   //save file in upload folder
   await saveBuffer(req.files.file.data, `uploads/${fileName}`);

   let fileURL= `http://localhost:3500/api/file/${fileName}`

   let fileData = {
      userId: "5e8c06caded2c410e8da92de",
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
}

exports.deleteFile = async (req, res, next) => {
   try {
      let _id = req.params.fileId
      console.log("DELETE_FILE", _id)
      let response = await Files.deleteOne({ _id })
      if (response.nModified == 0) throw new ErrorHandler(INTERNAL_SERVER_ERROR, "Error deleting file")
      res.status(OK).json(response)
   } catch (error) {
      console.log(error.message)
      next(error)
   }
}