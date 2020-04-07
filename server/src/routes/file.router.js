const fileRouter = require('express').Router()

const { verifyToken } = require("../middlewares/verifyToken")
const {getFile, getFiles, uploadFile, deleteFile} = require('../controllers/files.controller')

fileRouter.route("/upload").post(uploadFile)

fileRouter.route("/:id/files")
   .get(getFiles)

fileRouter.route("/:id")
   .get(getFile)
   // .delete(verifyToken, deleteFile)

fileRouter.route("/:id/files/:fileId")
   .delete(deleteFile)

exports.fileRouter = fileRouter