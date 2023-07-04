import React, { useState } from 'react'
import {IconClose} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { activeEmail } from '../redux/actions'
import {crearEmail} from '../redux/firebase'
export default function Email() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch()
  const activeEmailStore = useSelector(state => state.activeModal)
  const [loading, setLoading] = useState(false)
  
  //const [activeEmail, setActiveEmail] = useState(false)
  const bodyMail = (text) => `<!DOCTYPE html>
  <html>
  <head>
      <title>Hi Amadeo👋</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f6f6f6;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 4px;
          }
          h1 {
              color: #444444;
          }
          p {
              color: #666666;
              line-height: 1.5;
          }
          
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Hi, Amadeo 👋</h1>
          <p>${text}</p>
      </div>
  </body>
  </html>
  `
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    crearEmail({to:email, html:bodyMail(message), subject: 'Hi Amadeo, I want to talk👋', text: message})
    .then(()=>{
      setLoading(false)
      dispatch(activeEmail(false))
    }).catch(console.log)
  };
  
  const cerrarModal = (value) =>{
    dispatch(activeEmail(value))
  }

  return (
    <div className={`${activeEmailStore === true? 'flex fixed top-0 z-[110] justify-center items-center ' : 'hidden'} w-screen h-screen bg-tertiary/50 `}>
      <div className='md:w-[40%] w-[90%]  md:h-[60%] h-[70%]  rounded-lg bg-white flex flex-col justify-center items-center md:px-20 p-6'>
        <div className='w-full text-primary justify-start ease-in duration-300' onClick={() => cerrarModal(false)}>
          <IconClose/>
        </div>
        <h1 className='text-4xl py-10 text-tertiary'><strong className='text-primary'>Contact</strong> me</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border border-primary text-tertiary font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="10"
            className="resize-none px-4 py-2 border border-primary text-tertiary font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
          />
          <button type="submit" className="px-4 py-2 bg-primary  text-white rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-400">
            {!loading? "Send" : "..."}
          </button>
        </form>
      </div>
    </div>    
  )
}
