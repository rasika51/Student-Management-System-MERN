
import React, { useState } from "react";
import NavBar from "../components/nav.jsx";
import ViewCom from "../components/viewCom.jsx";

import { useNavigate } from "react-router-dom";
import Update from "./update.jsx"

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = () => setFormOpen(true);
  const handleClose = () => setFormOpen(false);

  const navigate = useNavigate();
  const handleUpdate = () => navigate("/update");
  const handleView = () => navigate("/view");
  const handleAdd = () => navigate("/add");
  const handleDelete = () => navigate("/delete");

  return (
    <div className="flex flex-col min-h-screen h-full">
      <NavBar />
      <div className="flex flex-row flex-grow mt-7 ">
        <div className="flex flex-col bg-white p-4 rounded-lg w-1/6 items-center shadow-lg">
          <span className="text-gray-600 text-lg font-medium mb-4">Admin Dashboard</span>
          <button
            className="w-38 h-11 mt-5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300 mb-3"
            onClick={handleAdd}
          >
            Add Student
          </button>
          <button
            className="w-38 h-11 mt-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300 mb-3"
            onClick={handleView}
          >
            View Student
          </button>
          <button
            className="w-38 h-11 mt-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300 mb-4"
            onClick={handleUpdate}
          >
            Updt Student
          </button>
          <button
            className="w-38 h-11 mt-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300 mb-4"
            onClick={handleDelete}
          >
            Delte Student
          </button>
        </div>
        <div className="flex flex-col flex-grow ml-5 bg-white p-5 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search for a student..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <ViewCom  />
        </div>
      </div>

      {/* {formOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-black"
              onClick={handleClose}
            >
              &times;
            </button>
            <AddBook onClose={handleClose} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Home;
