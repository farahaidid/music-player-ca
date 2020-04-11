const fileRouter = require('express').Router()

const { verifyToken } = require("../middlewares/verifyToken")
const {getFile, getFiles, uploadFile, deleteFile} = require('../controllers/files.controller')

fileRouter.route("/upload").post(verifyToken,uploadFile)

fileRouter.route("/:id/files")
   .get(verifyToken,getFiles)

fileRouter.route("/:id")
   .get(verifyToken,getFile)
   // .delete(verifyToken, deleteFile)

fileRouter.route("/:id/files/:fileId")
   .delete(verifyToken,deleteFile)

exports.fileRouter = fileRouter