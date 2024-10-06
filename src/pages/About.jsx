import { useState } from 'react';
import programmer from '../assets/images/programmer.jpeg';
import { FaHtml5, FaJs, FaCss3, FaReact, FaBootstrap, FaPython, FaFigma, FaGithubSquare, FaTrello } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="p-4">
      <div className='flex flex-col md:flex-row w-full justify-center items-center my-10'>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white">About me</h1>
          <p className="text-2xl text-white mt-4">
            Hello! I am a Software Engineering student and a Math and English
            teacher at Kumon. I have a keen interest in programming, particularly
            with Python and React, as well as exploring ethical hacking. I am always
            seeking new challenges and opportunities for growth. If you would like to
            collaborate or exchange ideas, feel free to get in touch!
          </p>
        </div>
        <img src={programmer} alt="programmer cartoon" className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full mt-8 md:mt-0 md:ml-8' />
      </div>

      <div className="mt-12">
        <h1 className="text-3xl font-bold text-center text-white">Skills</h1>
        <h2 className="text-center text-2xl text-white mt-4">I'm striving to never stop learning and improving</h2>
        <div className="flex justify-around flex-wrap gap-8 my-8">
          <div className="rounded-full bg-orange-600 w-[150px] h-[150px] flex items-center justify-center">
            <FaHtml5 className="w-[100px] h-[100px] fill-white" />
          </div>
          <div className="rounded-full bg-white w-[150px] h-[150px] flex items-center justify-center">
            <SiTailwindcss className="w-[100px] h-[100px] fill-blue-500" />
          </div>
          <div className="rounded-full bg-black w-[150px] h-[150px] flex items-center justify-center">
            <FaJs className="w-[100px] h-[100px] fill-yellow-300"/>
          </div>
          <div className="rounded-full bg-blue-500 w-[150px] h-[150px] flex items-center justify-center">
            <FaCss3 className="w-[100px] h-[100px] fill-white"/>
          </div>
          <div className="rounded-full bg-white w-[150px] h-[150px] flex items-center justify-center">
            <FaReact className="w-[100px] h-[100px] fill-teal-300"/>
          </div>
          <div className="rounded-full bg-white w-[150px] h-[150px] flex items-center justify-center">
            <FaBootstrap className="w-[100px] h-[100px] fill-purple-700"/>
          </div>
          <div className="rounded-full bg-green-900 w-[150px] h-[150px] flex items-center justify-center">
            <FaPython className="w-[100px] h-[100px] fill-white"/>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-3xl font-bold text-center text-white">Tools I use</h1>
        <div className="flex justify-around flex-wrap gap-8 my-8">
          <div className="rounded-full bg-white w-[150px] h-[150px] flex items-center justify-center">
            <VscVscode className="w-[100px] h-[100px] fill-blue-500"/>
          </div>
          <div className="rounded-full bg-white w-[150px] h-[150px] flex items-center justify-center">
            <FaFigma className="w-[100px] h-[100px] fill-red-600"/>
          </div>
          <div className="rounded-full bg-white w-[150px] h-[150px] flex items-center justify-center">
            <FaGithubSquare className="w-[100px] h-[100px] fill-black"/>
          </div>
          <div className="rounded-full bg-white w-[150px] h-[150px] flex items-center justify-center">
            <FaTrello className="w-[100px] h-[100px] fill-blue-600"/>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-bold text-center text-white">Get in touch</h1>
        <form className="max-w-lg mx-auto mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg"
              rows="4"
              placeholder="Your message"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default About;
