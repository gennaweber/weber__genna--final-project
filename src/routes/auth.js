import express from "express"
import jwt from "jsonwebtoken"

import { validateLogin } from "../middleware.js"

const router = express.Router()

router.post('/', validateLogin, (req, res) => {
  const email = req.body.email;
  const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '60m'})
  
  return res.status(200).json({token})
})

export default router
