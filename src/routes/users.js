import express from "express"
import {v4 as uuidv4 } from "uuid"
import bcrypt from 'bcrypt'

import { validateUser } from "../middleware.js"
import { add } from "../dbHandler.js"

const router = express.Router()

  let createHash = async (password) => {
    try {
      const hash = await bcrypt.hash(password, 10)
      return hash
    } catch (err) {
      console.error(err)
    }
  }

router.post('/', validateUser, async (req, res) => {

  try {
    let newUser = await createHash(req.body.password).then(hash => {
      return {id: uuidv4(), ...req.body, password: hash}
    })
    await add("users", newUser)
    return res.status(201).json(newUser)
  } catch (err) {
    console.log(err)
    return next(err)
  }
  
}) 

export default router