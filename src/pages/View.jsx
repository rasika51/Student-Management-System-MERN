import React, { useState, useEffect } from "react";
import NavBar from "../components/nav.jsx";
import ViewCom from "../components/viewCom.jsx"

const View = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:5000/api/issue-book")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleReturnClick = (id) => {
    setData((prevData) => prevData.filter((item) => item._id !== id));
    alert("Book returned successfully.");
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <NavBar/>
      <div className="container mx-auto p-6">
      <h2 className="text-center text-gray-800 text-3xl font-bold mb-6">
          Searching Student
        </h2>
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
    </div>
  );
};

export default View;