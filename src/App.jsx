import { useState } from "react";
import UserDetails from "./components/UserDetails";
import AccountCreate from "./components/AccountCreate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="p-6">
      <ToastContainer />
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 rounded-lg focus:outline-none ${
            activeTab === "userDetails"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("userDetails")}
        >
          User Details
        </button>
        <button
          className={`py-2 px-4 rounded-lg focus:outline-none ${
            activeTab === "accountCreation"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("accountCreation")}
        >
          Account Creation
        </button>
      </div>
      <div className="mt-6">
        {activeTab === "userDetails" ? <UserDetails /> : <AccountCreate />}
      </div>
    </div>
  );
}

export default App;
