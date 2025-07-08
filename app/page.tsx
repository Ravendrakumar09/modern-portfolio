import { IoLogoGithub } from "react-icons/io5";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaRegUser,
  FaRegFile,
  FaRegEnvelope,
} from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { IoHomeOutline, IoDocumentTextOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineCustomerService } from "react-icons/ai";
import Image from "next/image";
import profile from "../assets/ravi-image.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-700">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-[#040b14] text-white p-4">
        <div className="flex flex-col items-center">
          <Image
            src={profile}
            alt="Profile picture"
            className="w-32 h-32 rounded-full shadow-lg bg-gray-700 p-1 object-cover border-4"
          />
          <h1 className="text-2xl font-bold text-center mt-4">
            Ravi Kumar Singh
          </h1>
          <p className="text-center text-gray-400">Web Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3 mt-4 text-xl">
          <a
            className="bg-gray-400 hover:bg-gray-200 p-2 rounded-full text-black"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            className="bg-gray-400 hover:bg-gray-200 p-2 rounded-full text-black"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="bg-gray-400 hover:bg-gray-200 p-2 rounded-full text-black"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            className="bg-gray-400 hover:bg-gray-200 p-2 rounded-full text-black"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdFacebook />
          </a>
          <a
            className="bg-gray-400 hover:bg-gray-200 p-2 rounded-full text-black"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mt-10 ml-8 space-y-8 text-gray-400">
          <a href="#home" className="flex items-center hover:text-white">
            <IoHomeOutline className="mr-2" /> Home
          </a>
          <a href="#about" className="flex items-center hover:text-white">
            <FaRegUser className="mr-2" /> About
          </a>
          <a href="#resume" className="flex items-center hover:text-white">
            <IoDocumentTextOutline className="mr-2" /> Resume
          </a>
          <a href="#portfolio" className="flex items-center hover:text-white">
            <FaRegEnvelope className="mr-2" /> Portfolio
          </a>
          <a href="#services" className="flex items-center hover:text-white">
            <AiOutlineCustomerService className="mr-2" /> Services
          </a>
          <div className="flex items-center">
            <FaRegFile className="mr-2" />
            <select className="bg-transparent text-gray-400 focus:outline-none">
              <option value="dropdown">Dropdown</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <a href="#contact" className="flex items-center hover:text-white">
            <TfiEmail className="mr-2" /> Contact
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto scroll-smooth snap-y snap-mandatory">
        {/* Home Section */}
        <section
          id="home"
          className="w-full h-screen bg-[url('../assets/image02.jpg')] bg-contain bg-no-repeat bg-center flex flex-col items-start justify-center snap-start"
        >
          <h1 className="text-4xl font-light text-white mb-4 ml-8">Ravendra Kumar</h1>
           <p className="text-white text-2xl flex justify-center items-center text-center mt-4 ml-8">
            I'm&nbsp;
            <span className="typewriter ml-2">Frontend Developer</span>
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full h-screen bg-blue-600 flex flex-col items-center justify-center snap-start"
        >
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-center max-w-xl">
            I have a background in computer science and specialize in front-end
            development, with experience in back-end technologies as well.
          </p>
        </section>

        {/* Resume Section */}
        <section
          id="resume"
          className="w-full h-screen bg-blue-700 flex flex-col items-center justify-center snap-start"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Resume</h2>
          <p className="text-white">
            You can view my resume{" "}
            <a
              href="/path/to/resume.pdf"
              className="text-blue-200 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="w-full h-screen bg-blue-800 flex flex-col items-center justify-center snap-start"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-white">
            Check out my portfolio to see some of the projects I have worked on.
          </p>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full h-screen bg-blue-900 flex flex-col items-center justify-center snap-start"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
          <p className="text-white">
            I offer a range of web development services. If you're interested in
            working with me, feel free to{" "}
            <a href="#contact" className="text-blue-200 underline">
              contact me
            </a>
            .
          </p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full h-screen bg-blue-800 flex flex-col items-center justify-center snap-start"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p className="text-white">
            If you have any questions or would like to get in touch, please feel
            free to{" "}
            <a href="#contact" className="text-blue-200 underline">
              contact me
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
