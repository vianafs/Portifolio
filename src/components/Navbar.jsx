import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 flex flex-col md:flex-row justify-between items-center text-blue-500">
      <h1 className='font-bold text-[45px]'>Rafael Viana</h1>
      <button 
        className="md:hidden text-3xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} gap-7 mr-4`}>
        <li>
          <Link to="/" className="hover:text-gray-300 text-[32px]">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300 text-[32px]">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-300 text-[32px]">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
