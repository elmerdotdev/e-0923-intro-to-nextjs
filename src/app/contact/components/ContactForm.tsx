'use client'

import { FormEvent, useState } from "react"

const ContactForm = () => {
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('FORM SUBMITTED')
  }

  return (
    <div>
      {message}
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} className="text-black" onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm