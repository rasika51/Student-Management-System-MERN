import React, { useState } from "react";

function IssueBook() {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [startIssueDate, setStartIssueDate] = useState("");
  const [endIssueDate, setEndIssueDate] = useState("");

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-left text-gray-800 text-2xl font-bold mb-5 ml-4">Add Student</h2>

      <div className="bg-gray-200 p-4 rounded-lg mb-5">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Student Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Student Name"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Grade</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Student Grade"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Contact Number</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Contact Number"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Gender</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Male/Female"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
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
              value={endIssueDate}
              onChange={(e) => setEndIssueDate(e.target.value)}
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

export default IssueBook;