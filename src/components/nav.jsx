import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  return (
    <div className="bg-black p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Student Management System</div>
        <ul className="flex space-x-6">
          <li className="mt-3">
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/view" className="text-white hover:text-gray-400">
              Student
            </Link>
          </li>
          {/* <li className="mt-3">
            <Link to="/members" className="text-white hover:text-gray-400">
              Members
            </Link>
          </li> */}
          <li className="mt-3">
            <Link to="/about" className="text-white hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <button className="text-white hover:text-gray-400">
              <UserButton />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
