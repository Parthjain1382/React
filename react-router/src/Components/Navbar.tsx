import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex gap-2 items-center p-4 bg-gray-200">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}
