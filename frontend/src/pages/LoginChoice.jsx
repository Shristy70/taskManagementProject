import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Task Management System
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please choose your login type
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate('/admin/login')}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Admin Login
          </button>
          <button
            onClick={() => navigate('/user/login')}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            User Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;