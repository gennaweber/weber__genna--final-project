import React, {useState} from 'react'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  return (
      <section id="contact">
        <div class="contact-container">
          <h2>GET IN TOUCH</h2>
          <p>Have a project in mind? Want to take your website to the next level? Let's chat about it.</p>
          <form id="contactForm">
            <input type="text" id="myName" name="myName" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <br/>
            <input type="email" id="myEmail" name="myEmail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value) }/>
            <br/>
            <textarea rows="10" cols="30" id="myComments" name="myComments" placeholder="What can I help you with?" value={content} onChange={e => setContent(e.target.value)}></textarea>
            <br/>
            <button type="submit" class="submit"><h3>SUBMIT</h3></button>   
          </form>
        </div>
    </section>
  )
}

export default Contact