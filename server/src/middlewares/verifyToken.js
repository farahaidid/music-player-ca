const jwt = require("jsonwebtoken")
const config = require("../config/config")

exports.verifyToken = (req, res, next) => {
   let token = req.header("access-token") || req.query.token
   console.log("verifyToken", token)
   if (!token) { return res.status(401).json({ error: true, message: "Access denied!" }) }
   jwt.verify(token, config.TOKEN_SECRET,
      (err, decoded) => {
         if (err) return res.status(401).json({ error: true, message: err.message })
         req.body = { ...req.body, _id: decoded._id }
         next()
      }
   )
}