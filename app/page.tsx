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
import { AiOutlineCustomerService } from "react-icons/ai";
import Image from "next/image";
import profile from "../assets/ravi-image.jpeg";
import ecommerceImage from "../assets/ecommerce_dashboard.png";
import portfolioImage from "../assets/portfolio_dashboard.jpeg";
import weatherImage from "../assets/weather_dashboard.png";
import chatAppImage from "../assets/chatapp_image.jpeg";
import { useEffect, useState, useMemo } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegFileImage } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import {
  FaBriefcase,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCode,
  FaPalette,
  FaServer,
  FaShoppingCart,
  FaBolt,
  FaTools,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Home() {
  const words = useMemo(() => ["Frontend Developer"], []);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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
  }, [charIndex, deleting, wordIndex, words]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I&apos;ll get back to you soon.",
        });
    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-700 overflow-scroll">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-700/95 backdrop-blur-md text-white p-3.5 rounded-xl shadow-2xl border border-cyan-400/30 hover:bg-blue-600/95 hover:border-cyan-300/50 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(147, 197, 253, 0.2)",
        }}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-[#040b14] text-white p-4 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col items-center mt-8">
          <Image
            src={profile}
            alt="Profile picture"
            className="w-32 h-32 rounded-full shadow-lg bg-gray-700 p-1 object-cover border-4"
          />
          <h1 className="text-2xl font-bold text-center mt-4">
            Ravendra Kumar
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
          <a
            href="#home"
            className="flex items-center hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <IoHomeOutline className="mr-2" /> Home
          </a>
          <a
            href="#about"
            className="flex items-center hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaRegUser className="mr-2" /> About
          </a>
          <a
            href="#resume"
            className="flex items-center hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <IoDocumentTextOutline className="mr-2" /> Resume
          </a>
          <a
            href="#portfolio"
            className="flex items-center hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaRegEnvelope className="mr-2" /> Portfolio
          </a>
          <a
            href="#services"
            className="flex items-center hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
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
          <a
            href="#contact"
            className="flex items-center hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <TfiEmail className="mr-2" /> Contact
          </a>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-full lg:w-1/5 bg-[#040b14] text-white p-4">
        <div className="flex flex-col items-center">
          <Image
            src={profile}
            alt="Profile picture"
            className="w-32 h-32 rounded-full shadow-lg bg-gray-700 p-1 object-cover border-4"
          />
          <h1 className="text-2xl font-bold text-center mt-4">
            Ravendra Kumar
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
          className="relative w-full h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black flex flex-col items-center justify-center snap-start overflow-hidden"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('../assets/image01.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-gray-900/80"></div>
          </div>
          
          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Ravendra Kumar
              </span>
          </h1>
            <p className="text-white text-2xl md:text-3xl lg:text-4xl flex items-center justify-center gap-2">
              <span className="text-gray-300">I&apos;m</span>
              <span className="text-blue-400 ml-2 border-r-2 border-blue-400 pr-2 animate-pulse font-semibold">
              {text}
            </span>
          </p>
            
            {/* Decorative elements */}
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
            </div>
          </div>
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
            I specialize in building modern, responsive, and performance-first
            interfaces with HTML, CSS, JavaScript, React, Next.js, and Tailwind
            CSS. With 1.5 years of hands-on experience, I focus on clean,
            scalable front-end solutions that bring design intentions to life
            while keeping accessibility and maintainability front and center.
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
                Frontend Developer
              </h1>

              <p className="text-gray-700 font-light mb-4">
                I work closely with product designers and backend engineers to
                refine requirements, run rapid UI iterations, and deliver
                seamless digital experiences. Whether building dashboards,
                marketing sites, or complex web apps, I prioritize reliable
                handoffs, performance budgets, and thoughtful documentation.
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
                  <span className="ml-1">www.ravendrakumar.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Degree:</span>
                  <span className="ml-1">Bachelor of Technology</span>
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
                  <span className="ml-1">Dibai</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineArrowRight size={20} />
                  <span className="font-semibold">Freelance:</span>
                  <span className="ml-1">Available</span>
                </div>
              </div>

              {/* <p className="text-gray-700 font-light">
                When I am not polishing components, I document design tokens,
                review pull requests for accessibility, and mentor junior devs
                on responsive best practices. Clear communication keeps our
                squads shipping faster without sacrificing quality.
              </p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-6">
            <span className="flex flex-row ">
              <span className="text-blue-400 text-4xl pl-2 pt-1">
                <FaRegFileImage />
              </span>
              <div className="flex flex-col pl-4 space-y-1">
                <span className="text-4xl font-semibold">20+</span>
                <span className="text-xs font-semibold text-blue-600 items-start">
                  Projects Completed
                </span>
                <span className="text-xs">Web applications & interfaces</span>
              </div>
            </span>
            <span>
              <span className="flex flex-row ">
                <span className="text-blue-400 text-4xl pl-2 pt-1">
                  <BsEmojiSmile />
                </span>
                <div className="flex flex-col pl-4 space-y-1">
                  <span className="text-4xl font-semibold">1.5</span>
                  <span className="text-xs font-semibold text-blue-600 items-start">
                    Years Experience
                  </span>
                  <span className="text-xs">Professional development</span>
                </div>
              </span>
            </span>
            <span className="">
              <span>
                <span className="flex flex-row ">
                  <span className="text-blue-400 text-4xl pl-2 pt-1">
                    <IoLogoGithub />
                  </span>
                  <div className="flex flex-col pl-4 space-y-1">
                    <span className="text-4xl font-semibold">8+</span>
                    <span className="text-xs font-semibold text-blue-600 items-start">
                      Technologies
                    </span>
                    <span className="text-xs">Modern stack expertise</span>
                  </div>
                </span>
              </span>
            </span>
            <span className="">
              <span>
                <span className="flex flex-row ">
                  <span className="text-blue-400 text-4xl pl-2 pt-1">
                    <TfiHeadphoneAlt />
                  </span>
                  <div className="flex flex-col pl-4 space-y-1">
                    <span className="text-4xl font-semibold">100%</span>
                    <span className="text-xs font-semibold text-blue-600 items-start">
                      Client Satisfaction
                    </span>
                    <span className="text-xs">Delivered on time & quality</span>
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
              I leverage a comprehensive technology stack encompassing semantic
              HTML5, modern CSS3, and component-driven JavaScript frameworks. My
              development approach emphasizes adherence to design system
              principles, strict performance optimization, and WCAG accessibility
              standards to deliver scalable, maintainable, and enterprise-grade
              web applications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-center px-1">
                  <p>HTML</p>
                  <p>98%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "98%" }}
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
                  <p>Next.js</p>
                  <p>85%</p>
                </div>
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#dfe5e8]">
                    <div
                      className="bg-[#119ddc] h-2.5"
                      style={{ width: "85%" }}
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
                  <p>Node.js</p>
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
          className="flex flex-col w-full bg-white snap-start px-4 py-12"
        >
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-black underline mb-6">
              Resume
            </h2>
            <p className="text-gray-700 mb-10 max-w-3xl">
              Experienced Frontend Developer with 1.5 years of professional
              expertise in building modern, responsive web applications using
              React, Next.js, and modern JavaScript frameworks.
            </p>

            {/* Timeline Layout */}
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300/50 hidden md:block"></div>

              <div className="space-y-8">
                {/* Education Section */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div className="w-16 h-16 bg-[#119ddc] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0d8bc4] transition-colors">
                      <FaGraduationCap className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-semibold text-black">Education</h3>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="text-xl font-semibold text-black mb-2">
                        B.Tech – Computer Science & Engineering
                      </h4>
                      <p className="text-gray-600 font-medium mb-1">
                        Vivekananda College of Technology and Management, Aligarh
                      </p>
                      <p className="text-gray-500 text-sm">2021 – 2024</p>
                    </div>
                  </div>
                </div>

                {/* Professional Experience Section */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div className="w-16 h-16 bg-[#119ddc] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0d8bc4] transition-colors">
                      <FaBriefcase className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-2xl font-semibold text-black">
                        Professional Experience
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h4 className="text-xl font-semibold text-black mb-2">
                            Frontend Developer
                          </h4>
                          <p className="text-gray-600 font-medium mb-1">
                            Shwet Kapila Private Limited
                          </p>
                          <p className="text-gray-500 text-sm mb-4">Jan 2025 – Present</p>
                          <ul className="text-gray-700 space-y-2 list-disc list-inside">
                            <li>
                              Designed, developed, and maintained scalable web
                              applications using React.js and Next.js
                            </li>
                            <li>
                              Implemented code splitting, lazy loading, and asset
                              optimization, reducing load time by ~30%
                            </li>
                            <li>
                              Built responsive, pixel-perfect UI using Tailwind CSS for
                              all screen sizes
                            </li>
                            <li>
                              Collaborated closely with backend developers, designers,
                              and QA in Agile environment
                            </li>
                          </ul>
                          <p className="text-gray-600 text-sm mt-4">
                            <span className="font-semibold">Technologies:</span>{" "}
                            React.js, Next.js, React Native, Tailwind CSS, JavaScript, TypeScript,
                            Supabase, Node.js, Git
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h4 className="text-xl font-semibold text-black mb-2">
                            Frontend Developer Intern
                          </h4>
                          <p className="text-gray-600 font-medium mb-1">
                            Shwet Kapila Private Limited
                          </p>
                          <p className="text-gray-500 text-sm mb-4">Jul 2024 – Dec 2024</p>
                          <ul className="text-gray-700 space-y-2 list-disc list-inside">
                            <li>
                              Built reusable UI components using React.js and Tailwind
                              CSS
                            </li>
                            <li>
                              Improved responsiveness using Flexbox and CSS Grid
                            </li>
                            <li>
                              Assisted in bug fixing, UI refinement, and API integration
                            </li>
                            <li>
                              Participated in stand-ups, sprint planning, and code
                              reviews
                            </li>
                          </ul>
                          <p className="text-gray-600 text-sm mt-4">
                            <span className="font-semibold">Technologies:</span>{" "}
                            React.js, Tailwind CSS, JavaScript, Git, REST APIs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="mt-12 flex justify-center">
              <a
                href="/Ravendra_Kumar_Resume.pdf"
                className="bg-[#119ddc] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0d8bc4] transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
                <IoDocumentTextOutline size={20} />
                Download Resume
            </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="flex flex-col w-full min-h-screen bg-white snap-start px-4 py-12"
        >
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-black underline mb-6">
              Portfolio
            </h2>
            <p className="text-gray-700 mb-10 max-w-3xl">
              Here are some of my recent projects showcasing my skills in
              frontend development, React, Next.js, and modern web technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 - Real-Time Chat Application */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
              <div className="h-48 relative overflow-hidden">
                  <Image
                    src={chatAppImage}
                    alt="E-Commerce Platform"
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Real-Time Chat Application
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Developed a real-time chat system using Supabase Realtime.
                    Implemented Google OAuth authentication for secure access.
                    Added Supabase Storage for media/file sharing. Designed
                    modern, responsive UI using Tailwind CSS.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Supabase
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      OAuth
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Ravendrakumar09/chatapp"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoGithub size={18} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 - E-Commerce Platform */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={ecommerceImage}
                    alt="E-Commerce Platform"
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Built a dynamic e-commerce platform with authentication,
                    product listing, and cart. Integrated secure APIs for product
                    and order management. Created optimized, reusable UI
                    components.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      REST APIs
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Ravendrakumar09/sloozeecommerce"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoGithub size={18} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 - Portfolio Website */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={portfolioImage}
                    alt="Portfolio Website"
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Portfolio Website
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Designed and developed a responsive personal portfolio.
                    Showcased projects, skills, and certifications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Ravendrakumar09/modern-portfolio"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoGithub size={18} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 - Weather Dashboard */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
              <div className="h-48 relative overflow-hidden">
                  <Image
                    src={weatherImage}
                    alt="E-Commerce Platform"
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Weather Dashboard
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Built a responsive weather application with real-time data.
                    Implemented location search and 7-day forecast. Integrated
                    third-party Weather API.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                      Weather API
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Ravendrakumar09/angular-weather-web"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoGithub size={18} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="flex flex-col w-full min-h-screen bg-white snap-start px-4 py-12"
        >
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-black underline mb-6">
              Services
            </h2>
            <p className="text-gray-700 mb-10 max-w-3xl">
              I offer comprehensive web development services to help bring your
              digital ideas to life. From frontend development to full-stack
              solutions, I deliver high-quality, scalable applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1 - Frontend Development */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FaCode className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Frontend Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Custom web applications built with React.js and Next.js.
                  Responsive, mobile-first designs with component-based
                  architecture for scalable solutions.
                </p>
              </div>

              {/* Service 2 - UI/UX Design */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FaPalette className="text-purple-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  UI/UX Design & Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Modern, pixel-perfect interfaces using Tailwind CSS. Creating
                  intuitive user experiences with responsive designs that work
                  seamlessly across all devices.
                </p>
              </div>

              {/* Service 3 - Full-Stack Development */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FaServer className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Full-Stack Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete web solutions with RESTful API integration, Node.js
                  backend development, and Supabase database integration for
                  end-to-end applications.
                </p>
              </div>

              {/* Service 4 - E-Commerce Solutions */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FaShoppingCart className="text-orange-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  E-Commerce Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete e-commerce platforms with product management,
                  shopping cart functionality, secure checkout, and payment
                  integration.
                </p>
              </div>

              {/* Service 5 - Real-Time Applications */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <FaBolt className="text-pink-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Real-Time Applications
                </h3>
                <p className="text-gray-600 text-sm">
                  Real-time features including chat systems, live notifications,
                  and instant data updates using Supabase Realtime and WebSocket
                  technologies.
                </p>
              </div>

              {/* Service 6 - Performance Optimization */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <FaTools className="text-indigo-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 text-sm">
                  Code splitting, lazy loading, and asset optimization to improve
                  load times and enhance user experience. Reducing load time by
                  up to 30%.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-4">
                Interested in working together? Let&apos;s discuss your project!
              </p>
              <a
                href="#contact"
                className="bg-[#119ddc] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0d8bc4] transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
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
                        296 Dharmpur Dibai, Uttar Pradesh, India
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
                      <p className="text-gray-600 text-sm">ravendrakumar010@gmail.com</p>
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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Status Message */}
                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-lg ${
                          submitStatus.type === "success"
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-red-100 text-red-800 border border-red-300"
                        }`}
                      >
                        <p className="font-medium">{submitStatus.message}</p>
                      </div>
                    )}

                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 font-light">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          required
                          disabled={isSubmitting}
                          className="border border-[#d4d4d4] py-2 px-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 font-light">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          disabled={isSubmitting}
                          className="border border-[#d4d4d4] py-2 px-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject"
                        required
                        disabled={isSubmitting}
                        className="border border-[#d4d4d4] py-2 px-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="mb-1 font-light">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        rows={10}
                        required
                        disabled={isSubmitting}
                        className="border border-[#d4d4d4] py-2 px-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      ></textarea>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col items-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#119ddc] hover:bg-[#0d8bc4] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-4xl transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
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
