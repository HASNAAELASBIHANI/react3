import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-gray-700 text-white px-6 py-4 flex justify-evenly items-center">
        <div className="font-bold text-xl text-yellow-400">
        MyLogo </div>
      <ul className='flex gap-5 text-xl font-bold text-gray-600'>
        <li><Link to="/" className="hover:text-yellow-400">Home </Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About </Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact </Link></li>
      </ul>
    </div>
  )
}

export default Header
