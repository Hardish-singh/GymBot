"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu


export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] text-white">
      <Head>
        <title>BALAJI FITNESS</title>
        <meta name="description" content="Best Gym in Town" />
      </Head>

      {/* Navbar */}
      <nav className="p-5 bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">BALAJI FITNESS</h1>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`absolute md:static top-16 right-5 bg-gray-800 md:bg-transparent p-5 md:p-0 md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 shadow-lg md:shadow-none rounded-lg md:rounded-none transition-all ${menuOpen ? "block" : "hidden md:flex"}`}>
        {/* import Link from "next/link"; */}

        
        <nav className=" text-white py-4 px-6">
      <ul className="flex justify-end space-x-6">
        <li>
          <Link href="/chat" className="hover:text-yellow-400 transition">  <Image 
      src="/ch.jpg" 
      alt="Gym Training" 
      width={44}  // Set an appropriate width
      height={44} // Set an appropriate height
      className="w-11" 
    /></Link>
        </li>
        <li>
          <Link href="#services" className="hover:text-yellow-400 transition">Services</Link>
        </li>
        <li>
          <Link href="#pricing" className="hover:text-yellow-400 transition">Pricing</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
        </li>
      </ul>
    </nav>

        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between py-24 px-8 bg-gradient-to-r via-gray-800 to-gray-900 text-white">
  {/* Left Side - Text Content */}
  <div className="md:w-1/2 text-left">
    <h2 className="text-4xl md:text-6xl font-extrabold">
      Achieve Your Fitness Goals
    </h2>
    <p className="text-lg md:text-xl mt-4">
      Join <span className="text-yellow-400 font-semibold">BALAJI FITNESS</span> to transform your body and mind with professional training, modern equipment, and personalized plans.
    </p>
    <button className="cursor-pointer mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
      Get Started
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 flex justify-center">
  <Image
    src="/it.webp"
    alt="Gym Training"
    width={500}  // Set an appropriate width
    height={300} // Set an appropriate height
    className="w-full md:w-3/4 rounded-lg shadow-lg"
  />
</div>
</header>


      {/* Services Section */}
      <section id="services" className="flex flex-col md:flex-row items-center justify-between p-10  text-white">
  {/* Left Side - Image */}
  <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
  <Image
    src="/ut.webp"  // Ensure this path is correct
    alt="Gym Services"
    width={500}  // Set an appropriate width
    height={300} // Set an appropriate height
    className="w-full max-w-md rounded-lg shadow-lg"
  />
</div>

  {/* Right Side - Text Content */}
  <div className="md:w-1/2 text-left md:pl-10">
    <h3 className="text-3xl md:text-5xl font-bold">
      Our Services
    </h3>
    <p className="mt-4 text-lg">
      We offer a variety of fitness solutions to help you achieve your goals.
    </p>
    <ul className="mt-4 space-y-3 text-lg">
      <li>✅ Personal Training</li>
      <li>✅ Group Classes</li>
      <li>✅ Nutrition Plans</li>
      <li>✅ Strength & Conditioning</li>
    </ul>
    <button className=" cursor-pointer mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
      Explore Services
    </button>
  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="flex flex-col md:flex-row items-center justify-between py-24 px-8 bg-gradient-to-r via-gray-800 to-gray-900 text-white">
  {/* Left Side - Text Content */}
  <div className="md:w-1/2 text-left md:pr-10">
    <h3 className="text-3xl md:text-5xl font-bold">Pricing Plans</h3>
    <p className="mt-4 text-lg">Choose the perfect plan that fits your fitness journey.</p>
    <ul className="mt-4 space-y-3 text-lg">
      <li>💰 <strong>Basic:</strong> Rs 1500/mo - Access to gym & group classes</li>
      <li>💪 <strong>Pro:</strong> Rs 4000/mo - Includes personal training & nutrition plan</li>
      <li>🔥 <strong>Elite:</strong> Rs 6000/mo - VIP access with advanced coaching</li>
    </ul>
    <button className=" cursor-pointer mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
      Get Started
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
  <Image
    src="/gym.webp"  // Ensure this image exists in the public folder
    alt="Pricing Plans"
    width={500}  // Set an appropriate width
    height={300} // Set an appropriate height
    className="rounded-lg shadow-lg"
  />
</div>
</section>


      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h3 className="text-3xl font-bold">Contact Us</h3>
        <p>Email: info@balajifitness.com | Phone: 0000000000</p>
        <p>All rights reserved @Hardish </p>
      </section>

      {/* Chatbot Button */}
      <div className="fixed bottom-5 right-5">
      <Link href="/chat">
          <button className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-500 transition">
            Chat with us
          </button>
        </Link>
      </div>

      {/* Chatbot Box */}
      {chatOpen && (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <h1 className="text-4xl font-bold">Welcome to Gym Elite</h1>
         <Chatbot />
       </div>
      )}
    </div>
  );
}
