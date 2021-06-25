import React from "react"

const ErrorMessage = ({ message }) => {
    return (
      <p className="error"><i className="fas fa-exclamation-triangle"></i>{message}</p>
    )
}

export default ErrorMessage