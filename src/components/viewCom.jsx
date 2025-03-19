import React, { useState, useEffect } from "react";


const ReturnBook = () => {
  const [data, setData] = useState([]);

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
     
      <div className="container mx-auto p-6">
        
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
                <th className="py-3 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item._id} className="border-b text-sm">
                    <td className="py-3 px-4">{item.bookID}</td>
                    <td className="py-3 px-4">{item.bookName}</td>
                    <td className="py-3 px-4">{item.memberID}</td>
                    <td className="py-3 px-4">{item.memberName}</td>
                    <td className="py-3 px-4">
                      {new Date(item.issueDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      {new Date(item.returnDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                        onClick={() => handleReturnClick(item._id)}
                      >
                        Return
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-600">
                    No Studenet available
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

export default ReturnBook;