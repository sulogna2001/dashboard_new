import { useState } from "react";
import { toast } from "react-toastify";

const AccountCreate = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('A form was submitted:', { username, password });
    if (!username || !password) {
      toast.error('Fill up all the fields', {
        position: "top-right",
        autoClose: 3000, // Close the popup after 3000 milliseconds (adjust as needed)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    toast.success('Response submitted!', {
      position: "top-right",
      autoClose: 3000, // Close the popup after 3000 milliseconds (adjust as needed)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setUsername('')
    setPassword('')
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <div className="mt-1">
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="input-field"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="input-field"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="btn-primary"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default AccountCreate;
