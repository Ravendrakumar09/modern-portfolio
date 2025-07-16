"use client";
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
import Image from "next/image";
import profile from "../assets/ravi-image.jpeg";
import projectImage1 from "../assets/project-image1.png";
import movieposter from "../assets/movie-poster.png";
import todoposter from "../assets/todo-poster.png";
import { useEffect, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegFileImage } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuDot } from "react-icons/lu";

export default function Home() {
  const words = ["Frontend Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let target = 252; // Target number for the counter
  let duration = 2000; // Duration in milliseconds for the counter to reach the target

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentWord.length) {
            setDeleting(true);
          }
        } else {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 100 : 120
    ); // typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, subject, message });
    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleMenuToggle = () => {
    console.log("Menu toggled");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-700 overflow-scroll">
      {/* Sidebar */}
      <div className="hidden lg:block w-full lg:w-1/5 bg-[#040b14] text-white p-4">
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
        <div>
          <button
            className="block lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-600 rounded-sm text-white"
            onClick={() => handleMenuToggle()}
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
        <section
          id="home"
          className="w-full h-screen bg-[url('../assets/image02.jpg')] bg-contain bg-no-repeat bg-center flex flex-col items-start justify-center snap-start"
        >
          <h1 className="text-4xl font-light text-white mb-4 ml-4">
            Ravendra Kumar
          </h1>
          <p className="text-white text-2xl flex justify-center items-center text-center mt-4 ml-4">
            I'm
            <span className="text-sky-400 ml-2 border-r-2 border-white pr-1 animate-pulse underline">
              {text}
            </span>
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col w-full min-h-screen bg-white snap-start px-4 py-8"
        >
          <h2 className="text-3xl font-bold text-black underline mb-6">
            About Me
          </h2>

          <p className="text-black mb-8">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row w-full md:gap-8 ">
            {/* Image */}
            <div className="flex justify-center md:justify-start md:w-1/3">
              <Image
                src={profile}
                alt="Profile"
                className="w-64 h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col md:w-2/3 ">
              <h1 className="text-2xl font-semibold mb-4">
                UI/UX Designer & Frontend Developer
              </h1>

              <p className="text-gray-700 font-light mb-4">
                Magnam dolores commodi suscipit. Necessitatibus eius quidem
                consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                velit. Quisquam.
              </p>

              {/* Grid Info Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-4">
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Birthday:</span>
                  <span className="ml-1">03 January 2002</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Age:</span>
                  <span className="ml-1">23</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Website:</span>
                  <span className="ml-1">www.example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Degree:</span>
                  <span className="ml-1">Bachelor's</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Phone:</span>
                  <span className="ml-1">+91 9720227209</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Email:</span>
                  <span className="ml-1">ravendrakumar0102@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">City:</span>
                  <span className="ml-1">Chicago</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Freelance:</span>
                  <span className="ml-1">Available</span>
                </div>
              </div>

              <p className="text-gray-700 font-light">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-6">
            <span className="flex flex-row ">
              <span className="text-blue-400 text-4xl pl-2 pt-1">
                <BsEmojiSmile />
              </span>
              <div className="flex flex-col pl-4 space-y-1">
                <span className="text-4xl font-semibold">{count}</span>
                <span className="text-xs font-semibold text-emerald-700 items-start">
                  Happy Clients
                </span>
                <span className="text-xs">consequuntur quae</span>
              </div>
            </span>
            <span>
              <span className="flex flex-row ">
                <span className="text-blue-400 text-4xl pl-2 pt-1">
                  <FaRegFileImage />
                </span>
                <div className="flex flex-col pl-4 space-y-1">
                  <span className="text-4xl font-semibold">521</span>
                  <span className="text-xs font-semibold text-emerald-700 items-start">
                    Projects Completed
                  </span>
                  <span className="text-xs">consequuntur quae</span>
                </div>
              </span>
            </span>
            <span className="">
              <span>
                <span className="flex flex-row ">
                  <span className="text-blue-400 text-4xl pl-2 pt-1">
                    <TfiHeadphoneAlt />
                  </span>
                  <div className="flex flex-col pl-4 space-y-1">
                    <span className="text-4xl font-semibold">1453</span>
                    <span className="text-xs font-semibold text-emerald-700 items-start">
                      Hours Of Support
                    </span>
                    <span className="text-xs">consequuntur quae</span>
                  </div>
                </span>
              </span>
            </span>
            <span className="">
              <span>
                <span className="flex flex-row ">
                  <span className="text-blue-400 text-4xl pl-2 pt-1">
                    <HiOutlineUsers />
                  </span>
                  <div className="flex flex-col pl-4 space-y-1">
                    <span className="text-4xl font-semibold">32</span>
                    <span className="text-xs font-semibold text-emerald-700 items-start">
                      Hard Workers
                    </span>
                    <span className="text-xs">consequuntur quae</span>
                  </div>
                </span>
              </span>
            </span>
          </div>
          <div className="w-full bg-[#f4fafd] my-10">
            <h2 className="text-3xl font-bold text-black underline mb-6">
              Skills
            </h2>
            <p className="text-black mb-8 w-full">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-center px-1">
                  <p>HTML</p>
                  <p>99%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-2">
                  <p>React JS</p>
                  <p>75%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-1">
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-1">
                  <p>Angular</p>
                  <p>70%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-1">
                  <p>JavaScript</p>
                  <p>80%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-1">
                  <p>React Native</p>
                  <p>78%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section
          id="resume"
          className="flex flex-col w-full min-h-screen bg-white snap-start px-4 py-8"
        >
          <h2 className="text-3xl font-bold text-black underline mb-6">
            Resume
          </h2>
          <p className="text-black mb-8">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 justify-between">
            {/* EDUCATION */}
            <div className="border-dotted border-2 border-gray-300 rounded-lg p-4 shadow-md">
              <h1 className="font-semibold text-2xl mb-4">Education</h1>
              <div className="m-2 relative pl-6">
                {/* vertical line (length stops after last item) */}
                <div className="absolute top-6 left-3 h-[calc(100%-3rem)] border-l-2 border-blue-500"></div>

                {/* first item */}
                <div className="flex flex-col p-4 relative">
                  {/* dot */}
                  <div className="absolute -left-4.5 top-6 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                  <h2 className="text-lg font-semibold">
                    Bachelor of Science in Computer Science
                  </h2>
                  <p className="text-gray-600">
                    Dr. A.P.J. Abdul Kalam Technical University Lucknow Uttar
                    Pradesh
                  </p>
                  <p>2021 - 2024</p>
                </div>

                {/* second item */}
                <div className="flex flex-col p-4 relative">
                  {/* dot */}
                  <div className="absolute -left-4.5 top-6 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                  <h2 className="text-lg font-semibold">
                    Diploma in Engineering
                  </h2>
                  <p className="text-gray-600">
                    Board of Technical Education Lucknow Uttar Pradesh
                  </p>
                  <p>2018 - 2021</p>
                </div>
              </div>
            </div>
            {/* PROFESSIONAL EXPERIENCE */}
            <div className="border-dotted border-2 border-gray-300 rounded-lg p-4 shadow-md">
              <h1 className="font-semibold text-2xl mb-4">
                Professional Experience
              </h1>
              <div className="m-2 relative pl-6">
                {/* vertical line */}
                <div className="absolute top-6 left-3 h-[calc(100%-3rem)] border-l-2 border-blue-500"></div>

                {/* first job */}
                <div className="flex flex-col p-4 relative">
                  <div className="absolute -left-4.5 top-6 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                  <h2 className="text-lg font-semibold">
                    Frontend Developer (Full-Time)
                  </h2>
                  <p className="text-gray-600">SHWET KAPILA PRIVATE LIMITED</p>
                  <p>Jan 2024 - Jun 2025</p>
                </div>

                {/* second job */}
                <div className="flex flex-col p-4 relative">
                  <div className="absolute -left-4.5 top-6 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                  <h2 className="text-lg font-semibold">
                    Frontend Developer Intern
                  </h2>
                  <p className="text-gray-600">SHWET KAPILA PRIVATE LIMITED</p>
                  <p>Jul 2024 - Dec 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="flex flex-col w-full min-h-screen bg-white snap-start px-4 py-8"
        >
          <h2 className="text-3xl font-bold text-black underline mb-6">
            Portfolio
          </h2>
          <p className="text-black mb-8">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Portfolio Item 1 */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <Image
                    src={todoposter}
                    alt="todo poster"
                    className="w-full h-56  object-fill rounded-lg mb-4 "
                  />
                  <h3 className="text-lg font-semibold mb-2">Todo Application</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    View Project <LuDot className="ml-1" />
                  </a>
                </div>
                {/* Portfolio Item 2 */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <Image
                    src={projectImage1}
                    alt="movie poster"
                    className="w-full h-56 object-fill rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Weather Website</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    View Project <LuDot className="ml-1" />
                  </a>
                </div>
                {/* Portfolio Item 3 */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <Image
                    src={movieposter}
                    alt="Portfolio Item"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Movie Website</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    View Project <LuDot className="ml-1" />
                  </a>
                </div>
                {/* Portfolio Item 4 */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <Image
                    src={profile}
                    alt="Portfolio Item"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Chat App</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    View Project <LuDot className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col w-full min-h-screen bg-white snap-start px-4 py-8"
        >
          <div className="my-4 mx-2">
            <h2 className="text-3xl font-bold text-black underline mb-6">
              Contact
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[38%_58%] sm:gap-8 justify-between">
              {/* Address */}
              <div className="bg-white shadow-md m-2 w-full">
                <div className="m-4 space-y-4">
                  <div className="py-4 flex">
                    <span className="flex items-center justify-between bg-[#eef7fd] p-2 text-blue-600 rounded-full">
                      <CiLocationOn size={30} />
                    </span>
                    <div className="ml-4">
                      <span className="text-lg font-semibold text-gray-800">
                        Address
                      </span>
                      <p className="text-gray-600 text-sm">
                        239 North Clark Street, Chicago, IL 60610
                      </p>
                    </div>
                  </div>
                  <div className="py-4 flex">
                    <span className="flex items-center  justify-between bg-[#eef7fd] p-2 text-blue-600 rounded-full">
                      <IoCallOutline size={30} />
                    </span>
                    <div className="ml-4">
                      <span className="text-lg font-semibold text-gray-800">
                        Call Us
                      </span>
                      <p className="text-gray-600 text-sm">+91 9720227209</p>
                    </div>
                  </div>
                  <div className="py-4 flex">
                    <span className="flex items-center justify-between bg-[#eef7fd] p-2 text-blue-600 rounded-full">
                      <TfiEmail size={30} />
                    </span>
                    <div className="ml-4">
                      <span className="text-lg font-semibold text-gray-800">
                        Email Us
                      </span>
                      <p className="text-gray-600 text-sm">
                        ravendrakumar0102@gmail.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.2795484901534!2d78.290176!3d28.1379772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974b50021e578ef%3A0x92084eebfeac6048!2sRavi%20Kumar%20Singh%20House!5e0!3m2!1sen!2sin!4v1712264182111!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* form */}
              <div className="bg-white shadow-md m-2 w-full">
                <div className="m-4">
                  <form action="onSubmit" className="space-y-4">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 font-light">
                          Your Name
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          required
                          className="border border-[#d4d4d4] py-2 px-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 font-light">
                          Your Email
                        </label>
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="border border-[#d4d4d4] py-2 px-2"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                      <label htmlFor="subject" className="mb-1 font-light">
                        Subject
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject"
                        required
                        className="border border-[#d4d4d4] py-2 px-2"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="mb-1 font-light">
                        Message
                      </label>
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        rows={10}
                        required
                        className="border border-[#d4d4d4] py-2 px-2"
                      ></textarea>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col items-center">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-[#119ddc] hover:bg-[#54b2dc] text-white px-6 py-2 rounded-4xl transition-all"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
