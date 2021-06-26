  const validateName = (name) =>{
    if(name.length <= 1) {
      return false 
    } else {
      return true
    }
  }

  const validateEmail = (email) => {
    if(!email.includes("@") || !email.includes(".")) {
      return false
    } else {
      return true
    }
  }

  const validateContent = (content) => {
    if(content.length > 15){
      return true
    } else {
      return false
    }
  }

  const validatePassword = (password) => {
    if (password.length > 8){
      return true
    }
    return false
  }

export { validateName, validateEmail, validateContent, validatePassword }