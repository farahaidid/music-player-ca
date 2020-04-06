const fileRouter = require('express').Router()

const { verifyToken } = require("../middlewares/verifyToken")
const {getFile, uploadFile, deleteFile} = require('../controllers/files.controller')

fileRouter.route("/upload").post(uploadFile)

fileRouter.route("/:id")
   .get(verifyToken, getFile)
   .delete(verifyToken, deleteFile)

exports.fileRouter = fileRouter