import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for is lost :('
}

const NotFound = () => {
  return (
    <div>
      Page you are looking for is not found. Sorry!
    </div>
  )
}

export default NotFound