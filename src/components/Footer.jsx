import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-blue-500 py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <a 
          href="https://github.com/vianafs" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/rafael-menezes-viana-undefined" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://instagram.com/itsnotviana" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-center mt-4">© 2024 Rafael. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
