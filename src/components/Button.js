import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ link, type, children, position, logout }) => {

  return (
     <motion.button
      whileHover={{scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={type} 
      onClick={logout ? e => logout(e) : ""} 
      className={`button ${position}`}>
      { link 
        ? <a href={link}><h3>{children}</h3></a> 
        : <h3>{children}</h3>
      }
    </motion.button>
  )
}

export default Button