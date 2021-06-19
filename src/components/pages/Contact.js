import React, {useState} from 'react'

const Contact = () => {

  const [name, setName] = useState({value: "", valid: true})
  const [email, setEmail] = useState({value: "", valid: true})
  const [content, setContent] = useState({value: "", valid: true})

  // if (name.value.length < 2 || name.value.length > 40) {
  //   setName({valid: false})
  // } else if (name.value.length >= 2){
  //   setName({valid: true})
  // }

  console.log(name.value.length)

  const errMessage = (type) => {
    return (
      <p className="error"><i className="fas fa-exclamation-triangle"></i>Please include a valid {type}</p>
    )
  }

  return (
      <section id="contact">
        <div className="contact-container">
          <h2>GET IN TOUCH</h2>
          <p>Have a project in mind? Want to take your website to the next level? Let's chat about it.</p>
          <form>
            <input className={!name.valid ? "error-input" : ""} type="text" id="myName" name="myName" placeholder="Name" value={name.value} onChange={e => setName(e.target.value)}/>
            {!name.valid && errMessage("name")}
            <br/>
            <input className={!email.valid ? "error-input" : ""} type="email" id="myEmail" name="myEmail" placeholder="Email" value={email.value} onChange={e => setEmail(e.target.value) }/>
            {!email.valid && errMessage("email")}
            <br/>
            <textarea className={!content.valid ? "error-input" : ""} rows="10" cols="30" id="myComments" name="myComments" placeholder="What can I help you with?" value={content.value} onChange={e => setContent(e.target.value)}></textarea>
            {!content.valid && errMessage("message")}
            <br/>
            <button type="submit" className="submit"><h3>SUBMIT</h3></button>   
          </form>
        </div>
    </section>
  )
}

export default Contact