import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import profile from "../assets/ravi-image.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* sidebar */}
      <div className="w-full md:w-1/4 bg-[#040b14] text-white p-4">
        <div className="flex flex-col items-center">
          <Image
            src={profile}
            alt="Profile picture"
            className="w-48 h-48 rounded-full shadow-lg object-cover border-4 bg-gray-900"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mt-4">
            Ravi Kumar Singh
          </h1>
          <p className="text-center text-gray-400">Web Developer</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4 text-xl">
          <a
            className="backdrop-blur-lg p-2  bg-gray-400 hover:bg-gray-200 transition-all text-black rounded-full"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            className="backdrop-blur-lg p-2 text-xl bg-gray-400 hover:bg-gray-200 transition-all text-black rounded-full"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="backdrop-blur-lg p-2 text-xl bg-gray-400 hover:bg-gray-200 transition-all text-black rounded-full"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            className="backdrop-blur-lg p-2 text-xl bg-gray-400 hover:bg-gray-200 transition-all text-black rounded-full"
            href="https://facebook.com"
            target="blank"
          >
            <MdFacebook />
          </a>
          <a
            className="backdrop-blur-lg p-2 text-xl bg-gray-400 hover:bg-gray-200 transition-all text-black rounded-full"
            href="https://instagram.com"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      {/* main content */}
      <div className="w-full md:w-3/4 p-4 bg-blue-500 h-screen">
        main content
      </div>
    </div>
  );
}
