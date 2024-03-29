'use strict'
const router = require('express').Router()

// Routers
const { userRouter, usersRouter } = require("./users.router")
const { fileRouter } = require("./file.router")

// Controllers
const { resetPassword } = require("../controllers/user.controller")

// Use routers
router.use("/api/user", userRouter)
router.use("/api/users", usersRouter)
router.use("/api/file", fileRouter)


router.get("/", (req, res) => {
   res.json({ message: "Hello from server" })
})

router.post("/api/reset-password", resetPassword)

// Export
module.exports = router