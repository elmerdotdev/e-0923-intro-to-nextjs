import Welcome from "@/components/Welcome"
import type { Metadata } from 'next'

export const metadata: Metadata= {
  title: 'Home - My Website',
  description: 'This is the homepage of my website.'
}

const Home = () => {
  return (
    <div className="container mx-auto">
      <Welcome firstname="Elmer" />
    </div>
  )
}

export default Home