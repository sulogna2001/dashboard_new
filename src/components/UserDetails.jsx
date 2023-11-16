//page for user details addition
import { useEffect, useState } from "react";

import data from "../../data";
const UserDetails = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setfiltered] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setfiltered(true)
  };

  useEffect(() => {
    if (!searchTerm) {
      setfiltered(false)
    }
  }, [searchTerm])

  const [selectedUser, setSelectedUser] = useState(null);

  const openPopup = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  const filteredUsers = data.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.ID.toString().includes(searchTerm.toLowerCase()) ||
      user.create_date.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by Username, Email, Phone, ID, or Creation Date"
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 mb-4 w-2/5 rounded-md shadow-md focus:outline-none focus:ring focus:border-indigo-500"
      />

      <table className="min-w-full bg-indigo-100 rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
              <td className="border px-4 py-2">{user.ID}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 py-2">{user.create_date}</td>
              {filtered && <td className="border px-4 py-2">
                <button
                  onClick={() => openPopup(user)}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  View Details
                </button>
              </td>}

            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800">
          <div className="bg-white p-8 max-w-md rounded-lg shadow-md">
            <div className="flex justify-end">
              <button onClick={closePopup} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                &times;
              </button>
            </div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">User Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-indigo-600">
                <p className="text-gray-700 font-semibold">ID:</p>
                <p className="text-gray-900 text-lg">{selectedUser.ID}</p>
              </div>
              <div className="text-indigo-600">
                <p className="text-gray-700 font-semibold">Username:</p>
                <p className="text-gray-900 text-lg">{selectedUser.username}</p>
              </div>
              <div className="text-indigo-600">
                <p className="text-gray-700 font-semibold">Email:</p>
                <p className="text-gray-900 text-lg">{selectedUser.email}</p>
              </div>
              <div className="text-indigo-600">
                <p className="text-gray-700 font-semibold">Phone:</p>
                <p className="text-gray-900 text-lg">{selectedUser.phone}</p>
              </div>
              <div className="text-indigo-600">
                <p className="text-gray-700 font-semibold">Creation Date:</p>
                <p className="text-gray-900 text-lg">{selectedUser.create_date}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
