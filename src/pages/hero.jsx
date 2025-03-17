import React from 'react';
import bgImage from '../assets/bg-img.jpg';

import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Home from "./Home.jsx";

function Hero() {
  return (
    <>
    <SignedOut>
    <div className="h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center">
        {/* Heading with Animation */}
        <h1 className="text-7xl font-bold mb-8 opacity-0 transform translate-y-10 animate-fadeInUp">
          Student Management System
        </h1>

        {/* Paragraph with Animation */}
        <p className="font-bold text-2xl max-w-xl mx-auto mb-8 opacity-0 transform translate-y-10 animate-fadeInUp delay-500">
          Manage student records efficiently with our system. Sign in to get started.
        </p>

        {/* Button with Animation */}
        <SignInButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md opacity-0 transform scale-90 animate-fadeInScale delay-1000" />
         
      </div>
    </div>
    </SignedOut>
    <SignedIn>
         <Home />
    </SignedIn>
  
  </>
  );
}

export default Hero;
