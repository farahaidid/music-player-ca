const userRouter = require('express').Router()
const usersRouter = require('express').Router()

const { verifyToken } = require("../middlewares/verifyToken")
const { createUser, loginUser, getUserProfile, updateProfile } = require('../controllers/user.controller')
const { getFiles, uploadFile, deleteFiles } = require('../controllers/files.controller')

usersRouter.route("/").post(createUser)

userRouter.route("/login").post(loginUser)
userRouter.route("/:id")
   .get(verifyToken, getUserProfile)
   .patch(verifyToken, updateProfile)

userRouter.route("/:id/files", upload.single('audioFiles'))
   .post(uploadFile)
   .get(verifyToken, getFiles)

userRouter.route("/:id/files/:fileId")
   .delete(verifyToken, deleteFiles)

exports.userRouter = userRouter
exports.usersRouter = usersRouter