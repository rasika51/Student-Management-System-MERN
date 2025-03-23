import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/nav";

const View = () => {
  const [data, setData] = useState([]); // State to store student data
  const [searchTerm, setSearchTerm] = useState(""); // State to handle search input
  const navigate = useNavigate();

  // Fetch student data from the API
  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Failed to fetch student data. Please try again later.");
      });
  }, []);

  // Handle student deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      fetch(`http://localhost:5000/api/students/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete student");
          }
          return response.json();
        })
        .then(() => {
          setData((prevData) => prevData.filter((item) => item._id !== id));
          alert("Student deleted successfully.");
        })
        .catch((error) => {
          console.error("Error deleting student:", error);
          alert("Failed to delete student. Please try again later.");
        });
    }
  };

  // Handle navigation to the update page
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  // Filter students based on the search term
  const filteredData = data.filter((student) =>
    student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <NavBar />
      <div className="container mx-auto p-6">
        <h2 className="text-center text-gray-800 text-3xl font-bold mb-6">
          Searching Student
        </h2>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a student..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-200 text-sm text-gray-700">
                <th className="py-3 px-4 border-b">Student Id</th>
                <th className="py-3 px-4 border-b">Student Name</th>
                <th className="py-3 px-4 border-b">Grade</th>
                <th className="py-3 px-4 border-b">Contact NO</th>
                <th className="py-3 px-4 border-b">Gender</th>
                <th className="py-3 px-4 border-b">Registered Date</th>
                <th className="py-3 px-4 border-b">Update</th>
                <th className="py-3 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item._id} className="border-b text-sm hover:bg-gray-50">
                    <td className="py-3 px-4">{item.studentId}</td>
                    <td className="py-3 px-4">{item.studentName}</td>
                    <td className="py-3 px-4">{item.grade}</td>
                    <td className="py-3 px-4">{item.contactNo}</td>
                    <td className="py-3 px-4">{item.gender}</td>
                    <td className="py-3 px-4">
                      {new Date(item.registeredDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                      >
                        Update
                      </button>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-600">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View;