import express from "express"
import {v4 as uuidv4 } from "uuid"

import { validateObject, validateToken } from "../middleware.js"
import { add, getAll, getOne } from "../dbHandler.js"

const router = express.Router()

router.post('/', validateObject, async (req, res, next) => {
  const newEntry = {id: uuidv4(), ...req.body}
  try {
    await add("entries", req.body)
    return res.status(201).json(newEntry)
  } catch (err) {
    console.log(err)
    return next(err)
  }
})

router.get('/', validateToken, async (req, res) => {
  try {
    return res.status(200).send(await getAll("entries"))
  } catch (err) {
    console.log(err)
    return next(err)
  }
  
})

router.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  try {
    return res.status(200).json(await getOne("entries", id))
  } catch (err) {
    console.log(err)
    if (err) {
      return res.status(404).json({message: `entry ${id} not found`})
    }
    return next(err)
  }
})

export default router