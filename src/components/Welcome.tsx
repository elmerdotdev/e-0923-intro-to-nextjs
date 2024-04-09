type Props = {
  firstname: string
}

const Welcome = ({ firstname } : Props) => {
  return (
    <div className="text-center">Welcome, {firstname}</div>
  )
}

export default Welcome