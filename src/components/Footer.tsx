'use client'

const Footer = () => {

  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Footer