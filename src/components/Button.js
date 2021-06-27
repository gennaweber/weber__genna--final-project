import React from 'react'

const Button = ({ link, type, children, position, logout }) => {

  return (
     <button type={type} onClick={logout ? e => logout(e) : ""} className={`button ${position}`}>
      { link 
        ? <a href={link}><h3>{children}</h3></a> 
        : <h3>{children}</h3>
      }
    </button>
  )
}

export default Button