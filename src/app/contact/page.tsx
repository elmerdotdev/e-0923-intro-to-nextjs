import type { Metadata } from 'next'
import ContactForm from './components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - My Website',
  description: 'This is the contact page of my website.'
}

const page = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default page