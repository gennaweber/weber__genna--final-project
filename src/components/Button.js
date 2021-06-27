import React from 'react'

const Button = ({ link, type, children, position, logout }) => {
  return (
    <button onClick={e => logout(e)} type={type} className={`button ${position}`}>
      { link ? <a href={link}><h3>{children}</h3></a> :
        <h3>{children}</h3>
      }
    </button> 
  )
}

export default Button