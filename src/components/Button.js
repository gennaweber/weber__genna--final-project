import React from 'react'
import { motion } from 'framer-motion'

const CustomButton = ({ link, type, children, position, onclick }) => {

  return (
     <motion.button
      whileHover={{scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={type} 
      onClick={onclick ? (e) => onclick(e) : console.log("Thanks for clicking!")}
      className={`button ${position}`}>
      { link 
        ? <a href={link}><h3>{children}</h3></a> 
        : <h3>{children}</h3>
      }
    </motion.button>
  )
}

export default CustomButton