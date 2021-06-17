import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getAll } from './dbHandler.js'

const populateInvalidProperties = (obj, requiredProperties) => {
  let invalidProperties = requiredProperties.filter(property => !obj.hasOwnProperty(property));
  return invalidProperties;
}

const isValidObject = (obj, requiredProperties) => {
  let isValid = requiredProperties.every(property => obj.hasOwnProperty(property));
  return isValid;
}

const validateObject = (req, res, next) => {
  const requiredProperties = ["name", "email", "phoneNumber", "content"];

  if (isValidObject(req.body, requiredProperties)){
    next();
  } else {
      let invalidProperties = populateInvalidProperties(req.body, requiredProperties);
      return res.status(400).json({message: "validation error", invalid: invalidProperties});
  }
}


const validateUser = (req, res, next) => {
  const requiredProperties = ["name", "password", "email"];
  const validObject = isValidObject(req.body, requiredProperties);

  if (validObject){
    const validPassword = req.body.password.length >= 8
    const validEmail = /^[^\s@]+@[^\s@]+$/.test(req.body.email);

    if (!validPassword){
      return res.status(400).json({message: "validation error", invalid: "password"});
    }
    if (!validEmail){
      return res.status(400).json({message: "validation error", invalid: "email"});
    }
    else {
      next();
    }
  } 
    else {
      let invalidProperties = populateInvalidProperties(req.body, requiredProperties);
      return res.status(400).json({message: "validation error", invalid: invalidProperties});
    } 
}

let verify = async (password, hash) => {
  try {
    const match = await bcrypt.compare(password, hash)
    return match
  } catch (err) {
    throw err
  }
}

const findUser = async (username, password) => {
  let content = await getAll("users")
  const userLocation = content.findIndex(user => user.email === username)

  try {
    if(userLocation != -1) {
      if(await verify(password, content[userLocation].password).then(valid => valid)){
        return true
      }
    }

    return false
    } catch (err) {
      console.log(err)
    }
}

const validateLogin = async (req, res, next) => {
    const requiredProperties = ["password", "email"];
    const validObject = isValidObject(req.body, requiredProperties);

    if(validObject){
      try {
        if(await findUser(req.body.email, req.body.password)){
          next();
        }
        else {
          return res.status(401).json({message: "incorrect credentials provided"});
        }
        } catch (err) {
        return next(err)
      }
    } 
  
  if(!validObject){
  return res.status(401).json({message: "incorrect credentials provided"});
  }
}

const validateToken = (req, res, next) => {

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1];

  if (!token){
    return res.status(400).send({message: "token not provided"});
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data
    next();
  } catch (err) {
      if (err.message === "jwt expired"){
        return res.status(401).send({message: "token expired"});
      }
      return res.status(401).send({message: err.message});
  }
}


export { validateObject, validateUser, validateLogin, validateToken }