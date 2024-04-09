import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About - My Website',
  description: 'This is the about page of my website.'
}

const page = () => {
  return (
    <div className="container mx-auto mt-10">
      This is the about page
    </div>
  )
}

export default page