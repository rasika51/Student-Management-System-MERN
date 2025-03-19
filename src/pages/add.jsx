import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {

  // State for form inputs
  const [studentID, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      studentId,
      studentName,
      grade,
      contactNo,
      gender,
      registeredDate,
    };

    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        alert("Student added successfully!");
        // Clear form fields
        setStudentId("");
        setStudentName("");
        setGrade("");
        setContactNo("");
        setGender("");
        setRegisteredDate("");
        // Redirect to the view page
        navigate("/view");
      } else {
        alert("Failed to add student. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the student.");
    }
  };



  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-gray-800 text-2xl font-bold mb-5 ml-4">Add Student</h2>

      <div className="bg-gray-200 p-4 rounded-lg mb-5">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Student ID</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Student id"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Student Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Age</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Student age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Contact Number</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Gender</label>
              <select
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-8">
          {/* <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">City</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={startIssueDate}
              onChange={(e) => setStartIssueDate(e.target.value)}
            />
          </div> */}
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Registered Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={registeredDate}
              onChange={(e) => setRegisteredDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition-all">
          Add Student
        </button>
      </div>
    </div>
  );
}

export default Add;